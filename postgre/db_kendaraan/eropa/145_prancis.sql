-- Data Kendaraan untuk prancis
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'prancis'), 'Sepeda Motor', 10046566),
  ((SELECT id FROM countries WHERE name_en = 'prancis'), 'Mobil', 5358168),
  ((SELECT id FROM countries WHERE name_en = 'prancis'), 'Bus', 13395),
  ((SELECT id FROM countries WHERE name_en = 'prancis'), 'Truk', 66977);