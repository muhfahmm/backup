-- Data Kendaraan untuk republik dominika
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'republik dominika'), 'Sepeda Motor', 1594074),
  ((SELECT id FROM countries WHERE name_en = 'republik dominika'), 'Mobil', 850173),
  ((SELECT id FROM countries WHERE name_en = 'republik dominika'), 'Bus', 2125),
  ((SELECT id FROM countries WHERE name_en = 'republik dominika'), 'Truk', 10627);