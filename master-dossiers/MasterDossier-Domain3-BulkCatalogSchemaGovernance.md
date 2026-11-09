# Enterprise Matrixify Migration & Barcode Schema Governance

---

## 1. Executive Summary & The Two Fatal Catalog Traps

### 1.1 The Operational Hazard
Direct-to-consumer product catalogs are not static spreadsheets—they are the foundational database schema powering storefront checkout, Google/Meta advertising feeds, warehouse robotic picking, and 3PL WMS barcode verification.

When merchandising teams or operators perform bulk updates (e.g. seasonal price changes, ingredient updates, or variant additions) using standard CSV spreadsheets, they frequently trigger two catastrophic, multi-thousand-dollar failure modes:

```mermaid
flowchart TD
    TrapA["**TRAP A: Numeric Coercion & Barcode Corruption**
    Excel / Google Sheets auto-formats 12-digit UPC-A barcodes
    as floating-point → scientific notation (8.50012E+11)
    or truncates leading zeros (012345678901 → 12345678901)
    ─────────────────────────────────────────────────
    CONSEQUENCE: Warehouse scanners reject product.
    Fulfillment halts. Emergency relabeling fees triggered."]

    TrapB["**TRAP B: Handle Mutation & SEO Crash**
    Shopify 'Handle' defines the live product URL slug:
    synapse-botanicals.myshopify.com/products/{handle}
    If renamed in CSV → all active links break:
    HTTP 404 storefront crashes, dead Meta/Google ad spend,
    immediate loss of Google SEO ranking history."]

    TrapA ~~~ TrapB
```

### 1.2 The Engineering Solution: Matrixify Non-Destructive MERGE
This Master Protocol establishes strict data hygiene standards:
1. **Mandatory Plain Text Schema Formatting**: Preserving barcodes as pure text strings without mathematical coercion, apostrophe artifacts, or formula wrappers.
2. **Handle Immutability Locks**: Permanent programmatic protection of live storefront URLs and SEO canonical paths.
3. **Targeted Matrixify MERGE Operations**: Using explicit `Command: MERGE` row operations to update specific columns without overwriting omitted attributes or desynchronizing unreserved inventory.
4. **16.67% Canary Batch Verification**: Pre-flight verification on 2 of 12 catalog variants before full batch release.

---

## 2. Field Mutation Risk Taxonomy (The 4 Hazard Tiers)

To govern who can edit what and prevent accidental database corruption, every field in Synapse Botanicals' 12-variant catalog is assigned to a strict Hazard Tier:

| Hazard Tier | Risk Level | Fields Included | Permitted Operators | Validation Rule | Impact of Failure |
|---|---|---|---|---|---|
| **Tier 1** | **Catastrophic** | `Barcode (UPC-A)`, `Handle`, `Variant ID`, `Inventory Quantity` | Lead TechOps Only | Strict regex (`^\d{12}$`), immutable primary key check | Halts warehouse picking; destroys Google SEO; causes physical inventory drift |
| **Tier 2** | **Financial** | `Variant Price`, `Compare At Price`, `Cost per Item`, `Variant Weight` | TechOps + Financial Controller | Decimal precision (`^\d+\.\d{2}$`), Price $>$ Cost check | Negative gross margins; carrier dimensional weight freight chargebacks |
| **Tier 3** | **Functional** | `Metafields`, `Product Tags`, `Category / Type`, `Status` | Merchandisers (Supervised) | Namespace schema linting, controlled tag taxonomy | Breaks storefront filtering, bundles, and Shopify Flow automation triggers |
| **Tier 4** | **Cosmetic** | `Title`, `Body (HTML)`, `Image Alt Text`, `SEO Description` | Marketing & Content Team | HTML syntax linting, character limit checks | Broken layout formatting, typos (non-operational impact) |

---

## 3. Technical Schema & Validation Matrix

### 3.1 Field-Level Specifications (Synapse Botanicals Core SKUs)

```
┌──────────────────┬──────────┬──────────────┬────────────────────────────────────────────────────────┐
│ Field Name       │ Data Type│ Hazard Tier  │ Mandatory Automated Validation Formula (Google Sheets) │
├──────────────────┼──────────┼──────────────┼────────────────────────────────────────────────────────┤
│ ID               │ Integer  │ Tier 1       │ =IF(ISNUMBER(A2), "VALID", "ERROR-INVALID-PRIMARY-KEY")│
│ Handle           │ String   │ Tier 1 (Lock)│ =IF(REGEXMATCH(B2, "^[a-z0-9-]+$"), "VALID", "INVALID")│
│ Title            │ String   │ Tier 4       │ =IF(LEN(C2)>0, "VALID", "ERROR-BLANK-TITLE")           │
│ Variant Price    │ Decimal  │ Tier 2       │ =IF(AND(ISNUMBER(D2), D2>0), "VALID", "ERROR-PRICE")   │
│ Cost per Item    │ Decimal  │ Tier 2       │ =IF(AND(ISNUMBER(E2), E2<D2), "VALID", "NEGATIVE-MARGIN")│
│ Variant Barcode  │ String   │ Tier 1       │ =IF(REGEXMATCH(TO_TEXT(F2), "^[0-9]{12}$"), "VALID")  │
│ Variant Weight   │ Decimal  │ Tier 2       │ =IF(AND(ISNUMBER(G2), G2>0), "VALID", "ERROR-WEIGHT")  │
└──────────────────┴──────────┴──────────────┴────────────────────────────────────────────────────────┘
```

### 3.2 The Barcode Sanitization Script (Fixing Scientific Notation)
If a legacy CSV has already corrupted barcodes into scientific notation (e.g. `8.50012E+11`), standard text conversion will fail. The following transformation pipeline must be executed:

```javascript
/**
 * Barcode Reconstitution Pipeline (Regex Linter & String Coercion)
 */
function sanitizeBarcode(rawVal) {
  let str = String(rawVal).trim();
  
  // Detect and resolve scientific notation
  if (str.includes('E+') || str.includes('e+')) {
    let num = Number(str);
    str = BigInt(Math.round(num)).toString();
  }
  
  // Pad missing leading zeros for standard 12-digit UPC-A
  while (str.length < 12) {
    str = '0' + str;
  }
  
  // Final validation against UPC-A regex
  if (!/^\d{12}$/.test(str)) {
    throw new Error(`FATAL_BARCODE_CORRUPTION: ${str} failed 12-digit check`);
  }
  
  return "'" + str; // Explicit string coercion for spreadsheet export
}
```

---

## 4. Safe Matrixify MERGE Lifecycle & Execution SOP

In standard native Shopify CSV imports, updating partial attributes can inadvertently overwrite unlisted fields or reset inventory levels if blank cells are imported.

Matrixify provides targeted, non-destructive catalog updates by specifying a `Command` column with row-level operations (`MERGE`, `UPDATE`, `DELETE`, or `NEW`). Rows are matched by primary key (`ID`, `Handle`, or `Variant SKU`). In a `MERGE` operation, Matrixify updates only the populated cells in each row, leaving omitted columns, unlisted variants, and untouched metafields intact. Note that Matrixify imports process rows sequentially via API batches rather than executing a globally atomic single-transaction rollback.

```mermaid
flowchart TD
    G1["**Gate 1: Targeted Column Pruning**
    Strip all unneeded columns from import file.
    Include only primary keys (ID, Handle, SKU)
    and exact fields undergoing mutation."] --> G2

    G2["**Gate 2: Matrixify Command Configuration**
    Set column header 'Command' with row value 'MERGE'.
    Updates only populated fields;
    preserves unlisted metafields and inventory."] --> G3

    G3["**Gate 3: Automated Pre-Flight Schema Linter**
    Execute checksum and regex linters against 100% of rows.
    Zero blocking errors permitted before deployment."] --> G4

    G4["**Gate 4: 16.67% Canary Batch Test**
    Import 2 of 12 variants via Matrixify.
    Verify storefront response and scan barcode
    against ShipBob WMS test terminal."] --> G5

    G5["**Gate 5: Full Production Deployment (83.33%)**
    Deploy remaining 10 variants.
    Archive audit diff and validation logs."]

    G5 --> Done(["✅ Catalog Deployment Complete"])
```

---

## 5. Empirical Proof: The 12-Variant Master Mutation Audit

To validate this protocol under audit conditions, an empirical mutation was executed on Synapse Botanicals' core SKU catalog (12 variants across 5 product lines: Focus Stick Packs, Adaptogen Tinctures, Starter Bundles, Tumblers, and Whisks).

### 5.1 Pre-Flight Telemetry Log (Initial Scan Before Sanitization)

```
09:15:10 EDT [AUDIT-SCAN] Starting pre-flight validation on Catalog_Mutation_v2.xlsx
09:15:12 EDT [FAIL-WARN] Row 2 (SYN-FSTK-MY): Barcode rendered as 8.40001E+11 [SCIENTIFIC_NOTATION]
09:15:13 EDT [FAIL-WARN] Row 6 (SYN-TNCT-AM): Barcode rendered as 84000103000 (11 digits - Missing Trailing Digit)
09:15:14 EDT [FAIL-CRIT] Row 10 (SYN-TMBL-MO): Handle mutated from 'precision-insulated-tumbler-durable-merchandise' to 'precision-insulated-tumbler-new' [HANDLE_MUTATION_BREACH]
09:15:15 EDT [AUDIT-STOP] Pre-flight failed: 3 blocking errors identified. Import aborted.
```

### 5.2 Remediation & Master Diff (Authoritative Recovery)

Damaged barcode entries were blocked by pre-flight linters and recovered from the authoritative SKU catalog mapping table rather than mathematical inference:

| SKU Code | Variant Name | Field Mutated | Pre-Audit Raw Value | Post-Sanitization Value | Verification |
|---|---|---|---|---|---|
| `SYN-FSTK-MY` | Focus Sticks Matcha Yuzu | Barcode | `8.40001E+11` (Scientific Notation) | Authoritative Master UPC String | PASSED (Resolved from Master Mapping) |
| `SYN-TNCT-AM` | Adaptogen Tincture AM | Barcode | `84000103000` (11 Digits - Truncated) | Authoritative Master UPC String | PASSED (Resolved from Master Mapping) |
| `SYN-TMBL-MO` | Tumbler Matte Obsidian | Handle | `precision-insulated-tumbler-new` | `precision-insulated-tumbler-durable-merchandise` | PASSED (Canonical Handle Restored) |
| `SYN-FSTK-MY` | Focus Sticks Matcha Yuzu | Price | $40.00 | $42.00 | PASSED (Gross Margin: 79.76% at $8.50 COGS) |
| `SYN-TNCT-AM` | Adaptogen Tincture AM | Cost | $13.50 | $12.50 | PASSED (Reconciled to Production COGS) |

### 5.3 Post-Import Verification Protocol & Acceptance Criteria
- **Storefront URL Health**: 100% of product handles must return HTTP 200 OK across desktop and mobile storefront routes (0 broken links, 0 redirects to 404).
- **WMS Scanner Test Protocol**: Sample barcodes from the 16.67% canary batch (2 variants) and subsequent batch must scan cleanly on handheld WMS laser terminals without check-digit exceptions.
- **Inventory Variance Target**: 0 unlinked units and zero Available-to-Sell stock overwrites during MERGE execution.

---
