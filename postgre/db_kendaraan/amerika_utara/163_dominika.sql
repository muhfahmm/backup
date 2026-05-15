-- Data Kendaraan untuk dominika
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'dominika'), 'Sepeda Motor', 10743),
  ((SELECT id FROM countries WHERE name_en = 'dominika'), 'Mobil', 5730),
  ((SELECT id FROM countries WHERE name_en = 'dominika'), 'Bus', 14),
  ((SELECT id FROM countries WHERE name_en = 'dominika'), 'Truk', 71);