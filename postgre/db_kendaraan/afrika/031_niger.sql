-- Data Kendaraan untuk niger
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'niger'), 'Sepeda Motor', 3366442),
  ((SELECT id FROM countries WHERE name_en = 'niger'), 'Mobil', 1795435),
  ((SELECT id FROM countries WHERE name_en = 'niger'), 'Bus', 4488),
  ((SELECT id FROM countries WHERE name_en = 'niger'), 'Truk', 22442);