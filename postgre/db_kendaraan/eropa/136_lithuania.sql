-- Data Kendaraan untuk lithuania
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'lithuania'), 'Sepeda Motor', 420231),
  ((SELECT id FROM countries WHERE name_en = 'lithuania'), 'Mobil', 224123),
  ((SELECT id FROM countries WHERE name_en = 'lithuania'), 'Bus', 560),
  ((SELECT id FROM countries WHERE name_en = 'lithuania'), 'Truk', 2801);