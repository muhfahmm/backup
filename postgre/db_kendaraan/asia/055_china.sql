-- Data Kendaraan untuk china
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'china'), 'Sepeda Motor', 208909500),
  ((SELECT id FROM countries WHERE name_en = 'china'), 'Mobil', 111418400),
  ((SELECT id FROM countries WHERE name_en = 'china'), 'Bus', 278546),
  ((SELECT id FROM countries WHERE name_en = 'china'), 'Truk', 1392730);