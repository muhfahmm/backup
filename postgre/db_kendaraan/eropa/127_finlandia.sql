-- Data Kendaraan untuk finlandia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'finlandia'), 'Sepeda Motor', 827328),
  ((SELECT id FROM countries WHERE name_en = 'finlandia'), 'Mobil', 441242),
  ((SELECT id FROM countries WHERE name_en = 'finlandia'), 'Bus', 1103),
  ((SELECT id FROM countries WHERE name_en = 'finlandia'), 'Truk', 5515);