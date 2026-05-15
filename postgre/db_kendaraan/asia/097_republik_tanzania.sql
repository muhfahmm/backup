-- Data Kendaraan untuk republik tanzania
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'republik tanzania'), 'Sepeda Motor', 8447752),
  ((SELECT id FROM countries WHERE name_en = 'republik tanzania'), 'Mobil', 4505467),
  ((SELECT id FROM countries WHERE name_en = 'republik tanzania'), 'Bus', 11263),
  ((SELECT id FROM countries WHERE name_en = 'republik tanzania'), 'Truk', 56318);