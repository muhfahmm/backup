-- Data Kendaraan untuk panama
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'panama'), 'Sepeda Motor', 626530),
  ((SELECT id FROM countries WHERE name_en = 'panama'), 'Mobil', 334149),
  ((SELECT id FROM countries WHERE name_en = 'panama'), 'Bus', 835),
  ((SELECT id FROM countries WHERE name_en = 'panama'), 'Truk', 4176);