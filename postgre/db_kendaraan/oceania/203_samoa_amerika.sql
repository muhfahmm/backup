-- Data Kendaraan untuk samoa amerika
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'samoa amerika'), 'Sepeda Motor', 8319),
  ((SELECT id FROM countries WHERE name_en = 'samoa amerika'), 'Mobil', 4437),
  ((SELECT id FROM countries WHERE name_en = 'samoa amerika'), 'Bus', 11),
  ((SELECT id FROM countries WHERE name_en = 'samoa amerika'), 'Truk', 55);