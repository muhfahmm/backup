-- Mitra Perdagangan untuk brazil
-- Syarat: Harus memiliki Kedutaan Besar
INSERT INTO mitra_perdagangan (country_id, partner_country_id, type, status) VALUES
  ((SELECT id FROM countries WHERE name_en = 'brazil'), (SELECT id FROM countries WHERE name_en = 'Jerman'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'brazil'), (SELECT id FROM countries WHERE name_en = 'Inggris'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'brazil'), (SELECT id FROM countries WHERE name_en = 'Uni Emirat Arab'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'brazil'), (SELECT id FROM countries WHERE name_en = 'Amerika Serikat'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'brazil'), (SELECT id FROM countries WHERE name_en = 'India'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'brazil'), (SELECT id FROM countries WHERE name_en = 'Kolombia'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'brazil'), (SELECT id FROM countries WHERE name_en = 'Jepang'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'brazil'), (SELECT id FROM countries WHERE name_en = 'Singapura'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'brazil'), (SELECT id FROM countries WHERE name_en = 'Chile'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'brazil'), (SELECT id FROM countries WHERE name_en = 'Argentina'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'brazil'), (SELECT id FROM countries WHERE name_en = 'Prancis'), 'Perdagangan', 'Aktif');