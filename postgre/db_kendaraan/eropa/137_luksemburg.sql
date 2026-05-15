-- Data Kendaraan untuk luksemburg
INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES
  ((SELECT id FROM countries WHERE name_en = 'luksemburg'), 'Sepeda Motor', 91192),
  ((SELECT id FROM countries WHERE name_en = 'luksemburg'), 'Mobil', 48636),
  ((SELECT id FROM countries WHERE name_en = 'luksemburg'), 'Bus', 121),
  ((SELECT id FROM countries WHERE name_en = 'luksemburg'), 'Truk', 607);