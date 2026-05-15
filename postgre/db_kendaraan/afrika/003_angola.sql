-- Data Kendaraan untuk angola
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'angola'), 'Sepeda Motor', 4621464),
  ((SELECT id FROM countries WHERE name_en = 'angola'), 'Mobil', 2464780),
  ((SELECT id FROM countries WHERE name_en = 'angola'), 'Bus', 6161),
  ((SELECT id FROM countries WHERE name_en = 'angola'), 'Truk', 30809);