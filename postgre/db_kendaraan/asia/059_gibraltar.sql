-- Data Kendaraan untuk gibraltar
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'gibraltar'), 'Sepeda Motor', 5057),
  ((SELECT id FROM countries WHERE name_en = 'gibraltar'), 'Mobil', 2697),
  ((SELECT id FROM countries WHERE name_en = 'gibraltar'), 'Bus', 6),
  ((SELECT id FROM countries WHERE name_en = 'gibraltar'), 'Truk', 33);