-- Data Kendaraan untuk togo
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'togo'), 'Sepeda Motor', 1183364),
  ((SELECT id FROM countries WHERE name_en = 'togo'), 'Mobil', 631127),
  ((SELECT id FROM countries WHERE name_en = 'togo'), 'Bus', 1577),
  ((SELECT id FROM countries WHERE name_en = 'togo'), 'Truk', 7889);