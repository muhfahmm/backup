-- Data Kendaraan untuk andorra
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'andorra'), 'Sepeda Motor', 11550),
  ((SELECT id FROM countries WHERE name_en = 'andorra'), 'Mobil', 6160),
  ((SELECT id FROM countries WHERE name_en = 'andorra'), 'Bus', 15),
  ((SELECT id FROM countries WHERE name_en = 'andorra'), 'Truk', 77);