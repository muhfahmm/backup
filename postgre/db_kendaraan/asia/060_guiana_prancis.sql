-- Data Kendaraan untuk guiana prancis
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'guiana prancis'), 'Sepeda Motor', 43603),
  ((SELECT id FROM countries WHERE name_en = 'guiana prancis'), 'Mobil', 23255),
  ((SELECT id FROM countries WHERE name_en = 'guiana prancis'), 'Bus', 58),
  ((SELECT id FROM countries WHERE name_en = 'guiana prancis'), 'Truk', 290);