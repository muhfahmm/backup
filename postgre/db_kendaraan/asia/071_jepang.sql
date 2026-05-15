-- Data Kendaraan untuk jepang
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'jepang'), 'Sepeda Motor', 18979365),
  ((SELECT id FROM countries WHERE name_en = 'jepang'), 'Mobil', 10122328),
  ((SELECT id FROM countries WHERE name_en = 'jepang'), 'Bus', 25305),
  ((SELECT id FROM countries WHERE name_en = 'jepang'), 'Truk', 126529);