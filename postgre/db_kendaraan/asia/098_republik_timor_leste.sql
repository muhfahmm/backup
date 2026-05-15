-- Data Kendaraan untuk republik timor leste
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'republik timor leste'), 'Sepeda Motor', 0),
  ((SELECT id FROM countries WHERE name_en = 'republik timor leste'), 'Mobil', 0),
  ((SELECT id FROM countries WHERE name_en = 'republik timor leste'), 'Bus', 0),
  ((SELECT id FROM countries WHERE name_en = 'republik timor leste'), 'Truk', 0);