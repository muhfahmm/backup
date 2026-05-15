-- Data Kendaraan untuk tanjung verde
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'tanjung verde'), 'Sepeda Motor', 0),
  ((SELECT id FROM countries WHERE name_en = 'tanjung verde'), 'Mobil', 0),
  ((SELECT id FROM countries WHERE name_en = 'tanjung verde'), 'Bus', 0),
  ((SELECT id FROM countries WHERE name_en = 'tanjung verde'), 'Truk', 0);