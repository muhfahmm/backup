-- Data Kendaraan untuk thailand
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'thailand'), 'Sepeda Motor', 10414278),
  ((SELECT id FROM countries WHERE name_en = 'thailand'), 'Mobil', 5554281),
  ((SELECT id FROM countries WHERE name_en = 'thailand'), 'Bus', 13885),
  ((SELECT id FROM countries WHERE name_en = 'thailand'), 'Truk', 69428);