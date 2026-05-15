-- Data Kendaraan untuk guyana
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'guyana'), 'Sepeda Motor', 116850),
  ((SELECT id FROM countries WHERE name_en = 'guyana'), 'Mobil', 62320),
  ((SELECT id FROM countries WHERE name_en = 'guyana'), 'Bus', 155),
  ((SELECT id FROM countries WHERE name_en = 'guyana'), 'Truk', 779);