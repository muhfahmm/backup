-- Data Kendaraan untuk slovenia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'slovenia'), 'Sepeda Motor', 311084),
  ((SELECT id FROM countries WHERE name_en = 'slovenia'), 'Mobil', 165911),
  ((SELECT id FROM countries WHERE name_en = 'slovenia'), 'Bus', 414),
  ((SELECT id FROM countries WHERE name_en = 'slovenia'), 'Truk', 2073);