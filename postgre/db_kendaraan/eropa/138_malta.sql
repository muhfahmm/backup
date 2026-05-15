-- Data Kendaraan untuk malta
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'malta'), 'Sepeda Motor', 72694),
  ((SELECT id FROM countries WHERE name_en = 'malta'), 'Mobil', 38770),
  ((SELECT id FROM countries WHERE name_en = 'malta'), 'Bus', 96),
  ((SELECT id FROM countries WHERE name_en = 'malta'), 'Truk', 484);