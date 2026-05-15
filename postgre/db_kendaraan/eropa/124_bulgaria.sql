-- Data Kendaraan untuk bulgaria
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'bulgaria'), 'Sepeda Motor', 1053755),
  ((SELECT id FROM countries WHERE name_en = 'bulgaria'), 'Mobil', 562002),
  ((SELECT id FROM countries WHERE name_en = 'bulgaria'), 'Bus', 1405),
  ((SELECT id FROM countries WHERE name_en = 'bulgaria'), 'Truk', 7025);