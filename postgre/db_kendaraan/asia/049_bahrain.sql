-- Data Kendaraan untuk bahrain
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'bahrain'), 'Sepeda Motor', 235415),
  ((SELECT id FROM countries WHERE name_en = 'bahrain'), 'Mobil', 125555),
  ((SELECT id FROM countries WHERE name_en = 'bahrain'), 'Bus', 313),
  ((SELECT id FROM countries WHERE name_en = 'bahrain'), 'Truk', 1569);