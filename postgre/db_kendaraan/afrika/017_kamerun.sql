-- Data Kendaraan untuk kamerun
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'kamerun'), 'Sepeda Motor', 3782435),
  ((SELECT id FROM countries WHERE name_en = 'kamerun'), 'Mobil', 2017298),
  ((SELECT id FROM countries WHERE name_en = 'kamerun'), 'Bus', 5043),
  ((SELECT id FROM countries WHERE name_en = 'kamerun'), 'Truk', 25216);