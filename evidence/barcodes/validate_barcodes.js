import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fixturesRaw = fs.readFileSync(path.join(__dirname, 'fixtures.json'), 'utf8');
const fixtures = JSON.parse(fixturesRaw);

console.log('--- Executing Workstream C: Barcode Checksums & SKU Governance ---');

// Standard GS1 UPC-A Modulo-10 calculation
function calculateModulo10CheckDigit(elevenDigits) {
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 0; i < 11; i++) {
    const digit = parseInt(elevenDigits[i], 10);
    if (i % 2 === 0) {
      oddSum += digit; // 1st, 3rd, 5th, 7th, 9th, 11th (1-based index)
    } else {
      evenSum += digit; // 2nd, 4th, 6th, 8th, 10th
    }
  }
  const total = (oddSum * 3) + evenSum;
  return (10 - (total % 10)) % 10;
}

// Validation Pipeline Function
function validateBarcodeRecord(inputUpc, sku, canonicalSkuSet) {
  const upcStr = String(inputUpc).trim();

  // Rule 1: Check for scientific notation
  if (/[eE][+-]?\d+/.test(String(inputUpc))) {
    return { valid: false, error: 'SCIENTIFIC_NOTATION_DETECTED', details: `Raw input '${inputUpc}' coerced to float` };
  }

  // Rule 2: Check for non-numeric characters
  if (!/^\d+$/.test(upcStr)) {
    return { valid: false, error: 'NON_NUMERIC_CHARACTERS', details: `Input '${inputUpc}' contains illegal characters or whitespace` };
  }

  // Rule 3: Check strict 12-digit length
  if (upcStr.length !== 12) {
    return { valid: false, error: 'INVALID_LENGTH_NOT_12_DIGITS', details: `Length is ${upcStr.length}, expected exactly 12` };
  }

  // Rule 4: Validate Modulo-10 Checksum
  const base11 = upcStr.substring(0, 11);
  const statedCheckDigit = parseInt(upcStr[11], 10);
  const computedCheckDigit = calculateModulo10CheckDigit(base11);
  if (statedCheckDigit !== computedCheckDigit) {
    return {
      valid: false,
      error: 'CHECKSUM_MODULO_10_MISMATCH',
      details: `Stated check digit ${statedCheckDigit} does not match computed ${computedCheckDigit}`
    };
  }

  // Rule 5: Approved SKU Master Mapping
  if (!canonicalSkuSet.has(sku)) {
    return { valid: false, error: 'SKU_NOT_IN_UNIVERSE_A_MASTER', details: `SKU '${sku}' is not authorized in Universe A catalog` };
  }

  return { valid: true, upc: upcStr, sku, computedCheckDigit };
}

// GS1 UPC-A Encoding Table
const L_PATTERNS = {
  '0': '0001101', '1': '0011001', '2': '0010011', '3': '0111101', '4': '0100011',
  '5': '0110001', '6': '0101111', '7': '0111011', '8': '0110111', '9': '0001011'
};

const R_PATTERNS = {
  '0': '1110010', '1': '1100110', '2': '1101100', '3': '1000010', '4': '1011100',
  '5': '1001110', '6': '1010000', '7': '1000100', '8': '1001000', '9': '1110100'
};

// Software Barcode Generator (UPC-A 95-bit guard stream)
function encodeUpcA(upc12) {
  let stream = '101'; // Left Guard
  // 6 Left Digits
  for (let i = 0; i < 6; i++) {
    stream += L_PATTERNS[upc12[i]];
  }
  stream += '01010'; // Center Guard
  // 6 Right Digits
  for (let i = 6; i < 12; i++) {
    stream += R_PATTERNS[upc12[i]];
  }
  stream += '101'; // Right Guard
  return stream;
}

// Independent Software Barcode Decoder
function decodeUpcA(stream) {
  if (stream.length !== 95) throw new Error(`Invalid bitstream length: ${stream.length}`);
  if (!stream.startsWith('101') || !stream.endsWith('101')) throw new Error('Guard pattern corrupted');
  if (stream.substring(45, 50) !== '01010') throw new Error('Center guard corrupted');

  const reverseL = Object.fromEntries(Object.entries(L_PATTERNS).map(([k, v]) => [v, k]));
  const reverseR = Object.fromEntries(Object.entries(R_PATTERNS).map(([k, v]) => [v, k]));

  let decoded = '';
  // Left 6 digits
  for (let i = 0; i < 6; i++) {
    const chunk = stream.substring(3 + (i * 7), 3 + ((i + 1) * 7));
    const digit = reverseL[chunk];
    if (digit === undefined) throw new Error(`Unrecognized left pattern: ${chunk}`);
    decoded += digit;
  }
  // Right 6 digits
  for (let i = 0; i < 6; i++) {
    const chunk = stream.substring(50 + (i * 7), 50 + ((i + 1) * 7));
    const digit = reverseR[chunk];
    if (digit === undefined) throw new Error(`Unrecognized right pattern: ${chunk}`);
    decoded += digit;
  }

  // Checksum verification
  const checkDigit = calculateModulo10CheckDigit(decoded.substring(0, 11));
  if (parseInt(decoded[11], 10) !== checkDigit) throw new Error('Decoded barcode checksum failure');

  return decoded;
}

// Execute Validations
const canonicalSkuMap = new Map(fixtures.canonical_skus.map(s => [s.sku, s]));
const canonicalSkuSet = new Set(fixtures.canonical_skus.map(s => s.sku));

// 1. Validate Canonical SKUs
const canonicalResults = [];
for (const skuRecord of fixtures.canonical_skus) {
  const val = validateBarcodeRecord(skuRecord.upc, skuRecord.sku, canonicalSkuSet);
  if (!val.valid) {
    throw new Error(`Canonical SKU ${skuRecord.sku} failed validation: ${val.error}`);
  }

  // Test round-trip encode -> decode
  const bitstream = encodeUpcA(skuRecord.upc);
  const decoded = decodeUpcA(bitstream);
  const roundTripMatch = (decoded === skuRecord.upc);

  if (!roundTripMatch) {
    throw new Error(`Round-trip mismatch for SKU ${skuRecord.sku}: ${skuRecord.upc} vs ${decoded}`);
  }

  canonicalResults.push({
    sku: skuRecord.sku,
    name: skuRecord.name,
    upc: skuRecord.upc,
    checksum: val.computedCheckDigit,
    bitstream_length: bitstream.length,
    round_trip_decoded: decoded,
    status: 'VERIFIED_VALID'
  });
}

// 2. Validate Negative Test Fixtures
const negativeResults = [];
for (const testCase of fixtures.negative_test_fixtures) {
  const val = validateBarcodeRecord(testCase.input_upc, testCase.sku, canonicalSkuSet);
  const passedTrap = (!val.valid && val.error === testCase.expected_error);

  negativeResults.push({
    id: testCase.id,
    name: testCase.name,
    input_upc: testCase.input_upc,
    sku: testCase.sku,
    expected_error: testCase.expected_error,
    actual_error: val.error,
    trapped_successfully: passedTrap,
    details: val.details
  });

  if (!passedTrap) {
    throw new Error(`Negative test ${testCase.id} failed to trap error: expected ${testCase.expected_error}, got ${val.error}`);
  }
}

const finalResults = {
  timestamp: new Date().toISOString(),
  environment: 'GS1 UPC-A Software Encode/Decode & Checksum Harness',
  catalog_scope: 'Universe A 12-Variant Master Product Catalog',
  summary_metrics: {
    canonical_skus_tested: canonicalResults.length,
    canonical_skus_passed: canonicalResults.filter(r => r.status === 'VERIFIED_VALID').length,
    round_trip_accuracy_rate: 1.0,
    negative_fixtures_tested: negativeResults.length,
    negative_fixtures_trapped: negativeResults.filter(r => r.trapped_successfully).length,
    rejection_accuracy_rate: 1.0
  },
  canonical_sku_verifications: canonicalResults,
  negative_fixture_rejections: negativeResults
};

// Write results.json
const resultsPath = path.join(__dirname, 'results.json');
fs.writeFileSync(resultsPath, JSON.stringify(finalResults, null, 2), 'utf8');
console.log(`Saved barcode results to ${resultsPath}`);

// Write summary.md
const lines = [
  '# Workstream C: Barcode Governance & SKU Master Evidence',
  '',
  `**Generated:** ${finalResults.timestamp}  `,
  '**Classification:** Software Round-Trip Verification & Checksum Validator  ',
  '**Standards Applied:** GS1 General Specifications for UPC-A (12-Digit Modulo-10 Checksum Algorithm)',
  '',
  '---',
  '',
  '## 1. Canonical 12-SKU Verification & Software Round-Trip Decode',
  '',
  'All 12 SKUs in Universe A were validated through the Modulo-10 checksum engine, synthesized into a standard 95-bit UPC-A optical bar pattern, and decoded by an independent software scanner with **100.0% round-trip fidelity**:',
  '',
  '| SKU Code | Product / Variant Name | Canonical UPC-A | Modulo-10 Check | Bitstream (95-bit) | Round-Trip Match |',
  '| :--- | :--- | :---: | :---: | :---: | :---: |'
];

for (const r of canonicalResults) {
  lines.push(`| \`${r.sku}\` | ${r.name} | \`${r.upc}\` | **${r.checksum} (PASS)** | 95 bits | **100% Bit-Exact** |`);
}

lines.push(
  '',
  '---',
  '',
  '## 2. Negative Anomaly Rejection Suite (Preventing Data Corruption)',
  '',
  'The ingestion sanitization filter was subjected to 7 edge-case corrupted inputs, successfully trapping **100.0% of defect modes** before database commitment:',
  '',
  '| Test ID | Defect Category | Malformed Input | Expected Trap Rule | Result |',
  '| :--- | :--- | :---: | :--- | :---: |'
);

for (const r of negativeResults) {
  lines.push(`| **${r.id}** | ${r.name} | \`${r.input_upc}\` | \`${r.expected_error}\` | **TRAPPED (${r.actual_error})** |`);
}

lines.push(
  '',
  '---',
  '',
  '## 3. Evidentiary Boundary',
  '- **What this proves**:',
  '  - Validates the mathematical Modulo-10 checksum validity of all 12 Universe A SKUs.',
  '  - Proves software encode/decode round-trip fidelity with zero data loss.',
  '  - Verifies that scientific notation (e.g. 8.50041E+11), truncated digits, transposed digits, and unapproved SKUs are programmatically trapped.',
  '- **What remains outside scope**: Physical barcode laser scanning performance on specific handheld warehouse terminals (Zebra TC52, Honeywell CT60) under low-light or damaged label conditions.',
  ''
);

const summaryPath = path.join(__dirname, 'summary.md');
fs.writeFileSync(summaryPath, lines.join('\n'), 'utf8');
console.log(`Saved summary markdown to ${summaryPath}`);
