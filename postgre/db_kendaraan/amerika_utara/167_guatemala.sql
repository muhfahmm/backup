-- Data Kendaraan untuk guatemala
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'guatemala'), 'Sepeda Motor', 2587171),
  ((SELECT id FROM countries WHERE name_en = 'guatemala'), 'Mobil', 1379824),
  ((SELECT id FROM countries WHERE name_en = 'guatemala'), 'Bus', 3449),
  ((SELECT id FROM countries WHERE name_en = 'guatemala'), 'Truk', 17247);