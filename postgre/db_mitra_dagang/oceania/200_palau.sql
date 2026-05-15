-- Mitra Perdagangan untuk palau
-- Syarat: Harus memiliki Kedutaan Besar
INSERT INTO mitra_perdagangan (country_id, partner_country_id, type, status) VALUES
  ((SELECT id FROM countries WHERE name_en = 'palau'), (SELECT id FROM countries WHERE name_en = 'India'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'palau'), (SELECT id FROM countries WHERE name_en = 'Australia'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'palau'), (SELECT id FROM countries WHERE name_en = 'Papua Nugini'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'palau'), (SELECT id FROM countries WHERE name_en = 'Jepang'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'palau'), (SELECT id FROM countries WHERE name_en = 'Korea Selatan'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'palau'), (SELECT id FROM countries WHERE name_en = 'Amerika Serikat'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'palau'), (SELECT id FROM countries WHERE name_en = 'Fiji'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'palau'), (SELECT id FROM countries WHERE name_en = 'China'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'palau'), (SELECT id FROM countries WHERE name_en = 'Jerman'), 'Perdagangan', 'Aktif');