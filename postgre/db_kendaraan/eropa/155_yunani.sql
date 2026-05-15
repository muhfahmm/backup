-- Data Kendaraan untuk yunani
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'yunani'), 'Sepeda Motor', 1609758),
  ((SELECT id FROM countries WHERE name_en = 'yunani'), 'Mobil', 858538),
  ((SELECT id FROM countries WHERE name_en = 'yunani'), 'Bus', 2146),
  ((SELECT id FROM countries WHERE name_en = 'yunani'), 'Truk', 10731);