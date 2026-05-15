-- Data Kendaraan untuk el salvador
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'el salvador'), 'Sepeda Motor', 963111),
  ((SELECT id FROM countries WHERE name_en = 'el salvador'), 'Mobil', 513659),
  ((SELECT id FROM countries WHERE name_en = 'el salvador'), 'Bus', 1284),
  ((SELECT id FROM countries WHERE name_en = 'el salvador'), 'Truk', 6420);