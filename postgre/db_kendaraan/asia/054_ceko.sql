-- Data Kendaraan untuk ceko
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'ceko'), 'Sepeda Motor', 0),
  ((SELECT id FROM countries WHERE name_en = 'ceko'), 'Mobil', 0),
  ((SELECT id FROM countries WHERE name_en = 'ceko'), 'Bus', 0),
  ((SELECT id FROM countries WHERE name_en = 'ceko'), 'Truk', 0);