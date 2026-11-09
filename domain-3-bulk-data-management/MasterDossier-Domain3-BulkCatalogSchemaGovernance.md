# Bulk Catalog Schema & Barcode Governance

> **Empirical staging simulation.** Synapse Botanicals is a technical operations sandbox used to stress-test e-commerce failure modes with synthetic customer and order fixtures. Commercial charges and financial outcomes are scenario inputs and calculations. The verification section distinguishes supplied trace excerpts, reproducible model results, and acceptance criteria for the designed controls. No production customer data or live fulfillment is represented.

## 1. Executive Context & Failure Mode

Catalog mutations affect commercial pricing, product URLs, warehouse identification and inventory joins. Two failure modes drive this study: loss of identifier fidelity during spreadsheet/export handling, and unintended changes to immutable matching fields or public product handles.

Scientific notation can be display-only. A twelve-digit UPC-A is below JavaScript's exact-integer limit; the risks are leading-zero loss, rounded exported text and incorrect product matching. An uncontrolled handle change can break links when redirects are absent; it does not inherently crash the whole storefront or prove a loss of search ranking.

## 2. Governance & Architecture Protocol

### 2.1 Field controls

| Field | Preflight gate | Acceptance check |
|---|---|---|
| Product / variant ID | Opaque text; exact baseline match; unique row key | Same intended resource after import |
| SKU | Approved mapping to variant ID | No unintended create or reassignment |
| Barcode | Exact text, checksum, approved product mapping | Re-exported value and scanner decode agree |
| Handle | Equal to baseline for routine updates | Correct product and URL; authorized redirects if changed |
| Price / COGS | Currency precision; nonnegative costs; approved price | Recalculate contribution with fulfillment and fees |
| Weight / dimensions | Units explicit; valid service assumptions | Parcel billable-weight rules checked separately |
| Metafields / tags | Type, namespace and controlled vocabulary | No unintended field deletion or trigger |
| Inventory | Location and concurrent movement accounted for | Before + movement = after |

Regex validates character format, not identity, immutability or economic viability. A numeric ID check alone does not establish a real product; a positive price-minus-COGS does not establish positive order contribution.

### 2.2 UPC-A validation

Store identifiers as text before spreadsheet coercion. Export twelve digits without a formula or literal apostrophe. For the first eleven digits, multiply odd positions by three and even positions by one; the check digit makes the total divisible by ten.

```javascript
function validateUpcA(raw, approved) {
  if (typeof raw !== 'string' || !/^[0-9]{12}$/.test(raw)) {
    throw new Error('EXACT_12_DIGIT_TEXT_REQUIRED');
  }
  if (/^0{12}$/.test(raw)) throw new Error('PLACEHOLDER_NOT_ALLOWED');
  const sum = [...raw.slice(0, 11)].reduce(
    (n, digit, index) => n + Number(digit) * (index % 2 === 0 ? 3 : 1), 0
  );
  if (Number(raw[11]) !== (10 - sum % 10) % 10) {
    throw new Error('INVALID_CHECK_DIGIT');
  }
  if (raw !== approved) throw new Error('VARIANT_BARCODE_MISMATCH');
  return raw;
}
```

The approved mapping is resolved by variant ID from the source catalog. Checksum validity does not establish GS1 licensing or product ownership. `850012345671` and `085001234562` are checksum test vectors only, not licensed Synapse product identifiers.

### 2.3 Controlled importer operation

Native Shopify CSV and Matrixify have field-specific matching and blank-cell semantics. An omitted column is different from an included blank. A Matrixify `Command` column contains row values such as `UPDATE` or `MERGE`; `Command: MERGE` is not the header format.

For an existing-only change, select and validate an existing-only operation and the appropriate variant command. Use MERGE only when creation of unmatched records is intended. Resolve product and variant IDs against the baseline; reject unknown or duplicate matches. Validate exact current importer field behavior in a staging canary before deployment. The operation name does not imply global transaction atomicity.

Preserve targeted baseline values, IDs, types and location inventory. Submit only necessary fields; inspect included blanks deliberately. Record row-level import results and re-export for reconciliation. If a canary fails, stop the rest and restore only affected fields from the baseline, preserving unrelated concurrent changes.

## 3. Decision Matrix & Calculation Method

| Input / condition | Decision |
|---|---|
| Scientific notation in exported barcode | Reject; recover from approved mapping |
| Eleven-digit barcode | Reject; do not infer a missing leading zero |
| Twelve digits, invalid checksum | Reject |
| Valid checksum, wrong product mapping | Reject |
| Handle differs without authorization | Reject routine import |
| Any blocking preflight failure | No import |
| Partial importer success | Reconcile each affected resource before continuation |

`8.50012E+11` represents **850012000000**; it contains insufficient information to reconstruct another barcode. For prefix `85001234567`, weighted sum=89 and required check digit=1. For prefix `08500123456`, sum=68 and required check digit=2.

The canary design is two variants from a twelve-variant change set: **2/12=16.67%**. Continue with the remaining ten only after field, storefront, scanner and inventory checks pass. Select by mutation coverage as well as count; expand the canary when two variants do not cover the changed field types. No catalog-wide SKU coverage percentage is inferred from the change-set count.

For `SYN-NB-001`, price $48.00 and COGS $14.40 give **70.00% gross product margin**: `(48−14.40)/48`. At the prior $46 scenario price the result is 68.70%. A policy of at least 70% passes at $48; a strictly greater-than-70% policy does not. Fulfillment, freight, processing and discounts reduce contribution further.

## 4. Empirical Verification & Run Sheet

### 4.1 Staging rejection fixtures

| Case | SKU | Fault input | Gate result |
|---|---|---|---|
| Barcode representation | SYN-NB-001 | `8.50012E+11` | Reject exported scientific notation |
| Barcode length | SYN-FG-001 | `85001234567` | Reject eleven-digit value |
| Handle identity | SYN-NB-002 | `neurofocus-pm-new` instead of baseline handle | Reject unauthorized handle change |
| Import gate | Change set | Blocking preflight errors | Stop before import |

This compact case uses the PM 60ct fixture `SYN-NB-002`; variant identity is resolved from the actual staging catalog, not inferred from the title. The recoverable handle baseline is `neurofocus-pm`. Barcode recovery remains blocked until approved product mappings are supplied; checksum test vectors are not replacement catalog data.

### 4.2 Reproducible validator checks

```javascript
const assert = require('node:assert/strict');
// Run after the validateUpcA definition above.
assert.equal(validateUpcA('850012345671', '850012345671'), '850012345671');
assert.equal(validateUpcA('085001234562', '085001234562'), '085001234562');
for (const raw of ['', '8.50012E+11', '85001234567', '850012345678', '000000000000']) {
  assert.throws(() => validateUpcA(raw, '850012345671'));
}
assert.throws(() => validateUpcA('850012345671', '085001234562'));
```

### 4.3 Import acceptance record

For every changed variant, record baseline, submitted and re-exported values; product/variant IDs; command and row result; checksum/product-map results; decoded scanner output; old/new URL behavior; and location-level inventory reconciliation. A scanner decode must identify the expected SKU, not merely return digits. HTTP 200 must return the intended product; it does not measure search rankings.

The included fault cases and validator checks demonstrate rejection behavior. Full twelve-variant import, physical scanner and inventory acceptance requires the corresponding complete run record; those outcomes are not inferred from a five-row excerpt or a successful import summary.

## 5. Technical References

- [GS1 check-digit calculation](https://www.gs1.org/services/how-calculate-check-digit-manually).
- [Matrixify product import documentation](https://matrixify.app/documentation/products/) — confirm field-specific commands, matching and blanks for the selected import version.
- [Shopify product CSV documentation](https://help.shopify.com/en/manual/products/import-export/using-csv).
