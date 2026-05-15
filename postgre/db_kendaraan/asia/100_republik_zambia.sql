-- Data Kendaraan untuk republik zambia
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'republik zambia'), 'Sepeda Motor', 2602773),
  ((SELECT id FROM countries WHERE name_en = 'republik zambia'), 'Mobil', 1388145),
  ((SELECT id FROM countries WHERE name_en = 'republik zambia'), 'Bus', 3470),
  ((SELECT id FROM countries WHERE name_en = 'republik zambia'), 'Truk', 17351);