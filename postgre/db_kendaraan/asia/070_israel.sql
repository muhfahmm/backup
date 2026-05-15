-- Data Kendaraan untuk israel
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'israel'), 'Sepeda Motor', 1332420),
  ((SELECT id FROM countries WHERE name_en = 'israel'), 'Mobil', 710624),
  ((SELECT id FROM countries WHERE name_en = 'israel'), 'Bus', 1776),
  ((SELECT id FROM countries WHERE name_en = 'israel'), 'Truk', 8882);