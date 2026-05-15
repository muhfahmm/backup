-- Data Kendaraan untuk lebanon
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'lebanon'), 'Sepeda Motor', 1027338),
  ((SELECT id FROM countries WHERE name_en = 'lebanon'), 'Mobil', 547914),
  ((SELECT id FROM countries WHERE name_en = 'lebanon'), 'Bus', 1369),
  ((SELECT id FROM countries WHERE name_en = 'lebanon'), 'Truk', 6848);