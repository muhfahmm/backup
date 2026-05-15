-- Data Kendaraan untuk vanuatu
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'vanuatu'), 'Sepeda Motor', 43902),
  ((SELECT id FROM countries WHERE name_en = 'vanuatu'), 'Mobil', 23414),
  ((SELECT id FROM countries WHERE name_en = 'vanuatu'), 'Bus', 58),
  ((SELECT id FROM countries WHERE name_en = 'vanuatu'), 'Truk', 292);