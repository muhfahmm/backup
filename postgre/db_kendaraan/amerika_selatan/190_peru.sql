-- Data Kendaraan untuk peru
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'peru'), 'Sepeda Motor', 4798388),
  ((SELECT id FROM countries WHERE name_en = 'peru'), 'Mobil', 2559140),
  ((SELECT id FROM countries WHERE name_en = 'peru'), 'Bus', 6397),
  ((SELECT id FROM countries WHERE name_en = 'peru'), 'Truk', 31989);