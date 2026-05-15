-- Data Kendaraan untuk papua nugini
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'papua nugini'), 'Sepeda Motor', 1290947),
  ((SELECT id FROM countries WHERE name_en = 'papua nugini'), 'Mobil', 688505),
  ((SELECT id FROM countries WHERE name_en = 'papua nugini'), 'Bus', 1721),
  ((SELECT id FROM countries WHERE name_en = 'papua nugini'), 'Truk', 8606);