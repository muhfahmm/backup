-- Data Kendaraan untuk tahiti
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'tahiti'), 'Sepeda Motor', 41651),
  ((SELECT id FROM countries WHERE name_en = 'tahiti'), 'Mobil', 22214),
  ((SELECT id FROM countries WHERE name_en = 'tahiti'), 'Bus', 55),
  ((SELECT id FROM countries WHERE name_en = 'tahiti'), 'Truk', 277);