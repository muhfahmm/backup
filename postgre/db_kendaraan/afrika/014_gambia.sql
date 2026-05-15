-- Data Kendaraan untuk gambia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'gambia'), 'Sepeda Motor', 342015),
  ((SELECT id FROM countries WHERE name_en = 'gambia'), 'Mobil', 182408),
  ((SELECT id FROM countries WHERE name_en = 'gambia'), 'Bus', 456),
  ((SELECT id FROM countries WHERE name_en = 'gambia'), 'Truk', 2280);