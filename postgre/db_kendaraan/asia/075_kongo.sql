-- Data Kendaraan untuk kongo
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'kongo'), 'Sepeda Motor', 786654),
  ((SELECT id FROM countries WHERE name_en = 'kongo'), 'Mobil', 419549),
  ((SELECT id FROM countries WHERE name_en = 'kongo'), 'Bus', 1048),
  ((SELECT id FROM countries WHERE name_en = 'kongo'), 'Truk', 5244);