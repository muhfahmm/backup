-- Data Kendaraan untuk fiji
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'fiji'), 'Sepeda Motor', 132522),
  ((SELECT id FROM countries WHERE name_en = 'fiji'), 'Mobil', 70678),
  ((SELECT id FROM countries WHERE name_en = 'fiji'), 'Bus', 176),
  ((SELECT id FROM countries WHERE name_en = 'fiji'), 'Truk', 883);