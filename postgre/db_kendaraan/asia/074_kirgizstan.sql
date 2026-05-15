-- Data Kendaraan untuk kirgizstan
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'kirgizstan'), 'Sepeda Motor', 948420),
  ((SELECT id FROM countries WHERE name_en = 'kirgizstan'), 'Mobil', 505824),
  ((SELECT id FROM countries WHERE name_en = 'kirgizstan'), 'Bus', 1264),
  ((SELECT id FROM countries WHERE name_en = 'kirgizstan'), 'Truk', 6322);