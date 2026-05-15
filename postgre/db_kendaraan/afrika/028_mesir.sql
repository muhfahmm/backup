-- Data Kendaraan untuk mesir
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'mesir'), 'Sepeda Motor', 14763539),
  ((SELECT id FROM countries WHERE name_en = 'mesir'), 'Mobil', 7873887),
  ((SELECT id FROM countries WHERE name_en = 'mesir'), 'Bus', 19684),
  ((SELECT id FROM countries WHERE name_en = 'mesir'), 'Truk', 98423);