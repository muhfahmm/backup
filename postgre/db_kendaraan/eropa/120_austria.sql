-- Data Kendaraan untuk austria
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'austria'), 'Sepeda Motor', 1326078),
  ((SELECT id FROM countries WHERE name_en = 'austria'), 'Mobil', 707241),
  ((SELECT id FROM countries WHERE name_en = 'austria'), 'Bus', 1768),
  ((SELECT id FROM countries WHERE name_en = 'austria'), 'Truk', 8840);