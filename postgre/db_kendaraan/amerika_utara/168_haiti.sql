-- Data Kendaraan untuk haiti
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'haiti'), 'Sepeda Motor', 1668476),
  ((SELECT id FROM countries WHERE name_en = 'haiti'), 'Mobil', 889854),
  ((SELECT id FROM countries WHERE name_en = 'haiti'), 'Bus', 2224),
  ((SELECT id FROM countries WHERE name_en = 'haiti'), 'Truk', 11123);