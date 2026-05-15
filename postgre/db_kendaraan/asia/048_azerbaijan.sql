-- Data Kendaraan untuk azerbaijan
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'azerbaijan'), 'Sepeda Motor', 1490970),
  ((SELECT id FROM countries WHERE name_en = 'azerbaijan'), 'Mobil', 795184),
  ((SELECT id FROM countries WHERE name_en = 'azerbaijan'), 'Bus', 1987),
  ((SELECT id FROM countries WHERE name_en = 'azerbaijan'), 'Truk', 9939);