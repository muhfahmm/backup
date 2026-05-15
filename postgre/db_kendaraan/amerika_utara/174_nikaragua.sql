-- Data Kendaraan untuk nikaragua
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'nikaragua'), 'Sepeda Motor', 969826),
  ((SELECT id FROM countries WHERE name_en = 'nikaragua'), 'Mobil', 517241),
  ((SELECT id FROM countries WHERE name_en = 'nikaragua'), 'Bus', 1293),
  ((SELECT id FROM countries WHERE name_en = 'nikaragua'), 'Truk', 6465);