-- Data Kendaraan untuk belgia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'belgia'), 'Sepeda Motor', 1714988),
  ((SELECT id FROM countries WHERE name_en = 'belgia'), 'Mobil', 914660),
  ((SELECT id FROM countries WHERE name_en = 'belgia'), 'Bus', 2286),
  ((SELECT id FROM countries WHERE name_en = 'belgia'), 'Truk', 11433);