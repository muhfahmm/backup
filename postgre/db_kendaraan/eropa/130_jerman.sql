-- Data Kendaraan untuk jerman
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'jerman'), 'Sepeda Motor', 12435867),
  ((SELECT id FROM countries WHERE name_en = 'jerman'), 'Mobil', 6632462),
  ((SELECT id FROM countries WHERE name_en = 'jerman'), 'Bus', 16581),
  ((SELECT id FROM countries WHERE name_en = 'jerman'), 'Truk', 82905);