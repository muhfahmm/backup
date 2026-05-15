-- Data Kendaraan untuk venezuela
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'venezuela'), 'Sepeda Motor', 4330529),
  ((SELECT id FROM countries WHERE name_en = 'venezuela'), 'Mobil', 2309615),
  ((SELECT id FROM countries WHERE name_en = 'venezuela'), 'Bus', 5774),
  ((SELECT id FROM countries WHERE name_en = 'venezuela'), 'Truk', 28870);