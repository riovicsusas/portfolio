# Barcode Identity and Bitstream Verification

**Classification:** Executed local validation and shared-table UPC-A bitstream round-trip checks.

The included mappings are synthetic portfolio fixtures. Checksum validity and fixture approval do not establish GS1 registration, product ownership or an operational warehouse catalog.

## Approved fixture results

| SKU | Expected UPC-A text | Checksum / product match | Shared-table round trip |
|---|---|---|---|
| SYN-FSTK-MY | `850041234014` | PASS | PASS |
| SYN-FSTK-BO | `850041234021` | PASS | PASS |
| SYN-FSTK-WB | `850041234038` | PASS | PASS |
| SYN-FSTK-GA | `850041234045` | PASS | PASS |
| SYN-TNCT-AM | `850041234052` | PASS | PASS |
| SYN-TNCT-PM | `850041234069` | PASS | PASS |
| SYN-BNDL-MAO | `850041234076` | PASS | PASS |
| SYN-BNDL-BAB | `850041234083` | PASS | PASS |
| SYN-TMBL-MO | `850041234090` | PASS | PASS |
| SYN-TMBL-BW | `850041234106` | PASS | PASS |
| SYN-TMBL-SG | `850041234113` | PASS | PASS |
| SYN-ACC-WHSK | `850041234120` | PASS | PASS |

12/12 approved mappings passed; 12/12 bitstreams returned the original identifier. Each product also rejects a different approved product's checksum-valid UPC.

## Rejection cases

| Case | Expected rejection | Actual rejection |
|---|---|---|
| ERR-SCINOT-01 | SCIENTIFIC_NOTATION_DETECTED | SCIENTIFIC_NOTATION_DETECTED |
| ERR-SCINOT-02 | SCIENTIFIC_NOTATION_DETECTED | SCIENTIFIC_NOTATION_DETECTED |
| ERR-TRUNC-01 | INVALID_LENGTH_NOT_12_DIGITS | INVALID_LENGTH_NOT_12_DIGITS |
| ERR-CHKSUM-01 | CHECKSUM_MODULO_10_MISMATCH | CHECKSUM_MODULO_10_MISMATCH |
| ERR-CHKSUM-02 | CHECKSUM_MODULO_10_MISMATCH | CHECKSUM_MODULO_10_MISMATCH |
| ERR-UNAPPROVED-SKU | SKU_NOT_IN_UNIVERSE_A_MASTER | SKU_NOT_IN_UNIVERSE_A_MASTER |
| ERR-NON-NUMERIC | NON_NUMERIC_CHARACTERS | NON_NUMERIC_CHARACTERS |
| ERR-WRONG-PRODUCT | SKU_BARCODE_MISMATCH | SKU_BARCODE_MISMATCH |
| ERR-ZERO-PLACEHOLDER | PLACEHOLDER_BARCODE | PLACEHOLDER_BARCODE |
| ERR-BLANK | BLANK_BARCODE | BLANK_BARCODE |
| ERR-NUMERIC | BARCODE_TEXT_REQUIRED | BARCODE_TEXT_REQUIRED |
| ERR-NULL | BARCODE_TEXT_REQUIRED | BARCODE_TEXT_REQUIRED |
| ERR-WHITESPACE | NON_NUMERIC_CHARACTERS | NON_NUMERIC_CHARACTERS |
| ERR-APOSTROPHE | NON_NUMERIC_CHARACTERS | NON_NUMERIC_CHARACTERS |
| ERR-FORMULA | NON_NUMERIC_CHARACTERS | NON_NUMERIC_CHARACTERS |
| ERR-LONG | INVALID_LENGTH_NOT_12_DIGITS | INVALID_LENGTH_NOT_12_DIGITS |

16/16 negative fixtures produced the expected rejection. Inputs remain text; the validator does not trim or numerically coerce identifiers. Blank, all-zero, numeric, scientific-notation and wrong-product values are rejected.

## Scope

The encoder and decoder share pattern tables, so this checks bitstream self-consistency and identifier preservation. It does not verify an independent image decoder, printed-label quality, physical scanner performance or ShipBob terminal acceptance. No external dependencies or network calls are used.

## Executed checks

Run: `2026-11-11T09-15-03-307Z-b5589401` · Node v24.18.0

Passed: 58; failed: 0; skipped: 0.

| Check | Status | Detail |
|---|---|---|
| Fixture mapping has twelve unique SKU and UPC identities | passed |  |
| SYN-FSTK-MY: approved text, checksum and product match | passed |  |
| SYN-FSTK-MY: shared-table 95-bit round trip | passed |  |
| SYN-FSTK-MY: another approved product UPC is rejected | passed |  |
| SYN-FSTK-BO: approved text, checksum and product match | passed |  |
| SYN-FSTK-BO: shared-table 95-bit round trip | passed |  |
| SYN-FSTK-BO: another approved product UPC is rejected | passed |  |
| SYN-FSTK-WB: approved text, checksum and product match | passed |  |
| SYN-FSTK-WB: shared-table 95-bit round trip | passed |  |
| SYN-FSTK-WB: another approved product UPC is rejected | passed |  |
| SYN-FSTK-GA: approved text, checksum and product match | passed |  |
| SYN-FSTK-GA: shared-table 95-bit round trip | passed |  |
| SYN-FSTK-GA: another approved product UPC is rejected | passed |  |
| SYN-TNCT-AM: approved text, checksum and product match | passed |  |
| SYN-TNCT-AM: shared-table 95-bit round trip | passed |  |
| SYN-TNCT-AM: another approved product UPC is rejected | passed |  |
| SYN-TNCT-PM: approved text, checksum and product match | passed |  |
| SYN-TNCT-PM: shared-table 95-bit round trip | passed |  |
| SYN-TNCT-PM: another approved product UPC is rejected | passed |  |
| SYN-BNDL-MAO: approved text, checksum and product match | passed |  |
| SYN-BNDL-MAO: shared-table 95-bit round trip | passed |  |
| SYN-BNDL-MAO: another approved product UPC is rejected | passed |  |
| SYN-BNDL-BAB: approved text, checksum and product match | passed |  |
| SYN-BNDL-BAB: shared-table 95-bit round trip | passed |  |
| SYN-BNDL-BAB: another approved product UPC is rejected | passed |  |
| SYN-TMBL-MO: approved text, checksum and product match | passed |  |
| SYN-TMBL-MO: shared-table 95-bit round trip | passed |  |
| SYN-TMBL-MO: another approved product UPC is rejected | passed |  |
| SYN-TMBL-BW: approved text, checksum and product match | passed |  |
| SYN-TMBL-BW: shared-table 95-bit round trip | passed |  |
| SYN-TMBL-BW: another approved product UPC is rejected | passed |  |
| SYN-TMBL-SG: approved text, checksum and product match | passed |  |
| SYN-TMBL-SG: shared-table 95-bit round trip | passed |  |
| SYN-TMBL-SG: another approved product UPC is rejected | passed |  |
| SYN-ACC-WHSK: approved text, checksum and product match | passed |  |
| SYN-ACC-WHSK: shared-table 95-bit round trip | passed |  |
| SYN-ACC-WHSK: another approved product UPC is rejected | passed |  |
| ERR-SCINOT-01: Excel Standard Scientific Notation | passed |  |
| ERR-SCINOT-02: Excel Extended Scientific Notation | passed |  |
| ERR-TRUNC-01: Eleven-digit truncation; no missing digit is inferred | passed |  |
| ERR-CHKSUM-01: Incorrect check digit | passed |  |
| ERR-CHKSUM-02: Transposed Digits Checksum Failure | passed |  |
| ERR-UNAPPROVED-SKU: Unapproved Extraneous SKU Code | passed |  |
| ERR-NON-NUMERIC: Alphanumeric Character Corruption | passed |  |
| ERR-WRONG-PRODUCT: Another approved SKU barcode | passed |  |
| ERR-ZERO-PLACEHOLDER: All-zero placeholder | passed |  |
| ERR-BLANK: Empty text identifier | passed |  |
| ERR-NUMERIC: Numeric input requiring text | passed |  |
| ERR-NULL: Null input | passed |  |
| ERR-WHITESPACE: Whitespace surrounding digits | passed |  |
| ERR-APOSTROPHE: Literal spreadsheet apostrophe | passed |  |
| ERR-FORMULA: Spreadsheet formula export | passed |  |
| ERR-LONG: Overlong numeric text | passed |  |
| A valid leading-zero fixture remains exact text | passed |  |
| Decoder rejects truncated bitstreams | passed |  |
| Decoder rejects corrupted edge guards | passed |  |
| Decoder rejects corrupted center guards | passed |  |
| Encoder does not silently repair a wrong check digit | passed |  |
