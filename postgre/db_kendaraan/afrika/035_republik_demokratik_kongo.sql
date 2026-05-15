-- Data Kendaraan untuk republik demokratik kongo
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'republik demokratik kongo'), 'Sepeda Motor', 786654),
  ((SELECT id FROM countries WHERE name_en = 'republik demokratik kongo'), 'Mobil', 419549),
  ((SELECT id FROM countries WHERE name_en = 'republik demokratik kongo'), 'Bus', 1048),
  ((SELECT id FROM countries WHERE name_en = 'republik demokratik kongo'), 'Truk', 5244);