-- Data Kendaraan untuk nauru
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'nauru'), 'Sepeda Motor', 1905),
  ((SELECT id FROM countries WHERE name_en = 'nauru'), 'Mobil', 1016),
  ((SELECT id FROM countries WHERE name_en = 'nauru'), 'Bus', 2),
  ((SELECT id FROM countries WHERE name_en = 'nauru'), 'Truk', 12);