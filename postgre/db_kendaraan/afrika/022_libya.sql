-- Data Kendaraan untuk libya
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'libya'), 'Sepeda Motor', 1001785),
  ((SELECT id FROM countries WHERE name_en = 'libya'), 'Mobil', 534285),
  ((SELECT id FROM countries WHERE name_en = 'libya'), 'Bus', 1335),
  ((SELECT id FROM countries WHERE name_en = 'libya'), 'Truk', 6678);