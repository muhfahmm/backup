-- Data Kendaraan untuk kiribati
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'kiribati'), 'Sepeda Motor', 17377),
  ((SELECT id FROM countries WHERE name_en = 'kiribati'), 'Mobil', 9267),
  ((SELECT id FROM countries WHERE name_en = 'kiribati'), 'Bus', 23),
  ((SELECT id FROM countries WHERE name_en = 'kiribati'), 'Truk', 115);