-- Data Kendaraan untuk estonia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'estonia'), 'Sepeda Motor', 198296),
  ((SELECT id FROM countries WHERE name_en = 'estonia'), 'Mobil', 105758),
  ((SELECT id FROM countries WHERE name_en = 'estonia'), 'Bus', 264),
  ((SELECT id FROM countries WHERE name_en = 'estonia'), 'Truk', 1321);