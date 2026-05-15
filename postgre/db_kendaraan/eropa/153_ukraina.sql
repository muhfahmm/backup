-- Data Kendaraan untuk ukraina
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'ukraina'), 'Sepeda Motor', 6693377),
  ((SELECT id FROM countries WHERE name_en = 'ukraina'), 'Mobil', 3569801),
  ((SELECT id FROM countries WHERE name_en = 'ukraina'), 'Bus', 8924),
  ((SELECT id FROM countries WHERE name_en = 'ukraina'), 'Truk', 44622);