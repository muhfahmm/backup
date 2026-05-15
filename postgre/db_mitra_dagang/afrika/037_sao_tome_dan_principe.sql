-- Mitra Perdagangan untuk sao tome dan principe
-- Syarat: Harus memiliki Kedutaan Besar
INSERT INTO mitra_perdagangan (country_id, partner_country_id, type, status) VALUES
  ((SELECT id FROM countries WHERE name_en = 'sao tome dan principe'), (SELECT id FROM countries WHERE name_en = 'Jerman'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'sao tome dan principe'), (SELECT id FROM countries WHERE name_en = 'Aljazair'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'sao tome dan principe'), (SELECT id FROM countries WHERE name_en = 'Ethiopia'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'sao tome dan principe'), (SELECT id FROM countries WHERE name_en = 'Singapura'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'sao tome dan principe'), (SELECT id FROM countries WHERE name_en = 'Maroko'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'sao tome dan principe'), (SELECT id FROM countries WHERE name_en = 'Korea Selatan'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'sao tome dan principe'), (SELECT id FROM countries WHERE name_en = 'Inggris'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'sao tome dan principe'), (SELECT id FROM countries WHERE name_en = 'Uni Emirat Arab'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'sao tome dan principe'), (SELECT id FROM countries WHERE name_en = 'Jepang'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'sao tome dan principe'), (SELECT id FROM countries WHERE name_en = 'Ghana'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'sao tome dan principe'), (SELECT id FROM countries WHERE name_en = 'Amerika Serikat'), 'Perdagangan', 'Aktif');