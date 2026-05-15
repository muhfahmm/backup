-- Data Kendaraan untuk singapura
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'singapura'), 'Sepeda Motor', 845801),
  ((SELECT id FROM countries WHERE name_en = 'singapura'), 'Mobil', 451094),
  ((SELECT id FROM countries WHERE name_en = 'singapura'), 'Bus', 1127),
  ((SELECT id FROM countries WHERE name_en = 'singapura'), 'Truk', 5638);