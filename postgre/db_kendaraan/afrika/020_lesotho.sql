-- Data Kendaraan untuk lesotho
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'lesotho'), 'Sepeda Motor', 316219),
  ((SELECT id FROM countries WHERE name_en = 'lesotho'), 'Mobil', 168650),
  ((SELECT id FROM countries WHERE name_en = 'lesotho'), 'Bus', 421),
  ((SELECT id FROM countries WHERE name_en = 'lesotho'), 'Truk', 2108);