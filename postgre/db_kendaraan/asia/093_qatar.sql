-- Data Kendaraan untuk qatar
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'qatar'), 'Sepeda Motor', 417251),
  ((SELECT id FROM countries WHERE name_en = 'qatar'), 'Mobil', 222534),
  ((SELECT id FROM countries WHERE name_en = 'qatar'), 'Bus', 556),
  ((SELECT id FROM countries WHERE name_en = 'qatar'), 'Truk', 2781);