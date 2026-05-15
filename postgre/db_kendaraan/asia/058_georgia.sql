-- Data Kendaraan untuk georgia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'georgia'), 'Sepeda Motor', 558982),
  ((SELECT id FROM countries WHERE name_en = 'georgia'), 'Mobil', 298123),
  ((SELECT id FROM countries WHERE name_en = 'georgia'), 'Bus', 745),
  ((SELECT id FROM countries WHERE name_en = 'georgia'), 'Truk', 3726);