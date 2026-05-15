-- Data Kendaraan untuk sudan selatan
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'sudan selatan'), 'Sepeda Motor', 1646388),
  ((SELECT id FROM countries WHERE name_en = 'sudan selatan'), 'Mobil', 878073),
  ((SELECT id FROM countries WHERE name_en = 'sudan selatan'), 'Bus', 2195),
  ((SELECT id FROM countries WHERE name_en = 'sudan selatan'), 'Truk', 10975);