-- Data Kendaraan untuk pakistan
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'pakistan'), 'Sepeda Motor', 31832254),
  ((SELECT id FROM countries WHERE name_en = 'pakistan'), 'Mobil', 16977202),
  ((SELECT id FROM countries WHERE name_en = 'pakistan'), 'Bus', 42443),
  ((SELECT id FROM countries WHERE name_en = 'pakistan'), 'Truk', 212215);