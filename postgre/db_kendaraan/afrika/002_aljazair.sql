-- Data Kendaraan untuk aljazair
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'aljazair'), 'Sepeda Motor', 6334264),
  ((SELECT id FROM countries WHERE name_en = 'aljazair'), 'Mobil', 3378274),
  ((SELECT id FROM countries WHERE name_en = 'aljazair'), 'Bus', 8445),
  ((SELECT id FROM countries WHERE name_en = 'aljazair'), 'Truk', 42228);