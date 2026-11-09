/** Integer-cent arithmetic. Percentage fees use exact rational rates and half-up rounding. */
export function assertCents(value, label = 'cents', allowNegative = false) {
  if (!Number.isSafeInteger(value) || (!allowNegative && value < 0)) {
    throw new TypeError(`${label} must be ${allowNegative ? 'a safe' : 'a nonnegative safe'} integer number of cents`);
  }
  return value;
}
export function roundRatio(numerator, denominator) {
  if (!Number.isSafeInteger(numerator) || !Number.isSafeInteger(denominator) || denominator <= 0) {
    throw new TypeError('roundRatio requires safe integer numerator and positive denominator');
  }
  const n = BigInt(numerator), d = BigInt(denominator), sign = n < 0n ? -1n : 1n;
  const abs = n < 0n ? -n : n;
  const rounded = sign * ((abs * 2n + d) / (d * 2n));
  const result = Number(rounded);
  if (!Number.isSafeInteger(result)) throw new RangeError('Rounded result exceeds safe integer range');
  return result;
}
export function feeCents(amountCents, rateNumerator = 29, rateDenominator = 1000, fixedCents = 30) {
  assertCents(amountCents, 'payment amount'); assertCents(fixedCents, 'fixed processing fee');
  if (!Number.isSafeInteger(rateNumerator) || rateNumerator < 0 || !Number.isSafeInteger(rateDenominator) || rateDenominator <= 0 || rateNumerator >= rateDenominator) {
    throw new TypeError('Processing rate must be an exact nonnegative fraction below one');
  }
  const product = amountCents * rateNumerator;
  if (!Number.isSafeInteger(product)) throw new RangeError('Fee multiplication exceeds safe integer range');
  return roundRatio(product, rateDenominator) + fixedCents;
}
export function formatCents(cents) {
  assertCents(cents, 'display amount', true);
  const magnitude = Math.abs(cents);
  return `${cents < 0 ? '-' : ''}$${Math.floor(magnitude / 100)}.${String(magnitude % 100).padStart(2, '0')}`;
}
