-- Data Kendaraan untuk gabon
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'gabon'), 'Sepeda Motor', 317891),
  ((SELECT id FROM countries WHERE name_en = 'gabon'), 'Mobil', 169542),
  ((SELECT id FROM countries WHERE name_en = 'gabon'), 'Bus', 423),
  ((SELECT id FROM countries WHERE name_en = 'gabon'), 'Truk', 2119);