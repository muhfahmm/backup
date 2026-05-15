-- Data Kendaraan untuk korea utara
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'korea utara'), 'Sepeda Motor', 0),
  ((SELECT id FROM countries WHERE name_en = 'korea utara'), 'Mobil', 0),
  ((SELECT id FROM countries WHERE name_en = 'korea utara'), 'Bus', 0),
  ((SELECT id FROM countries WHERE name_en = 'korea utara'), 'Truk', 0);