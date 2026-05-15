-- Mitra Perdagangan untuk tuvalu
-- Syarat: Harus memiliki Kedutaan Besar
INSERT INTO mitra_perdagangan (country_id, partner_country_id, type, status) VALUES
  ((SELECT id FROM countries WHERE name_en = 'tuvalu'), (SELECT id FROM countries WHERE name_en = 'India'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'tuvalu'), (SELECT id FROM countries WHERE name_en = 'Jepang'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'tuvalu'), (SELECT id FROM countries WHERE name_en = 'Amerika Serikat'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'tuvalu'), (SELECT id FROM countries WHERE name_en = 'Korea Selatan'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'tuvalu'), (SELECT id FROM countries WHERE name_en = 'Jerman'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'tuvalu'), (SELECT id FROM countries WHERE name_en = 'Prancis'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'tuvalu'), (SELECT id FROM countries WHERE name_en = 'Fiji'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'tuvalu'), (SELECT id FROM countries WHERE name_en = 'Uni Emirat Arab'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'tuvalu'), (SELECT id FROM countries WHERE name_en = 'Selandia Baru'), 'Perdagangan', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'tuvalu'), (SELECT id FROM countries WHERE name_en = 'Australia'), 'Perdagangan', 'Aktif');