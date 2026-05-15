-- Data Kendaraan untuk afganistan
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'afganistan'), 'Sepeda Motor', 5575857),
  ((SELECT id FROM countries WHERE name_en = 'afganistan'), 'Mobil', 2973790),
  ((SELECT id FROM countries WHERE name_en = 'afganistan'), 'Bus', 7434),
  ((SELECT id FROM countries WHERE name_en = 'afganistan'), 'Truk', 37172);