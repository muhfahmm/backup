-- Data Kendaraan untuk inggris
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'inggris'), 'Sepeda Motor', 9969051),
  ((SELECT id FROM countries WHERE name_en = 'inggris'), 'Mobil', 5316827),
  ((SELECT id FROM countries WHERE name_en = 'inggris'), 'Bus', 13292),
  ((SELECT id FROM countries WHERE name_en = 'inggris'), 'Truk', 66460);