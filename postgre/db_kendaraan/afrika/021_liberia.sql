-- Data Kendaraan untuk liberia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'liberia'), 'Sepeda Motor', 722846),
  ((SELECT id FROM countries WHERE name_en = 'liberia'), 'Mobil', 385518),
  ((SELECT id FROM countries WHERE name_en = 'liberia'), 'Bus', 963),
  ((SELECT id FROM countries WHERE name_en = 'liberia'), 'Truk', 4818);