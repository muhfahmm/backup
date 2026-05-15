-- Data Kendaraan untuk yordania
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'yordania'), 'Sepeda Motor', 1493401),
  ((SELECT id FROM countries WHERE name_en = 'yordania'), 'Mobil', 796480),
  ((SELECT id FROM countries WHERE name_en = 'yordania'), 'Bus', 1991),
  ((SELECT id FROM countries WHERE name_en = 'yordania'), 'Truk', 9956);