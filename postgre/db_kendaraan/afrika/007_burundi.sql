-- Data Kendaraan untuk burundi
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'burundi'), 'Sepeda Motor', 1676306),
  ((SELECT id FROM countries WHERE name_en = 'burundi'), 'Mobil', 894030),
  ((SELECT id FROM countries WHERE name_en = 'burundi'), 'Bus', 2235),
  ((SELECT id FROM countries WHERE name_en = 'burundi'), 'Truk', 11175);