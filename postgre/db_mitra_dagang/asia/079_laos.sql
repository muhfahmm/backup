-- Mitra Perdagangan untuk laos
-- Syarat: Harus memiliki Kedutaan Besar
INSERT INTO mitra_perdagangan (country_id, partner_country_id, type, status) VALUES
  ((SELECT id FROM countries WHERE name_en = 'laos'), (SELECT id FROM countries WHERE name_en = 'Indonesia'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'laos'), (SELECT id FROM countries WHERE name_en = 'India'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'laos'), (SELECT id FROM countries WHERE name_en = 'Filipina'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'laos'), (SELECT id FROM countries WHERE name_en = 'Jepang'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'laos'), (SELECT id FROM countries WHERE name_en = 'Amerika Serikat'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'laos'), (SELECT id FROM countries WHERE name_en = 'Vietnam'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'laos'), (SELECT id FROM countries WHERE name_en = 'Prancis'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'laos'), (SELECT id FROM countries WHERE name_en = 'Uni Emirat Arab'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'laos'), (SELECT id FROM countries WHERE name_en = 'Singapura'), 'Perdagangan', 'Aktif');