-- Data Kendaraan untuk swiss
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'swiss'), 'Sepeda Motor', 1276984),
  ((SELECT id FROM countries WHERE name_en = 'swiss'), 'Mobil', 681058),
  ((SELECT id FROM countries WHERE name_en = 'swiss'), 'Bus', 1702),
  ((SELECT id FROM countries WHERE name_en = 'swiss'), 'Truk', 8513);