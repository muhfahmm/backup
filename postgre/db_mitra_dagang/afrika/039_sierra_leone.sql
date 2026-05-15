-- Mitra Perdagangan untuk sierra leone
-- Syarat: Harus memiliki Kedutaan Besar
INSERT INTO mitra_perdagangan (country_id, partner_country_id, type, status) VALUES
  ((SELECT id FROM countries WHERE name_en = 'sierra leone'), (SELECT id FROM countries WHERE name_en = 'Mesir'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'sierra leone'), (SELECT id FROM countries WHERE name_en = 'Ghana'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'sierra leone'), (SELECT id FROM countries WHERE name_en = 'Amerika Serikat'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'sierra leone'), (SELECT id FROM countries WHERE name_en = 'Uni Emirat Arab'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'sierra leone'), (SELECT id FROM countries WHERE name_en = 'Ethiopia'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'sierra leone'), (SELECT id FROM countries WHERE name_en = 'Jepang'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'sierra leone'), (SELECT id FROM countries WHERE name_en = 'Aljazair'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'sierra leone'), (SELECT id FROM countries WHERE name_en = 'Jerman'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'sierra leone'), (SELECT id FROM countries WHERE name_en = 'Kenya'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'sierra leone'), (SELECT id FROM countries WHERE name_en = 'Maroko'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'sierra leone'), (SELECT id FROM countries WHERE name_en = 'India'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'sierra leone'), (SELECT id FROM countries WHERE name_en = 'Afrika Selatan'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'sierra leone'), (SELECT id FROM countries WHERE name_en = 'Inggris'), 'Perdagangan', 'Aktif');