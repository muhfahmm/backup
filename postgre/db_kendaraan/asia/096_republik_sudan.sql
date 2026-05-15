-- Data Kendaraan untuk republik sudan
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'republik sudan'), 'Sepeda Motor', 6270229),
  ((SELECT id FROM countries WHERE name_en = 'republik sudan'), 'Mobil', 3344122),
  ((SELECT id FROM countries WHERE name_en = 'republik sudan'), 'Bus', 8360),
  ((SELECT id FROM countries WHERE name_en = 'republik sudan'), 'Truk', 41801);