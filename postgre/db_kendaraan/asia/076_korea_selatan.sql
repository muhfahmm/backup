-- Data Kendaraan untuk korea selatan
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'korea selatan'), 'Sepeda Motor', 0),
  ((SELECT id FROM countries WHERE name_en = 'korea selatan'), 'Mobil', 0),
  ((SELECT id FROM countries WHERE name_en = 'korea selatan'), 'Bus', 0),
  ((SELECT id FROM countries WHERE name_en = 'korea selatan'), 'Truk', 0);