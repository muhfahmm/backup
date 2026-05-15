-- Data Kendaraan untuk republik uganda
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'republik uganda'), 'Sepeda Motor', 6408470),
  ((SELECT id FROM countries WHERE name_en = 'republik uganda'), 'Mobil', 3417851),
  ((SELECT id FROM countries WHERE name_en = 'republik uganda'), 'Bus', 8544),
  ((SELECT id FROM countries WHERE name_en = 'republik uganda'), 'Truk', 42723);