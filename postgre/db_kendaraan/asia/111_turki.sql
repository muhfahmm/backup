-- Data Kendaraan untuk turki
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'turki'), 'Sepeda Motor', 0),
  ((SELECT id FROM countries WHERE name_en = 'turki'), 'Mobil', 0),
  ((SELECT id FROM countries WHERE name_en = 'turki'), 'Bus', 0),
  ((SELECT id FROM countries WHERE name_en = 'turki'), 'Truk', 0);