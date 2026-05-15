-- Data Kendaraan untuk eritrea
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'eritrea'), 'Sepeda Motor', 932095),
  ((SELECT id FROM countries WHERE name_en = 'eritrea'), 'Mobil', 497117),
  ((SELECT id FROM countries WHERE name_en = 'eritrea'), 'Bus', 1242),
  ((SELECT id FROM countries WHERE name_en = 'eritrea'), 'Truk', 6213);