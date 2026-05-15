-- Data Kendaraan untuk arab saudi
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'arab saudi'), 'Sepeda Motor', 5054992),
  ((SELECT id FROM countries WHERE name_en = 'arab saudi'), 'Mobil', 2695995),
  ((SELECT id FROM countries WHERE name_en = 'arab saudi'), 'Bus', 6739),
  ((SELECT id FROM countries WHERE name_en = 'arab saudi'), 'Truk', 33699);