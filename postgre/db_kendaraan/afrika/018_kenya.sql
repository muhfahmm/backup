-- Data Kendaraan untuk kenya
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'kenya'), 'Sepeda Motor', 7708951),
  ((SELECT id FROM countries WHERE name_en = 'kenya'), 'Mobil', 4111440),
  ((SELECT id FROM countries WHERE name_en = 'kenya'), 'Bus', 10278),
  ((SELECT id FROM countries WHERE name_en = 'kenya'), 'Truk', 51393);