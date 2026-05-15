-- Data Kendaraan untuk tajikistan
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'tajikistan'), 'Sepeda Motor', 1365125),
  ((SELECT id FROM countries WHERE name_en = 'tajikistan'), 'Mobil', 728066),
  ((SELECT id FROM countries WHERE name_en = 'tajikistan'), 'Bus', 1820),
  ((SELECT id FROM countries WHERE name_en = 'tajikistan'), 'Truk', 9100);