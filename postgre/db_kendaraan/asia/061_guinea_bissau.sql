-- Data Kendaraan untuk guinea bissau
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'guinea bissau'), 'Sepeda Motor', 281146),
  ((SELECT id FROM countries WHERE name_en = 'guinea bissau'), 'Mobil', 149944),
  ((SELECT id FROM countries WHERE name_en = 'guinea bissau'), 'Bus', 374),
  ((SELECT id FROM countries WHERE name_en = 'guinea bissau'), 'Truk', 1874);