-- Data Kendaraan untuk norwegia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'norwegia'), 'Sepeda Motor', 796787),
  ((SELECT id FROM countries WHERE name_en = 'norwegia'), 'Mobil', 424953),
  ((SELECT id FROM countries WHERE name_en = 'norwegia'), 'Bus', 1062),
  ((SELECT id FROM countries WHERE name_en = 'norwegia'), 'Truk', 5311);