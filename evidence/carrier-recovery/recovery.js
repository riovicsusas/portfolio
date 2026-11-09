import { createHash } from 'node:crypto';

// Focused JSON-schema constraints used by the selected UPS return fixtures.
// This is deliberately not a complete OpenAPI/JSON Schema implementation.
export function schemaErrors(value, schema, document, where = '$') {
  if (schema.$ref) {
    const target = schema.$ref.split('/').slice(1).reduce((v, part) => v[part.replaceAll('~1', '/').replaceAll('~0', '~')], document);
    return schemaErrors(value, target, document, where);
  }
  const errors = [];
  const types = schema.type === undefined ? [] : Array.isArray(schema.type) ? schema.type : [schema.type];
  const matchesType = type => type === 'null' ? value === null : type === 'array' ? Array.isArray(value) : type === 'object' ? value !== null && typeof value === 'object' && !Array.isArray(value) : type === 'integer' ? Number.isInteger(value) : typeof value === type;
  if (types.length && !types.some(matchesType)) return [`${where}: expected ${types.join(' or ')}`];
  if (schema.const !== undefined && value !== schema.const) errors.push(`${where}: const mismatch`);
  if (schema.enum && !schema.enum.includes(value)) errors.push(`${where}: invalid enum`);
  if (schema.oneOf && schema.oneOf.filter(s => schemaErrors(value, s, document, where).length === 0).length !== 1) errors.push(`${where}: oneOf mismatch`);
  if (typeof value === 'string') {
    if (schema.minLength !== undefined && value.length < schema.minLength) errors.push(`${where}: too short`);
    if (schema.maxLength !== undefined && value.length > schema.maxLength) errors.push(`${where}: too long`);
    if (schema.pattern && !new RegExp(schema.pattern).test(value)) errors.push(`${where}: pattern mismatch`);
  }
  if (Array.isArray(value) && schema.items) value.forEach((item, i) => errors.push(...schemaErrors(item, schema.items, document, `${where}[${i}]`)));
  if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
    for (const name of schema.required || []) if (!Object.hasOwn(value, name)) errors.push(`${where}.${name}: required`);
    for (const [name, child] of Object.entries(value)) {
      if (schema.properties?.[name]) errors.push(...schemaErrors(child, schema.properties[name], document, `${where}.${name}`));
      else if (schema.additionalProperties === false) errors.push(`${where}.${name}: unexpected property`);
      else if (schema.additionalProperties && typeof schema.additionalProperties === 'object') errors.push(...schemaErrors(child, schema.additionalProperties, document, `${where}.${name}`));
    }
  }
  return errors;
}

export function validateReturnRequest(request, specification) {
  const errors = [];
  if (request.method !== 'POST') errors.push('Return operation requires POST');
  const match = /^\/api\/deliveryintercept\/v2\/return\/([^/?]+)$/.exec(request.path || '');
  if (!match) errors.push('Unexpected return path');
  const op = specification.paths['/return/{tracking_number}'].post;
  const headers = Object.fromEntries(Object.entries(request.headers || {}).map(([k, v]) => [k.toLowerCase(), v]));
  for (const entry of op.parameters) {
    const parameter = entry.$ref ? entry.$ref.split('/').slice(1).reduce((v,k)=>v[k], specification) : entry;
    const value = parameter.in === 'header' ? headers[parameter.name.toLowerCase()] : parameter.name === 'tracking_number' ? match?.[1] : parameter.name === 'version' ? 'v2' : undefined;
    if (value === undefined) { if (parameter.required) errors.push(`Missing ${parameter.in} parameter ${parameter.name}`); }
    else errors.push(...schemaErrors(value, parameter.schema, specification, parameter.name));
  }
  // OAuth token validity cannot be established offline. Only presence/syntax is checked.
  if (!/^Bearer \S+$/.test(headers.authorization || '')) errors.push('Missing bearer authorization syntax');
  if (headers['content-type'] !== 'application/json') errors.push('JSON content type required by selected fixture');
  let body;
  try { body = typeof request.body === 'string' ? JSON.parse(request.body) : request.body; }
  catch { errors.push('Malformed request JSON'); return errors; }
  if (body === undefined) return [...errors, 'Return request body required by this adapter'];
  const bodySchema = op.requestBody.content['application/json'].schema;
  errors.push(...schemaErrors(body, bodySchema, specification));
  // The operation's documented RS return example and conditional field description.
  if (body?.requestType !== 'RS') errors.push('Return-to-sender adapter requires requestType RS');
  if (!body?.reasonForReturn) errors.push('RS operation requires an eligible reasonForReturn');
  return errors;
}

export function validateSuccessResponse(body, specification) {
  let parsed;
  try { parsed = typeof body === 'string' ? JSON.parse(body) : body; }
  catch { return { errors: ['Malformed response JSON'] }; }
  const schema = specification.paths['/return/{tracking_number}'].post.responses['200'].content['application/json'].schema;
  return { body: parsed, errors: schemaErrors(parsed, schema, specification) };
}

function canonical(value) {
  if (Array.isArray(value)) return value.map(canonical);
  if (value && typeof value === 'object') return Object.fromEntries(Object.keys(value).sort().map(k=>[k, canonical(value[k])]));
  return value;
}
export class RecoveryCoordinator {
  constructor(specification, { successFeeCents = 1750, failureFeeCents = 0 } = {}) {
    this.specification = specification;
    this.successFeeCents = successFeeCents;
    this.failureFeeCents = failureFeeCents;
    this.operations = new Map(); // Local simulator only; not a durable production store.
    this.submissions = 0;
  }
  request(id, request, { eligible = true, revision = 1 } = {}) {
    const fingerprint = createHash('sha256').update(JSON.stringify(canonical({ request, revision }))).digest('hex');
    const previous = this.operations.get(id);
    if (previous) {
      if (previous.fingerprint !== fingerprint) return { state: 'CONFLICT', effectCount: this.submissions };
      return previous;
    }
    const errors = validateReturnRequest(request, this.specification);
    const op = { id, revision, fingerprint, state: errors.length ? 'VALIDATION_FAILED' : eligible ? 'REQUESTED' : 'REJECTED', errors, modeled_fee_cents: 0, sequence: 0, eventIds: new Set(), history: [] };
    op.history.push({ state: op.state, at: new Date().toISOString(), simulated: true });
    this.operations.set(id, op);
    if (op.state === 'REQUESTED') this.submissions++;
    return op;
  }
  transition(op, state, reason) {
    op.state = state; op.history.push({ state, reason, at: new Date().toISOString(), simulated: true }); return op;
  }
  response(id, result) {
    const op = this.operations.get(id);
    if (!op || !['REQUESTED', 'UNKNOWN'].includes(op.state)) return op;
    if (result.timeout || result.httpStatus >= 500 || result.httpStatus === 429) return this.transition(op, 'UNKNOWN', 'Ambiguous remote outcome; reconcile before resubmission');
    if ([401,403].includes(result.httpStatus)) return this.transition(op, 'REJECTED', 'Synthetic authorization failure');
    if (result.httpStatus !== 200) return this.transition(op, 'REJECTED', 'Synthetic transport/business rejection');
    const validation = validateSuccessResponse(result.body, this.specification);
    if (validation.errors.length) { op.errors = validation.errors; return this.transition(op, 'UNKNOWN', 'Invalid response contract'); }
    if (validation.body.success !== true || validation.body.errors?.length) return this.transition(op, 'REJECTED', 'Business failure in HTTP 200 response');
    return this.transition(op, 'ACCEPTED', 'Electronic acceptance only; no physical outcome established');
  }
  reconcile(id, confirmedState) {
    const op = this.operations.get(id);
    if (op?.state !== 'UNKNOWN') return op;
    if (!['ACCEPTED','REJECTED'].includes(confirmedState)) return op;
    return this.transition(op, confirmedState, 'Simulated authoritative operation lookup');
  }
  event(id, event) {
    const op = this.operations.get(id);
    if (!op || op.state !== 'ACCEPTED' || event.revision !== op.revision || op.eventIds.has(event.id) || event.sequence <= op.sequence) return op;
    if (!['INTERCEPT_CONFIRMED','INTERCEPT_FAILED'].includes(event.type)) return op;
    op.eventIds.add(event.id); op.sequence = event.sequence;
    op.modeled_fee_cents = event.type === 'INTERCEPT_CONFIRMED' ? this.successFeeCents : this.failureFeeCents;
    return this.transition(op, event.type === 'INTERCEPT_CONFIRMED' ? 'SUCCEEDED' : 'FAILED', 'Injected carrier-event fixture; not real tracking');
  }
  snapshot(id) {
    const op = this.operations.get(id);
    return op && { ...op, eventIds: [...op.eventIds] };
  }
}
