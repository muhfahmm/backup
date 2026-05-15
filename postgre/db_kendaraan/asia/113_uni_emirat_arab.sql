-- Data Kendaraan untuk uni emirat arab
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'uni emirat arab'), 'Sepeda Motor', 1444643),
  ((SELECT id FROM countries WHERE name_en = 'uni emirat arab'), 'Mobil', 770476),
  ((SELECT id FROM countries WHERE name_en = 'uni emirat arab'), 'Bus', 1926),
  ((SELECT id FROM countries WHERE name_en = 'uni emirat arab'), 'Truk', 9630);