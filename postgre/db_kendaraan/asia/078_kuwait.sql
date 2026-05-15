-- Data Kendaraan untuk kuwait
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'kuwait'), 'Sepeda Motor', 620596),
  ((SELECT id FROM countries WHERE name_en = 'kuwait'), 'Mobil', 330984),
  ((SELECT id FROM countries WHERE name_en = 'kuwait'), 'Bus', 827),
  ((SELECT id FROM countries WHERE name_en = 'kuwait'), 'Truk', 4137);