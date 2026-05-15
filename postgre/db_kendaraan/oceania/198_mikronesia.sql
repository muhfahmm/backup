-- Data Kendaraan untuk mikronesia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'mikronesia'), 'Sepeda Motor', 16896),
  ((SELECT id FROM countries WHERE name_en = 'mikronesia'), 'Mobil', 9011),
  ((SELECT id FROM countries WHERE name_en = 'mikronesia'), 'Bus', 22),
  ((SELECT id FROM countries WHERE name_en = 'mikronesia'), 'Truk', 112);