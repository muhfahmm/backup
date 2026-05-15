-- Data Kendaraan untuk tunisia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'tunisia'), 'Sepeda Motor', 1734780),
  ((SELECT id FROM countries WHERE name_en = 'tunisia'), 'Mobil', 925216),
  ((SELECT id FROM countries WHERE name_en = 'tunisia'), 'Bus', 2313),
  ((SELECT id FROM countries WHERE name_en = 'tunisia'), 'Truk', 11565);