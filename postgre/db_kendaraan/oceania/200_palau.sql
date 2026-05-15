-- Data Kendaraan untuk palau
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'palau'), 'Sepeda Motor', 2686),
  ((SELECT id FROM countries WHERE name_en = 'palau'), 'Mobil', 1432),
  ((SELECT id FROM countries WHERE name_en = 'palau'), 'Bus', 3),
  ((SELECT id FROM countries WHERE name_en = 'palau'), 'Truk', 17);