-- Data Kendaraan untuk burkina faso
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'burkina faso'), 'Sepeda Motor', 2962730),
  ((SELECT id FROM countries WHERE name_en = 'burkina faso'), 'Mobil', 1580122),
  ((SELECT id FROM countries WHERE name_en = 'burkina faso'), 'Bus', 3950),
  ((SELECT id FROM countries WHERE name_en = 'burkina faso'), 'Truk', 19751);