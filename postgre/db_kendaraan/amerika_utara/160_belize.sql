-- Data Kendaraan untuk belize
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'belize'), 'Sepeda Motor', 57460),
  ((SELECT id FROM countries WHERE name_en = 'belize'), 'Mobil', 30645),
  ((SELECT id FROM countries WHERE name_en = 'belize'), 'Bus', 76),
  ((SELECT id FROM countries WHERE name_en = 'belize'), 'Truk', 383);