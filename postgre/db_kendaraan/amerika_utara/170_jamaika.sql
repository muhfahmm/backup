-- Data Kendaraan untuk jamaika
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'jamaika'), 'Sepeda Motor', 440228),
  ((SELECT id FROM countries WHERE name_en = 'jamaika'), 'Mobil', 234788),
  ((SELECT id FROM countries WHERE name_en = 'jamaika'), 'Bus', 586),
  ((SELECT id FROM countries WHERE name_en = 'jamaika'), 'Truk', 2934);