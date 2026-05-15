-- Data Kendaraan untuk india
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'india'), 'Sepeda Motor', 202892599),
  ((SELECT id FROM countries WHERE name_en = 'india'), 'Mobil', 108209386),
  ((SELECT id FROM countries WHERE name_en = 'india'), 'Bus', 270523),
  ((SELECT id FROM countries WHERE name_en = 'india'), 'Truk', 1352617);