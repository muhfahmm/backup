-- Data Kendaraan untuk oman
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'oman'), 'Sepeda Motor', 724422),
  ((SELECT id FROM countries WHERE name_en = 'oman'), 'Mobil', 386358),
  ((SELECT id FROM countries WHERE name_en = 'oman'), 'Bus', 965),
  ((SELECT id FROM countries WHERE name_en = 'oman'), 'Truk', 4829);