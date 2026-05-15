-- Data Kendaraan untuk ethiopia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'ethiopia'), 'Sepeda Motor', 16383683),
  ((SELECT id FROM countries WHERE name_en = 'ethiopia'), 'Mobil', 8737964),
  ((SELECT id FROM countries WHERE name_en = 'ethiopia'), 'Bus', 21844),
  ((SELECT id FROM countries WHERE name_en = 'ethiopia'), 'Truk', 109224);