-- Data Kendaraan untuk swedia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'swedia'), 'Sepeda Motor', 1526282),
  ((SELECT id FROM countries WHERE name_en = 'swedia'), 'Mobil', 814017),
  ((SELECT id FROM countries WHERE name_en = 'swedia'), 'Bus', 2035),
  ((SELECT id FROM countries WHERE name_en = 'swedia'), 'Truk', 10175);