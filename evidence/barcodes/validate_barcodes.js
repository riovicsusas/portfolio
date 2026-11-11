import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { createSuite } from '../lib/report.js';

const directory = path.dirname(fileURLToPath(import.meta.url));

// UPC-A checksum validates syntax. Product identity is checked separately.
export function calculateModulo10CheckDigit(elevenDigits) {
  if (typeof elevenDigits !== 'string' || !/^[0-9]{11}$/.test(elevenDigits)) {
    throw new TypeError('CHECK_DIGIT_REQUIRES_ELEVEN_DIGIT_TEXT');
  }
  const sum = [...elevenDigits].reduce((total, digit, index) =>
    total + Number(digit) * (index % 2 === 0 ? 3 : 1), 0);
  return (10 - sum % 10) % 10;
}

export function validateBarcodeRecord(inputUpc, sku, approvedMapping) {
  const reject = (error, details) => ({ valid: false, error, details });
  if (typeof inputUpc !== 'string') return reject('BARCODE_TEXT_REQUIRED', 'Numeric and other non-string identifiers are rejected before coercion.');
  if (inputUpc.length === 0) return reject('BLANK_BARCODE', 'A barcode is required.');
  if (/[eE][+-]?\d+/.test(inputUpc)) return reject('SCIENTIFIC_NOTATION_DETECTED', 'Restore from the approved variant mapping; no precision recovery is inferred.');
  if (!/^[0-9]+$/.test(inputUpc)) return reject('NON_NUMERIC_CHARACTERS', 'Export exact digits without whitespace, formulas or apostrophes.');
  if (inputUpc.length !== 12) return reject('INVALID_LENGTH_NOT_12_DIGITS', `Received ${inputUpc.length} digits.`);
  if (/^0{12}$/.test(inputUpc)) return reject('PLACEHOLDER_BARCODE', 'All-zero placeholders are prohibited.');
  const computedCheckDigit = calculateModulo10CheckDigit(inputUpc.slice(0, 11));
  if (Number(inputUpc[11]) !== computedCheckDigit) return reject('CHECKSUM_MODULO_10_MISMATCH', `Expected check digit ${computedCheckDigit}.`);
  const approved = approvedMapping.get(sku);
  if (!approved) return reject('SKU_NOT_IN_UNIVERSE_A_MASTER', `No approved fixture mapping for ${sku}.`);
  if (approved.upc !== inputUpc) return reject('SKU_BARCODE_MISMATCH', 'Checksum-valid barcode does not match this SKU.');
  return { valid: true, upc: inputUpc, sku, computedCheckDigit };
}

const L_PATTERNS = {
  '0': '0001101', '1': '0011001', '2': '0010011', '3': '0111101', '4': '0100011',
  '5': '0110001', '6': '0101111', '7': '0111011', '8': '0110111', '9': '0001011'
};
const R_PATTERNS = {
  '0': '1110010', '1': '1100110', '2': '1101100', '3': '1000010', '4': '1011100',
  '5': '1001110', '6': '1010000', '7': '1000100', '8': '1001000', '9': '1110100'
};

export function encodeUpcA(upc12) {
  if (typeof upc12 !== 'string' || !/^[0-9]{12}$/.test(upc12)) throw new TypeError('EXACT_TWELVE_DIGIT_TEXT_REQUIRED');
  if (calculateModulo10CheckDigit(upc12.slice(0, 11)) !== Number(upc12[11])) throw new Error('INVALID_CHECK_DIGIT');
  return '101' + [...upc12.slice(0, 6)].map(d => L_PATTERNS[d]).join('') + '01010' +
    [...upc12.slice(6)].map(d => R_PATTERNS[d]).join('') + '101';
}

// This decoder deliberately shares the encoder's pattern tables. It establishes
// bitstream self-consistency, not independent optical/image-decoder agreement.
export function decodeUpcA(stream) {
  if (typeof stream !== 'string' || !/^[01]{95}$/.test(stream)) throw new Error('INVALID_95_BIT_STREAM');
  if (!stream.startsWith('101') || !stream.endsWith('101')) throw new Error('GUARD_PATTERN_CORRUPTED');
  if (stream.slice(45, 50) !== '01010') throw new Error('CENTER_GUARD_CORRUPTED');
  const reverseL = Object.fromEntries(Object.entries(L_PATTERNS).map(([digit, pattern]) => [pattern, digit]));
  const reverseR = Object.fromEntries(Object.entries(R_PATTERNS).map(([digit, pattern]) => [pattern, digit]));
  let decoded = '';
  for (let index = 0; index < 12; index++) {
    const start = index < 6 ? 3 + index * 7 : 50 + (index - 6) * 7;
    const digit = (index < 6 ? reverseL : reverseR)[stream.slice(start, start + 7)];
    if (digit === undefined) throw new Error('UNRECOGNIZED_DIGIT_PATTERN');
    decoded += digit;
  }
  if (calculateModulo10CheckDigit(decoded.slice(0, 11)) !== Number(decoded[11])) throw new Error('DECODED_CHECKSUM_FAILURE');
  return decoded;
}

async function main() {
  const fixtures = JSON.parse(fs.readFileSync(path.join(directory, 'fixtures.json'), 'utf8'));
  const suite = createSuite('barcodes', {
    classification: 'Local identifier-validation tests and shared-table UPC-A bitstream self-consistency',
    inputs: ['fixtures.json']
  });
  const approved = new Map(fixtures.canonical_skus.map(record => [record.sku, record]));
  const canonicalResults = [];
  const negativeResults = [];
  await suite.check('Fixture mapping has twelve unique SKU and UPC identities', () => {
    assert.equal(fixtures.canonical_skus.length, 12);
    assert.equal(approved.size, 12);
    assert.equal(new Set(fixtures.canonical_skus.map(record => record.upc)).size, 12);
  });
  for (const [index, record] of fixtures.canonical_skus.entries()) {
    const validation = validateBarcodeRecord(record.upc, record.sku, approved);
    await suite.check(`${record.sku}: approved text, checksum and product match`, () => {
      assert.equal(validation.valid, true, validation.error);
      assert.equal(validation.upc, record.upc);
    });
    let decoded;
    await suite.check(`${record.sku}: shared-table 95-bit round trip`, () => {
      const stream = encodeUpcA(record.upc);
      assert.equal(stream.length, 95);
      decoded = decodeUpcA(stream);
      assert.equal(decoded, record.upc);
    });
    await suite.check(`${record.sku}: another approved product UPC is rejected`, () => {
      const other = fixtures.canonical_skus[(index + 1) % fixtures.canonical_skus.length];
      const actual = validateBarcodeRecord(other.upc, record.sku, approved);
      assert.equal(actual.valid, false);
      assert.equal(actual.error, 'SKU_BARCODE_MISMATCH');
    });
    canonicalResults.push({ sku: record.sku, name: record.name, upc: record.upc,
      checksum: validation.computedCheckDigit, valid: validation.valid,
      round_trip_decoded: decoded, round_trip_match: decoded === record.upc });
  }
  for (const fixture of fixtures.negative_test_fixtures) {
    const actual = validateBarcodeRecord(fixture.input_upc, fixture.sku, approved);
    await suite.check(`${fixture.id}: ${fixture.name}`, () => {
      assert.equal(actual.valid, false);
      assert.equal(actual.error, fixture.expected_error);
    });
    negativeResults.push({ ...fixture, actual_error: actual.error,
      trapped_successfully: actual.valid === false && actual.error === fixture.expected_error });
  }
  await suite.check('A valid leading-zero fixture remains exact text', () => {
    const mapping = new Map([['LEADING-ZERO-TEST', { upc: '085001234562' }]]);
    assert.equal(validateBarcodeRecord('085001234562', 'LEADING-ZERO-TEST', mapping).upc, '085001234562');
    assert.equal(decodeUpcA(encodeUpcA('085001234562')), '085001234562');
    assert.equal(validateBarcodeRecord(85001234562, 'LEADING-ZERO-TEST', mapping).error, 'BARCODE_TEXT_REQUIRED');
  });
  const validStream = encodeUpcA(fixtures.canonical_skus[0].upc);
  await suite.check('Decoder rejects truncated bitstreams', () => assert.throws(() => decodeUpcA(validStream.slice(1)), /INVALID_95_BIT_STREAM/));
  await suite.check('Decoder rejects corrupted edge guards', () => assert.throws(() => decodeUpcA('000' + validStream.slice(3)), /GUARD_PATTERN_CORRUPTED/));
  await suite.check('Decoder rejects corrupted center guards', () => assert.throws(() => decodeUpcA(validStream.slice(0, 45) + '11111' + validStream.slice(50)), /CENTER_GUARD_CORRUPTED/));
  await suite.check('Encoder does not silently repair a wrong check digit', () => assert.throws(() => encodeUpcA('850041234017'), /INVALID_CHECK_DIGIT/));

  const passedCanonical = canonicalResults.filter(record => record.valid).length;
  const passedRoundTrips = canonicalResults.filter(record => record.round_trip_match).length;
  const rejected = negativeResults.filter(record => record.trapped_successfully).length;
  const markdown = `# Barcode Identity and Bitstream Verification

**Classification:** Executed local validation and shared-table UPC-A bitstream round-trip checks.

The included mappings are synthetic portfolio fixtures. Checksum validity and fixture approval do not establish GS1 registration, product ownership or an operational warehouse catalog.

## Approved fixture results

| SKU | Expected UPC-A text | Checksum / product match | Shared-table round trip |
|---|---|---|---|
${canonicalResults.map(record => `| ${record.sku} | \`${record.upc}\` | ${record.valid ? 'PASS' : 'FAIL'} | ${record.round_trip_match ? 'PASS' : 'FAIL'} |`).join('\n')}

${passedCanonical}/${canonicalResults.length} approved mappings passed; ${passedRoundTrips}/${canonicalResults.length} bitstreams returned the original identifier. Each product also rejects a different approved product's checksum-valid UPC.

## Rejection cases

| Case | Expected rejection | Actual rejection |
|---|---|---|
${negativeResults.map(record => `| ${record.id} | ${record.expected_error} | ${record.actual_error || 'NONE'} |`).join('\n')}

${rejected}/${negativeResults.length} negative fixtures produced the expected rejection. Inputs remain text; the validator does not trim or numerically coerce identifiers. Blank, all-zero, numeric, scientific-notation and wrong-product values are rejected.

## Scope

The encoder and decoder share pattern tables, so this checks bitstream self-consistency and identifier preservation. It does not verify an independent image decoder, printed-label quality, physical scanner performance or ShipBob terminal acceptance. No external dependencies or network calls are used.
`;
  suite.finish({
    outputName: 'results.json',
    data: {
      catalog_scope: fixtures.catalog_universe,
      identifier_provenance: fixtures.identifier_provenance,
      summary_metrics: { canonical_skus_tested: canonicalResults.length, canonical_skus_passed: passedCanonical,
        round_trips_passed: passedRoundTrips, negative_fixtures_tested: negativeResults.length, negative_fixtures_trapped: rejected },
      canonical_sku_verifications: canonicalResults,
      negative_fixture_rejections: negativeResults
    },
    markdown,
    sources: [{ classification: 'Scenario input', path: 'fixtures.json', description: fixtures.identifier_provenance }]
  });
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch(error => { console.error(error); process.exitCode = 1; });
}
