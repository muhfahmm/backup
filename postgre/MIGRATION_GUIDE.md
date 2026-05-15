# PostgreSQL Migration Guide - President Simulator

## Overview
Panduan lengkap untuk migrasi data dari JSON ke PostgreSQL database untuk President Simulator.

## Database Files

### 1. **00_create_database.sql** ✅ SELESAI
- **Fungsi**: Membuat database schema lengkap
- **Isi**:
  - Database creation
  - 40+ tables untuk berbagai aspek game
  - Indexes untuk performa
  - Views untuk common queries
  - Triggers untuk auto-update timestamp
  - Useful queries untuk analisis data (10 kategori)
- **Eksekusi**: Jalankan pertama kali untuk setup database

### 2. **04_insert_hubungan_negara.sql** ✅ BARU
- **Fungsi**: Insert data hubungan bilateral antar negara
- **Isi**:
  - 207 negara
  - Masing-masing negara memiliki 206 relasi dengan negara lain
  - **Total: 42,642 records** hubungan bilateral
- **Format Data**:
  ```sql
  (country_id, target_country_id, relation_value)
  ```
- **Relation Value**: 0-100 (menunjukkan kualitas hubungan)
- **Eksekusi**: Jalankan setelah database schema dibuat

## Execution Order

### Step 1: Setup Database Schema
```bash
psql -U postgres -d presiden_simulator -f 00_create_database.sql
```

### Step 2: Insert Bilateral Relations
```bash
psql -U postgres -d presiden_simulator -f 04_insert_hubungan_negara.sql
```

## Data Statistics

### Countries Coverage
- **Afrika**: 53 negara
- **Asia**: 49 negara
- **Eropa**: 49 negara
- **North America**: 27 negara
- **Oceania**: 16 negara
- **South America**: 13 negara
- **Total**: 207 negara

### Relations Data
- **Total Bilateral Relations**: 42,642
- **Per Country**: 206 relations (dengan semua negara lain)
- **Relation Values**: 
  - Minimum: 0 (hostile)
  - Maximum: 100 (excellent)
  - Default: 50 (neutral)

## Data Sources

### JSON Files Location
```
json/database_hubungan_antar_negara/
├── afrika/          (53 files)
├── asia/            (49 files)
├── eropa/           (49 files)
├── na/              (27 files)
├── oceania/         (16 files)
└── sa/              (13 files)
```

### File Format
Setiap file berisi array dengan struktur:
```typescript
export const [country]_relations = [
  { id: 1, name: "country_name", relation: 50 },
  { id: 2, name: "country_name", relation: 75 },
  ...
]
```

## Query Examples

### 1. Strongest Relations
```sql
SELECT 
    c1.name_en as country_1,
    c2.name_en as country_2,
    hn.relation_value
FROM hubungan_negara hn
JOIN countries c1 ON hn.country_id = c1.id
JOIN countries c2 ON hn.target_country_id = c2.id
WHERE hn.relation_value >= 80
ORDER BY hn.relation_value DESC;
```

### 2. Relations for Specific Country
```sql
SELECT 
    c2.name_en as partner_country,
    hn.relation_value
FROM countries c1
JOIN hubungan_negara hn ON c1.id = hn.country_id
JOIN countries c2 ON hn.target_country_id = c2.id
WHERE c1.name_en = 'Indonesia'
ORDER BY hn.relation_value DESC;
```

### 3. Average Relations by Continent
```sql
SELECT 
    c1.continent as continent_1,
    c2.continent as continent_2,
    AVG(hn.relation_value) as avg_relation,
    COUNT(*) as total_relations
FROM hubungan_negara hn
JOIN countries c1 ON hn.country_id = c1.id
JOIN countries c2 ON hn.target_country_id = c2.id
GROUP BY c1.continent, c2.continent
ORDER BY avg_relation DESC;
```

## Performance Notes

- **Foreign Key Constraints**: Temporarily deferred during insertion untuk kecepatan
- **Indexes**: Sudah dibuat untuk kolom frequently queried
- **Insertion Time**: ~5-10 detik untuk 42,642 records (tergantung hardware)

## Troubleshooting

### Error: "Duplicate key value violates unique constraint"
- Pastikan data belum di-insert sebelumnya
- Jalankan: `DELETE FROM hubungan_negara;` untuk clear data

### Error: "Foreign key constraint violation"
- Pastikan tabel `countries` sudah di-populate dengan data negara
- Jalankan file migration untuk countries terlebih dahulu

### Error: "Country name not found"
- Verifikasi nama negara di tabel `countries` sesuai dengan JSON files
- Gunakan query: `SELECT DISTINCT name_en FROM countries ORDER BY name_en;`

## Next Steps

1. ✅ Database schema created
2. ✅ Bilateral relations inserted
3. ⏳ Insert kedutaan_besar (embassies) data
4. ⏳ Insert mitra_perdagangan (trade agreements) data
5. ⏳ Insert geopolitik data
6. ⏳ Insert ekonomi data (pajak, harga pasar, dll)
7. ⏳ Insert infrastruktur data
8. ⏳ Insert pertahanan data

## File Naming Convention

- `00_create_database.sql` - Database schema
- `01_setup_database.bat` - Batch script untuk Windows
- `02_run_migration.bat` - Run migration script
- `03_verify_data.bat` - Verify data integrity
- `04_insert_hubungan_negara.sql` - Bilateral relations (42,642 records)
- `05_insert_kedutaan_besar.sql` - Embassies (coming soon)
- `06_insert_mitra_perdagangan.sql` - Trade agreements (coming soon)
- `07_insert_geopolitik.sql` - Geopolitical data (coming soon)

## Contact & Support

Untuk pertanyaan atau issues, silakan buat issue di repository.

---
**Last Updated**: May 15, 2026
**Total Records**: 42,642 bilateral relations
**Status**: ✅ Ready for production
