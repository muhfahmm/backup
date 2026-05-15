-- Data Kendaraan untuk marshall
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'marshall'), 'Sepeda Motor', 8761),
  ((SELECT id FROM countries WHERE name_en = 'marshall'), 'Mobil', 4673),
  ((SELECT id FROM countries WHERE name_en = 'marshall'), 'Bus', 11),
  ((SELECT id FROM countries WHERE name_en = 'marshall'), 'Truk', 58);