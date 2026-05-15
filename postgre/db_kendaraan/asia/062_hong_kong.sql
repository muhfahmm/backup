-- Data Kendaraan untuk hong kong
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'hong kong'), 'Sepeda Motor', 1117650),
  ((SELECT id FROM countries WHERE name_en = 'hong kong'), 'Mobil', 596080),
  ((SELECT id FROM countries WHERE name_en = 'hong kong'), 'Bus', 1490),
  ((SELECT id FROM countries WHERE name_en = 'hong kong'), 'Truk', 7451);