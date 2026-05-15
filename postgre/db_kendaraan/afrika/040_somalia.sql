-- Data Kendaraan untuk somalia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'somalia'), 'Sepeda Motor', 2251223),
  ((SELECT id FROM countries WHERE name_en = 'somalia'), 'Mobil', 1200652),
  ((SELECT id FROM countries WHERE name_en = 'somalia'), 'Bus', 3001),
  ((SELECT id FROM countries WHERE name_en = 'somalia'), 'Truk', 15008);