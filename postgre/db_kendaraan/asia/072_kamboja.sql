-- Data Kendaraan untuk kamboja
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'kamboja'), 'Sepeda Motor', 2437469),
  ((SELECT id FROM countries WHERE name_en = 'kamboja'), 'Mobil', 1299983),
  ((SELECT id FROM countries WHERE name_en = 'kamboja'), 'Bus', 3249),
  ((SELECT id FROM countries WHERE name_en = 'kamboja'), 'Truk', 16249);