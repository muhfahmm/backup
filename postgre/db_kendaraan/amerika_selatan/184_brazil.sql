-- Data Kendaraan untuk brazil
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'brazil'), 'Sepeda Motor', 31420399),
  ((SELECT id FROM countries WHERE name_en = 'brazil'), 'Mobil', 16757546),
  ((SELECT id FROM countries WHERE name_en = 'brazil'), 'Bus', 41893),
  ((SELECT id FROM countries WHERE name_en = 'brazil'), 'Truk', 209469);