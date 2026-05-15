-- Data Kendaraan untuk taiwan
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'taiwan'), 'Sepeda Motor', 0),
  ((SELECT id FROM countries WHERE name_en = 'taiwan'), 'Mobil', 0),
  ((SELECT id FROM countries WHERE name_en = 'taiwan'), 'Bus', 0),
  ((SELECT id FROM countries WHERE name_en = 'taiwan'), 'Truk', 0);