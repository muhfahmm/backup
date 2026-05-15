-- Data Kendaraan untuk brunei
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'brunei'), 'Sepeda Motor', 64344),
  ((SELECT id FROM countries WHERE name_en = 'brunei'), 'Mobil', 34316),
  ((SELECT id FROM countries WHERE name_en = 'brunei'), 'Bus', 85),
  ((SELECT id FROM countries WHERE name_en = 'brunei'), 'Truk', 428);