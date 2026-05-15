-- Data Kendaraan untuk hungaria
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'hungaria'), 'Sepeda Motor', 1466334),
  ((SELECT id FROM countries WHERE name_en = 'hungaria'), 'Mobil', 782045),
  ((SELECT id FROM countries WHERE name_en = 'hungaria'), 'Bus', 1955),
  ((SELECT id FROM countries WHERE name_en = 'hungaria'), 'Truk', 9775);