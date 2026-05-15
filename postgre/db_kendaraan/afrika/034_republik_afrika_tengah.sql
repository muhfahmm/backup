-- Data Kendaraan untuk republik afrika tengah
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'republik afrika tengah'), 'Sepeda Motor', 699956),
  ((SELECT id FROM countries WHERE name_en = 'republik afrika tengah'), 'Mobil', 373310),
  ((SELECT id FROM countries WHERE name_en = 'republik afrika tengah'), 'Bus', 933),
  ((SELECT id FROM countries WHERE name_en = 'republik afrika tengah'), 'Truk', 4666);