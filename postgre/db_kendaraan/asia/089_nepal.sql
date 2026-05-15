-- Data Kendaraan untuk nepal
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'nepal'), 'Sepeda Motor', 4213180),
  ((SELECT id FROM countries WHERE name_en = 'nepal'), 'Mobil', 2247029),
  ((SELECT id FROM countries WHERE name_en = 'nepal'), 'Bus', 5617),
  ((SELECT id FROM countries WHERE name_en = 'nepal'), 'Truk', 28087);