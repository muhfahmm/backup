-- Data Kendaraan untuk paraguay
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'paraguay'), 'Sepeda Motor', 1043410),
  ((SELECT id FROM countries WHERE name_en = 'paraguay'), 'Mobil', 556485),
  ((SELECT id FROM countries WHERE name_en = 'paraguay'), 'Bus', 1391),
  ((SELECT id FROM countries WHERE name_en = 'paraguay'), 'Truk', 6956);