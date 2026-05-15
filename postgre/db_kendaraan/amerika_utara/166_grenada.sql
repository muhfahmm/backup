-- Data Kendaraan untuk grenada
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'grenada'), 'Sepeda Motor', 16718),
  ((SELECT id FROM countries WHERE name_en = 'grenada'), 'Mobil', 8916),
  ((SELECT id FROM countries WHERE name_en = 'grenada'), 'Bus', 22),
  ((SELECT id FROM countries WHERE name_en = 'grenada'), 'Truk', 111);