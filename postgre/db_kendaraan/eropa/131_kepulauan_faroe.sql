-- Data Kendaraan untuk kepulauan faroe
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'kepulauan faroe'), 'Sepeda Motor', 7274),
  ((SELECT id FROM countries WHERE name_en = 'kepulauan faroe'), 'Mobil', 3879),
  ((SELECT id FROM countries WHERE name_en = 'kepulauan faroe'), 'Bus', 9),
  ((SELECT id FROM countries WHERE name_en = 'kepulauan faroe'), 'Truk', 48);