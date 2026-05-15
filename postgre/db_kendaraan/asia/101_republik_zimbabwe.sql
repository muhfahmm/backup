-- Data Kendaraan untuk republik zimbabwe
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'republik zimbabwe'), 'Sepeda Motor', 2165852),
  ((SELECT id FROM countries WHERE name_en = 'republik zimbabwe'), 'Mobil', 1155121),
  ((SELECT id FROM countries WHERE name_en = 'republik zimbabwe'), 'Bus', 2887),
  ((SELECT id FROM countries WHERE name_en = 'republik zimbabwe'), 'Truk', 14439);