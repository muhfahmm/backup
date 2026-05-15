-- Data Kendaraan untuk moldova
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'moldova'), 'Sepeda Motor', 405907),
  ((SELECT id FROM countries WHERE name_en = 'moldova'), 'Mobil', 216483),
  ((SELECT id FROM countries WHERE name_en = 'moldova'), 'Bus', 541),
  ((SELECT id FROM countries WHERE name_en = 'moldova'), 'Truk', 2706);