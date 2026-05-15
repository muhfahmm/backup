-- Data Kendaraan untuk vietnam
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'vietnam'), 'Sepeda Motor', 14331059),
  ((SELECT id FROM countries WHERE name_en = 'vietnam'), 'Mobil', 7643231),
  ((SELECT id FROM countries WHERE name_en = 'vietnam'), 'Bus', 19108),
  ((SELECT id FROM countries WHERE name_en = 'vietnam'), 'Truk', 95540);