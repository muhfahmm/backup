-- Data Kendaraan untuk republik rumania
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'republik rumania'), 'Sepeda Motor', 2919921),
  ((SELECT id FROM countries WHERE name_en = 'republik rumania'), 'Mobil', 1557291),
  ((SELECT id FROM countries WHERE name_en = 'republik rumania'), 'Bus', 3893),
  ((SELECT id FROM countries WHERE name_en = 'republik rumania'), 'Truk', 19466);