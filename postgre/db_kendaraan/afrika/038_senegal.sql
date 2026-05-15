-- Data Kendaraan untuk senegal
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'senegal'), 'Sepeda Motor', 2378154),
  ((SELECT id FROM countries WHERE name_en = 'senegal'), 'Mobil', 1268348),
  ((SELECT id FROM countries WHERE name_en = 'senegal'), 'Bus', 3170),
  ((SELECT id FROM countries WHERE name_en = 'senegal'), 'Truk', 15854);