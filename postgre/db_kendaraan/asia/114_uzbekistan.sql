-- Data Kendaraan untuk uzbekistan
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'uzbekistan'), 'Sepeda Motor', 4943310),
  ((SELECT id FROM countries WHERE name_en = 'uzbekistan'), 'Mobil', 2636432),
  ((SELECT id FROM countries WHERE name_en = 'uzbekistan'), 'Bus', 6591),
  ((SELECT id FROM countries WHERE name_en = 'uzbekistan'), 'Truk', 32955);