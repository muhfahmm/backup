-- Data Kendaraan untuk guam
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'guam'), 'Sepeda Motor', 24865),
  ((SELECT id FROM countries WHERE name_en = 'guam'), 'Mobil', 13261),
  ((SELECT id FROM countries WHERE name_en = 'guam'), 'Bus', 33),
  ((SELECT id FROM countries WHERE name_en = 'guam'), 'Truk', 165);