-- Data Kendaraan untuk chile
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'chile'), 'Sepeda Motor', 2809374),
  ((SELECT id FROM countries WHERE name_en = 'chile'), 'Mobil', 1498332),
  ((SELECT id FROM countries WHERE name_en = 'chile'), 'Bus', 3745),
  ((SELECT id FROM countries WHERE name_en = 'chile'), 'Truk', 18729);