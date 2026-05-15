-- Data Kendaraan untuk polandia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'polandia'), 'Sepeda Motor', 5696212),
  ((SELECT id FROM countries WHERE name_en = 'polandia'), 'Mobil', 3037980),
  ((SELECT id FROM countries WHERE name_en = 'polandia'), 'Bus', 7594),
  ((SELECT id FROM countries WHERE name_en = 'polandia'), 'Truk', 37974);