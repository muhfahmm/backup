-- Data Kendaraan untuk liechtenstein
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'liechtenstein'), 'Sepeda Motor', 5686),
  ((SELECT id FROM countries WHERE name_en = 'liechtenstein'), 'Mobil', 3032),
  ((SELECT id FROM countries WHERE name_en = 'liechtenstein'), 'Bus', 7),
  ((SELECT id FROM countries WHERE name_en = 'liechtenstein'), 'Truk', 37);