-- Data Kendaraan untuk filipina
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'filipina'), 'Sepeda Motor', 15997788),
  ((SELECT id FROM countries WHERE name_en = 'filipina'), 'Mobil', 8532153),
  ((SELECT id FROM countries WHERE name_en = 'filipina'), 'Bus', 21330),
  ((SELECT id FROM countries WHERE name_en = 'filipina'), 'Truk', 106651);