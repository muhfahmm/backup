-- Data Kendaraan untuk bolivia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'bolivia'), 'Sepeda Motor', 1702971),
  ((SELECT id FROM countries WHERE name_en = 'bolivia'), 'Mobil', 908251),
  ((SELECT id FROM countries WHERE name_en = 'bolivia'), 'Bus', 2270),
  ((SELECT id FROM countries WHERE name_en = 'bolivia'), 'Truk', 11353);