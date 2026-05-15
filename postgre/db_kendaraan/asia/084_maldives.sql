-- Data Kendaraan untuk maldives
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'maldives'), 'Sepeda Motor', 77354),
  ((SELECT id FROM countries WHERE name_en = 'maldives'), 'Mobil', 41255),
  ((SELECT id FROM countries WHERE name_en = 'maldives'), 'Bus', 103),
  ((SELECT id FROM countries WHERE name_en = 'maldives'), 'Truk', 515);