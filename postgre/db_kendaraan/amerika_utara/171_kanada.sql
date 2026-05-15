-- Data Kendaraan untuk kanada
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'kanada'), 'Sepeda Motor', 5558664),
  ((SELECT id FROM countries WHERE name_en = 'kanada'), 'Mobil', 2964621),
  ((SELECT id FROM countries WHERE name_en = 'kanada'), 'Bus', 7411),
  ((SELECT id FROM countries WHERE name_en = 'kanada'), 'Truk', 37057);