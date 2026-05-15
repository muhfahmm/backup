-- Data Kendaraan untuk benin
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'benin'), 'Sepeda Motor', 1722757),
  ((SELECT id FROM countries WHERE name_en = 'benin'), 'Mobil', 918803),
  ((SELECT id FROM countries WHERE name_en = 'benin'), 'Bus', 2297),
  ((SELECT id FROM countries WHERE name_en = 'benin'), 'Truk', 11485);