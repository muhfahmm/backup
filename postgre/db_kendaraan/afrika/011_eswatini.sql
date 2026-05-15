-- Data Kendaraan untuk eswatini
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'eswatini'), 'Sepeda Motor', 170428),
  ((SELECT id FROM countries WHERE name_en = 'eswatini'), 'Mobil', 90895),
  ((SELECT id FROM countries WHERE name_en = 'eswatini'), 'Bus', 227),
  ((SELECT id FROM countries WHERE name_en = 'eswatini'), 'Truk', 1136);