# Database Index Kepuasan - Structure

✅ **207 Country Files Created Successfully**

## Regional Distribution

| Region | ID Range | Count | Files |
|--------|----------|-------|-------|
| Afrika | 1-53 | 53 | 1_afrika_selatan.ts through 53_tunisia.ts |
| Asia | 54-102 | 49 | 54_afganistan.ts through 102_yordania.ts |
| Eropa | 103-151 | 49 | 103_albania.ts through 151_yunani.ts |
| NA (North America) | 152-178 | 27 | 152_amerika_serikat.ts through 178_trinidad_dan_tobago.ts |
| Oceania | 179-194 | 16 | 179_australia.ts through 194_vanuatu.ts |
| SA (South America) | 195-207 | 13 | 195_argentina.ts through 207_venezuela.ts |
| **TOTAL** | **1-207** | **207** | |

## File Format

Each file uses the naming convention: `{ID}_{country_name}.ts`

Example:
- `1_afrika_selatan.ts`
- `54_afganistan.ts`
- `207_venezuela.ts`

## File Content Structure

```typescript
// @ts-nocheck
export const {country_name}_kepuasan = {
  id: {number},
  name: '{country_name}',
  livingCostIndex: {number},
  region: '{region_name}',
};
```

## Data Mapping

- **ID**: Global country identifier (1-207) - sequential across all regions
- **Name**: Country name in Indonesian
- **livingCostIndex**: Cost of living metric based on original kesejahteraan data
- **Region**: Geographic region grouping (afrika, asia, eropa, na, oceania, sa)

## Consistency

This database matches the structure and ID mapping of `database_hubungan_antar_negara`:
- Same 207 countries
- Same ID assignment
- Same regional grouping
- Same file naming convention
