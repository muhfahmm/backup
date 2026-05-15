-- Data Kendaraan untuk curacao
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'curacao'), 'Sepeda Motor', 0),
  ((SELECT id FROM countries WHERE name_en = 'curacao'), 'Mobil', 0),
  ((SELECT id FROM countries WHERE name_en = 'curacao'), 'Bus', 0),
  ((SELECT id FROM countries WHERE name_en = 'curacao'), 'Truk', 0);