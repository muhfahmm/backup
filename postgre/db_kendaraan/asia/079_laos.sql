-- Data Kendaraan untuk laos
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'laos'), 'Sepeda Motor', 1059226),
  ((SELECT id FROM countries WHERE name_en = 'laos'), 'Mobil', 564920),
  ((SELECT id FROM countries WHERE name_en = 'laos'), 'Bus', 1412),
  ((SELECT id FROM countries WHERE name_en = 'laos'), 'Truk', 7061);