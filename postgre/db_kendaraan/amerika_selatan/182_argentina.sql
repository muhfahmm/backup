-- Data Kendaraan untuk argentina
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'argentina'), 'Sepeda Motor', 6674175),
  ((SELECT id FROM countries WHERE name_en = 'argentina'), 'Mobil', 3559560),
  ((SELECT id FROM countries WHERE name_en = 'argentina'), 'Bus', 8898),
  ((SELECT id FROM countries WHERE name_en = 'argentina'), 'Truk', 44494);