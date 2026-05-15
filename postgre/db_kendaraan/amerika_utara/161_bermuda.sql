-- Data Kendaraan untuk bermuda
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'bermuda'), 'Sepeda Motor', 9595),
  ((SELECT id FROM countries WHERE name_en = 'bermuda'), 'Mobil', 5117),
  ((SELECT id FROM countries WHERE name_en = 'bermuda'), 'Bus', 12),
  ((SELECT id FROM countries WHERE name_en = 'bermuda'), 'Truk', 63);