-- Data Kendaraan untuk kazakhstan
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'kazakhstan'), 'Sepeda Motor', 2740864),
  ((SELECT id FROM countries WHERE name_en = 'kazakhstan'), 'Mobil', 1461794),
  ((SELECT id FROM countries WHERE name_en = 'kazakhstan'), 'Bus', 3654),
  ((SELECT id FROM countries WHERE name_en = 'kazakhstan'), 'Truk', 18272);