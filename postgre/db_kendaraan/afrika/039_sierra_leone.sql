-- Data Kendaraan untuk sierra leone
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'sierra leone'), 'Sepeda Motor', 1147523),
  ((SELECT id FROM countries WHERE name_en = 'sierra leone'), 'Mobil', 612012),
  ((SELECT id FROM countries WHERE name_en = 'sierra leone'), 'Bus', 1530),
  ((SELECT id FROM countries WHERE name_en = 'sierra leone'), 'Truk', 7650);