-- Data Kendaraan untuk madagaskar
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'madagaskar'), 'Sepeda Motor', 3939355),
  ((SELECT id FROM countries WHERE name_en = 'madagaskar'), 'Mobil', 2100989),
  ((SELECT id FROM countries WHERE name_en = 'madagaskar'), 'Bus', 5252),
  ((SELECT id FROM countries WHERE name_en = 'madagaskar'), 'Truk', 26262);