-- Data Kendaraan untuk turkmenistan
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'turkmenistan'), 'Sepeda Motor', 877636),
  ((SELECT id FROM countries WHERE name_en = 'turkmenistan'), 'Mobil', 468072),
  ((SELECT id FROM countries WHERE name_en = 'turkmenistan'), 'Bus', 1170),
  ((SELECT id FROM countries WHERE name_en = 'turkmenistan'), 'Truk', 5850);