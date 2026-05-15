-- Data Kendaraan untuk ghana
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'ghana'), 'Sepeda Motor', 4465066),
  ((SELECT id FROM countries WHERE name_en = 'ghana'), 'Mobil', 2381368),
  ((SELECT id FROM countries WHERE name_en = 'ghana'), 'Bus', 5953),
  ((SELECT id FROM countries WHERE name_en = 'ghana'), 'Truk', 29767);