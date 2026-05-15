-- Data Kendaraan untuk nigeria
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'nigeria'), 'Sepeda Motor', 29381211),
  ((SELECT id FROM countries WHERE name_en = 'nigeria'), 'Mobil', 15669979),
  ((SELECT id FROM countries WHERE name_en = 'nigeria'), 'Bus', 39174),
  ((SELECT id FROM countries WHERE name_en = 'nigeria'), 'Truk', 195874);