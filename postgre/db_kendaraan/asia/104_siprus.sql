-- Data Kendaraan untuk siprus
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'siprus'), 'Sepeda Motor', 178389),
  ((SELECT id FROM countries WHERE name_en = 'siprus'), 'Mobil', 95141),
  ((SELECT id FROM countries WHERE name_en = 'siprus'), 'Bus', 237),
  ((SELECT id FROM countries WHERE name_en = 'siprus'), 'Truk', 1189);