-- Data Kendaraan untuk bosnia dan hercegovina
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'bosnia dan hercegovina'), 'Sepeda Motor', 498589),
  ((SELECT id FROM countries WHERE name_en = 'bosnia dan hercegovina'), 'Mobil', 265914),
  ((SELECT id FROM countries WHERE name_en = 'bosnia dan hercegovina'), 'Bus', 664),
  ((SELECT id FROM countries WHERE name_en = 'bosnia dan hercegovina'), 'Truk', 3323);