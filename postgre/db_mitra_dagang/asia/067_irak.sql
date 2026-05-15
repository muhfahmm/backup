-- Mitra Perdagangan untuk irak
-- Syarat: Harus memiliki Kedutaan Besar
INSERT INTO mitra_perdagangan (country_id, partner_country_id, type, status) VALUES
  ((SELECT id FROM countries WHERE name_en = 'irak'), (SELECT id FROM countries WHERE name_en = 'China'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'irak'), (SELECT id FROM countries WHERE name_en = 'Prancis'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'irak'), (SELECT id FROM countries WHERE name_en = 'Malaysia'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'irak'), (SELECT id FROM countries WHERE name_en = 'Singapura'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'irak'), (SELECT id FROM countries WHERE name_en = 'Korea Selatan'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'irak'), (SELECT id FROM countries WHERE name_en = 'Filipina'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'irak'), (SELECT id FROM countries WHERE name_en = 'Thailand'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'irak'), (SELECT id FROM countries WHERE name_en = 'Amerika Serikat'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'irak'), (SELECT id FROM countries WHERE name_en = 'Jepang'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'irak'), (SELECT id FROM countries WHERE name_en = 'Inggris'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'irak'), (SELECT id FROM countries WHERE name_en = 'Jerman'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'irak'), (SELECT id FROM countries WHERE name_en = 'Indonesia'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'irak'), (SELECT id FROM countries WHERE name_en = 'Vietnam'), 'Perdagangan', 'Aktif');