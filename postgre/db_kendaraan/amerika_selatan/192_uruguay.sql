-- Data Kendaraan untuk uruguay
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'uruguay'), 'Sepeda Motor', 517394),
  ((SELECT id FROM countries WHERE name_en = 'uruguay'), 'Mobil', 275943),
  ((SELECT id FROM countries WHERE name_en = 'uruguay'), 'Bus', 689),
  ((SELECT id FROM countries WHERE name_en = 'uruguay'), 'Truk', 3449);