-- Data Kendaraan untuk selandia baru
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'selandia baru'), 'Sepeda Motor', 726150),
  ((SELECT id FROM countries WHERE name_en = 'selandia baru'), 'Mobil', 387280),
  ((SELECT id FROM countries WHERE name_en = 'selandia baru'), 'Bus', 968),
  ((SELECT id FROM countries WHERE name_en = 'selandia baru'), 'Truk', 4841);