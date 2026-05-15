-- Data Kendaraan untuk bhutan
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'bhutan'), 'Sepeda Motor', 113159),
  ((SELECT id FROM countries WHERE name_en = 'bhutan'), 'Mobil', 60351),
  ((SELECT id FROM countries WHERE name_en = 'bhutan'), 'Bus', 150),
  ((SELECT id FROM countries WHERE name_en = 'bhutan'), 'Truk', 754);