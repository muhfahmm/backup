-- Data Kendaraan untuk makedonia utara
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'makedonia utara'), 'Sepeda Motor', 312655),
  ((SELECT id FROM countries WHERE name_en = 'makedonia utara'), 'Mobil', 166749),
  ((SELECT id FROM countries WHERE name_en = 'makedonia utara'), 'Bus', 416),
  ((SELECT id FROM countries WHERE name_en = 'makedonia utara'), 'Truk', 2084);