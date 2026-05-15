-- Data Kendaraan untuk mali
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'mali'), 'Sepeda Motor', 2861653),
  ((SELECT id FROM countries WHERE name_en = 'mali'), 'Mobil', 1526215),
  ((SELECT id FROM countries WHERE name_en = 'mali'), 'Bus', 3815),
  ((SELECT id FROM countries WHERE name_en = 'mali'), 'Truk', 19077);