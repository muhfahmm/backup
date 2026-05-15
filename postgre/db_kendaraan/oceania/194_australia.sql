-- Data Kendaraan untuk australia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'australia'), 'Sepeda Motor', 3747403),
  ((SELECT id FROM countries WHERE name_en = 'australia'), 'Mobil', 1998615),
  ((SELECT id FROM countries WHERE name_en = 'australia'), 'Bus', 4996),
  ((SELECT id FROM countries WHERE name_en = 'australia'), 'Truk', 24982);