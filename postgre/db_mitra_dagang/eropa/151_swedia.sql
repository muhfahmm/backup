-- Mitra Perdagangan untuk swedia
-- Syarat: Harus memiliki Kedutaan Besar
INSERT INTO mitra_perdagangan (country_id, partner_country_id, type, status) VALUES
  ((SELECT id FROM countries WHERE name_en = 'swedia'), (SELECT id FROM countries WHERE name_en = 'Rusia'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'swedia'), (SELECT id FROM countries WHERE name_en = 'Spanyol'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'swedia'), (SELECT id FROM countries WHERE name_en = 'Jepang'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'swedia'), (SELECT id FROM countries WHERE name_en = 'Singapura'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'swedia'), (SELECT id FROM countries WHERE name_en = 'Amerika Serikat'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'swedia'), (SELECT id FROM countries WHERE name_en = 'Turki'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'swedia'), (SELECT id FROM countries WHERE name_en = 'Swiss'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'swedia'), (SELECT id FROM countries WHERE name_en = 'Prancis'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'swedia'), (SELECT id FROM countries WHERE name_en = 'Uni Emirat Arab'), 'Perdagangan', 'Aktif');