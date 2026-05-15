-- Data Kendaraan untuk rusia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'rusia'), 'Sepeda Motor', 21671707),
  ((SELECT id FROM countries WHERE name_en = 'rusia'), 'Mobil', 11558244),
  ((SELECT id FROM countries WHERE name_en = 'rusia'), 'Bus', 28895),
  ((SELECT id FROM countries WHERE name_en = 'rusia'), 'Truk', 144478);