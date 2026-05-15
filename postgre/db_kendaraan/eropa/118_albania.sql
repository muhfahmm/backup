-- Data Kendaraan untuk albania
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'albania'), 'Sepeda Motor', 429956),
  ((SELECT id FROM countries WHERE name_en = 'albania'), 'Mobil', 229310),
  ((SELECT id FROM countries WHERE name_en = 'albania'), 'Bus', 573),
  ((SELECT id FROM countries WHERE name_en = 'albania'), 'Truk', 2866);