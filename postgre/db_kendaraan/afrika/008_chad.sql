-- Data Kendaraan untuk chad
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'chad'), 'Sepeda Motor', 2321662),
  ((SELECT id FROM countries WHERE name_en = 'chad'), 'Mobil', 1238220),
  ((SELECT id FROM countries WHERE name_en = 'chad'), 'Bus', 3095),
  ((SELECT id FROM countries WHERE name_en = 'chad'), 'Truk', 15477);