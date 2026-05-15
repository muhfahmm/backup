-- Data Kendaraan untuk yaman
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'yaman'), 'Sepeda Motor', 4274803),
  ((SELECT id FROM countries WHERE name_en = 'yaman'), 'Mobil', 2279894),
  ((SELECT id FROM countries WHERE name_en = 'yaman'), 'Bus', 5699),
  ((SELECT id FROM countries WHERE name_en = 'yaman'), 'Truk', 28498);