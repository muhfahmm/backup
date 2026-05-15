-- Data Kendaraan untuk kolombia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'kolombia'), 'Sepeda Motor', 7447302),
  ((SELECT id FROM countries WHERE name_en = 'kolombia'), 'Mobil', 3971894),
  ((SELECT id FROM countries WHERE name_en = 'kolombia'), 'Bus', 9929),
  ((SELECT id FROM countries WHERE name_en = 'kolombia'), 'Truk', 49648);