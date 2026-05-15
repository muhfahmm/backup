-- Data Kendaraan untuk seychelles
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'seychelles'), 'Sepeda Motor', 14514),
  ((SELECT id FROM countries WHERE name_en = 'seychelles'), 'Mobil', 7740),
  ((SELECT id FROM countries WHERE name_en = 'seychelles'), 'Bus', 19),
  ((SELECT id FROM countries WHERE name_en = 'seychelles'), 'Truk', 96);