-- Data Kendaraan untuk mozambik
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'mozambik'), 'Sepeda Motor', 4424394),
  ((SELECT id FROM countries WHERE name_en = 'mozambik'), 'Mobil', 2359676),
  ((SELECT id FROM countries WHERE name_en = 'mozambik'), 'Bus', 5899),
  ((SELECT id FROM countries WHERE name_en = 'mozambik'), 'Truk', 29495);