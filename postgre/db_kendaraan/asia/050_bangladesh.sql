-- Data Kendaraan untuk bangladesh
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'bangladesh'), 'Sepeda Motor', 24203405),
  ((SELECT id FROM countries WHERE name_en = 'bangladesh'), 'Mobil', 12908483),
  ((SELECT id FROM countries WHERE name_en = 'bangladesh'), 'Bus', 32271),
  ((SELECT id FROM countries WHERE name_en = 'bangladesh'), 'Truk', 161356);