-- Data Kendaraan untuk palestina
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'palestina'), 'Sepeda Motor', 685363),
  ((SELECT id FROM countries WHERE name_en = 'palestina'), 'Mobil', 365526),
  ((SELECT id FROM countries WHERE name_en = 'palestina'), 'Bus', 913),
  ((SELECT id FROM countries WHERE name_en = 'palestina'), 'Truk', 4569);