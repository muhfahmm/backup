-- Data Kendaraan untuk suriah
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'suriah'), 'Sepeda Motor', 2535942),
  ((SELECT id FROM countries WHERE name_en = 'suriah'), 'Mobil', 1352502),
  ((SELECT id FROM countries WHERE name_en = 'suriah'), 'Bus', 3381),
  ((SELECT id FROM countries WHERE name_en = 'suriah'), 'Truk', 16906);