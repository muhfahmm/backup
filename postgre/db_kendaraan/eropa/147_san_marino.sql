-- Data Kendaraan untuk san marino
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'san marino'), 'Sepeda Motor', 5067),
  ((SELECT id FROM countries WHERE name_en = 'san marino'), 'Mobil', 2702),
  ((SELECT id FROM countries WHERE name_en = 'san marino'), 'Bus', 6),
  ((SELECT id FROM countries WHERE name_en = 'san marino'), 'Truk', 33);