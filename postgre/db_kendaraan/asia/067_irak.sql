-- Data Kendaraan untuk irak
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'irak'), 'Sepeda Motor', 5765040),
  ((SELECT id FROM countries WHERE name_en = 'irak'), 'Mobil', 3074688),
  ((SELECT id FROM countries WHERE name_en = 'irak'), 'Bus', 7686),
  ((SELECT id FROM countries WHERE name_en = 'irak'), 'Truk', 38433);