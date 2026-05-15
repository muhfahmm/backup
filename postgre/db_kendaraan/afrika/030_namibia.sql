-- Data Kendaraan untuk namibia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'namibia'), 'Sepeda Motor', 367238),
  ((SELECT id FROM countries WHERE name_en = 'namibia'), 'Mobil', 195860),
  ((SELECT id FROM countries WHERE name_en = 'namibia'), 'Bus', 489),
  ((SELECT id FROM countries WHERE name_en = 'namibia'), 'Truk', 2448);