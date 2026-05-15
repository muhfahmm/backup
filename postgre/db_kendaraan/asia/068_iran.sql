-- Data Kendaraan untuk iran
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'iran'), 'Sepeda Motor', 12270040),
  ((SELECT id FROM countries WHERE name_en = 'iran'), 'Mobil', 6544021),
  ((SELECT id FROM countries WHERE name_en = 'iran'), 'Bus', 16360),
  ((SELECT id FROM countries WHERE name_en = 'iran'), 'Truk', 81800);