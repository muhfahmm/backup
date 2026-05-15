-- Data Kendaraan untuk kroasia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'kroasia'), 'Sepeda Motor', 613176),
  ((SELECT id FROM countries WHERE name_en = 'kroasia'), 'Mobil', 327027),
  ((SELECT id FROM countries WHERE name_en = 'kroasia'), 'Bus', 817),
  ((SELECT id FROM countries WHERE name_en = 'kroasia'), 'Truk', 4087);