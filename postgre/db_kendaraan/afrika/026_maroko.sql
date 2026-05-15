-- Data Kendaraan untuk maroko
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'maroko'), 'Sepeda Motor', 5404370),
  ((SELECT id FROM countries WHERE name_en = 'maroko'), 'Mobil', 2882331),
  ((SELECT id FROM countries WHERE name_en = 'maroko'), 'Bus', 7205),
  ((SELECT id FROM countries WHERE name_en = 'maroko'), 'Truk', 36029);