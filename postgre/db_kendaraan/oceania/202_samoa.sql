-- Data Kendaraan untuk samoa
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'samoa'), 'Sepeda Motor', 29419),
  ((SELECT id FROM countries WHERE name_en = 'samoa'), 'Mobil', 15690),
  ((SELECT id FROM countries WHERE name_en = 'samoa'), 'Bus', 39),
  ((SELECT id FROM countries WHERE name_en = 'samoa'), 'Truk', 196);