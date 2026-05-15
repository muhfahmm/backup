-- Data Kendaraan untuk ekuador
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'ekuador'), 'Sepeda Motor', 2562653),
  ((SELECT id FROM countries WHERE name_en = 'ekuador'), 'Mobil', 1366748),
  ((SELECT id FROM countries WHERE name_en = 'ekuador'), 'Bus', 3416),
  ((SELECT id FROM countries WHERE name_en = 'ekuador'), 'Truk', 17084);