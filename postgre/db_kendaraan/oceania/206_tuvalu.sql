-- Data Kendaraan untuk tuvalu
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'tuvalu'), 'Sepeda Motor', 1726),
  ((SELECT id FROM countries WHERE name_en = 'tuvalu'), 'Mobil', 920),
  ((SELECT id FROM countries WHERE name_en = 'tuvalu'), 'Bus', 2),
  ((SELECT id FROM countries WHERE name_en = 'tuvalu'), 'Truk', 11);