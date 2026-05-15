-- Data Kendaraan untuk saint kitts dan nevis
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'saint kitts dan nevis'), 'Sepeda Motor', 7866),
  ((SELECT id FROM countries WHERE name_en = 'saint kitts dan nevis'), 'Mobil', 4195),
  ((SELECT id FROM countries WHERE name_en = 'saint kitts dan nevis'), 'Bus', 10),
  ((SELECT id FROM countries WHERE name_en = 'saint kitts dan nevis'), 'Truk', 52);