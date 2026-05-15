-- Data Kendaraan untuk malaysia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'malaysia'), 'Sepeda Motor', 4729287),
  ((SELECT id FROM countries WHERE name_en = 'malaysia'), 'Mobil', 2522286),
  ((SELECT id FROM countries WHERE name_en = 'malaysia'), 'Bus', 6305),
  ((SELECT id FROM countries WHERE name_en = 'malaysia'), 'Truk', 31528);