-- Data Kendaraan untuk guinea
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'guinea'), 'Sepeda Motor', 1862147),
  ((SELECT id FROM countries WHERE name_en = 'guinea'), 'Mobil', 993145),
  ((SELECT id FROM countries WHERE name_en = 'guinea'), 'Bus', 2482),
  ((SELECT id FROM countries WHERE name_en = 'guinea'), 'Truk', 12414);