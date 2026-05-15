-- Data Kendaraan untuk amerika serikat
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'amerika serikat'), 'Sepeda Motor', 49003125),
  ((SELECT id FROM countries WHERE name_en = 'amerika serikat'), 'Mobil', 26135000),
  ((SELECT id FROM countries WHERE name_en = 'amerika serikat'), 'Bus', 65337),
  ((SELECT id FROM countries WHERE name_en = 'amerika serikat'), 'Truk', 326687);