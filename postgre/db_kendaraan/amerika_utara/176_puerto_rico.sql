-- Data Kendaraan untuk puerto rico
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'puerto rico'), 'Sepeda Motor', 479272),
  ((SELECT id FROM countries WHERE name_en = 'puerto rico'), 'Mobil', 255612),
  ((SELECT id FROM countries WHERE name_en = 'puerto rico'), 'Bus', 639),
  ((SELECT id FROM countries WHERE name_en = 'puerto rico'), 'Truk', 3195);