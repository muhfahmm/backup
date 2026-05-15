-- Data Kendaraan untuk meksiko
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'meksiko'), 'Sepeda Motor', 18928618),
  ((SELECT id FROM countries WHERE name_en = 'meksiko'), 'Mobil', 10095263),
  ((SELECT id FROM countries WHERE name_en = 'meksiko'), 'Bus', 25238),
  ((SELECT id FROM countries WHERE name_en = 'meksiko'), 'Truk', 126190);