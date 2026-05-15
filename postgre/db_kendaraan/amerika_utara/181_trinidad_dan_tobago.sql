-- Data Kendaraan untuk trinidad dan tobago
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'trinidad dan tobago'), 'Sepeda Motor', 208478),
  ((SELECT id FROM countries WHERE name_en = 'trinidad dan tobago'), 'Mobil', 111188),
  ((SELECT id FROM countries WHERE name_en = 'trinidad dan tobago'), 'Bus', 277),
  ((SELECT id FROM countries WHERE name_en = 'trinidad dan tobago'), 'Truk', 1389);