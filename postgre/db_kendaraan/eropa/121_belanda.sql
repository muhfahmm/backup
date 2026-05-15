-- Data Kendaraan untuk belanda
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'belanda'), 'Sepeda Motor', 2584743),
  ((SELECT id FROM countries WHERE name_en = 'belanda'), 'Mobil', 1378529),
  ((SELECT id FROM countries WHERE name_en = 'belanda'), 'Bus', 3446),
  ((SELECT id FROM countries WHERE name_en = 'belanda'), 'Truk', 17231);