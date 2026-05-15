-- Data Kendaraan untuk islandia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'islandia'), 'Sepeda Motor', 52908),
  ((SELECT id FROM countries WHERE name_en = 'islandia'), 'Mobil', 28217),
  ((SELECT id FROM countries WHERE name_en = 'islandia'), 'Bus', 70),
  ((SELECT id FROM countries WHERE name_en = 'islandia'), 'Truk', 352);