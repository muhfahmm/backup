-- Data Kendaraan untuk indonesia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'indonesia'), 'Sepeda Motor', 40149515),
  ((SELECT id FROM countries WHERE name_en = 'indonesia'), 'Mobil', 21413074),
  ((SELECT id FROM countries WHERE name_en = 'indonesia'), 'Bus', 53532),
  ((SELECT id FROM countries WHERE name_en = 'indonesia'), 'Truk', 267663);