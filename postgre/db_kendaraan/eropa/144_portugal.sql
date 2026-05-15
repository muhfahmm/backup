-- Data Kendaraan untuk portugal
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'portugal'), 'Sepeda Motor', 1542573),
  ((SELECT id FROM countries WHERE name_en = 'portugal'), 'Mobil', 822705),
  ((SELECT id FROM countries WHERE name_en = 'portugal'), 'Bus', 2056),
  ((SELECT id FROM countries WHERE name_en = 'portugal'), 'Truk', 10283);