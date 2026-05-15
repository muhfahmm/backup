-- Data Kendaraan untuk kuba
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'kuba'), 'Sepeda Motor', 1700720),
  ((SELECT id FROM countries WHERE name_en = 'kuba'), 'Mobil', 907051),
  ((SELECT id FROM countries WHERE name_en = 'kuba'), 'Bus', 2267),
  ((SELECT id FROM countries WHERE name_en = 'kuba'), 'Truk', 11338);