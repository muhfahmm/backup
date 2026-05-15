-- Database Organisasi: Organisasi Negara-Negara Amerika (OAS)
-- Tipe: Regional

INSERT INTO organisasi_internasional (code, name, type) 
VALUES ('OAS', 'Organisasi Negara-Negara Amerika (OAS)', 'Regional')
ON CONFLICT (code) DO UPDATE SET name = EXCLUDED.name;

INSERT INTO organisasi_membership (organisasi_id, country_id, membership_type) VALUES
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'amerika serikat' OR name_id = 'amerika serikat'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'argentina' OR name_id = 'argentina'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'bahama' OR name_id = 'bahama'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'barbados' OR name_id = 'barbados'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'belize' OR name_id = 'belize'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'bolivia' OR name_id = 'bolivia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'brazil' OR name_id = 'brazil'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'chile' OR name_id = 'chile'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'costa rica' OR name_id = 'costa rica'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'dominika' OR name_id = 'dominika'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'ekuador' OR name_id = 'ekuador'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'el salvador' OR name_id = 'el salvador'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'grenada' OR name_id = 'grenada'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'guatemala' OR name_id = 'guatemala'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'guyana' OR name_id = 'guyana'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'haiti' OR name_id = 'haiti'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'honduras' OR name_id = 'honduras'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'jamaika' OR name_id = 'jamaika'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'kanada' OR name_id = 'kanada'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'kolombia' OR name_id = 'kolombia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'meksiko' OR name_id = 'meksiko'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'nikaragua' OR name_id = 'nikaragua'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'panama' OR name_id = 'panama'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'paraguay' OR name_id = 'paraguay'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'peru' OR name_id = 'peru'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'republik dominika' OR name_id = 'republik dominika'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'saint lucia' OR name_id = 'saint lucia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'suriname' OR name_id = 'suriname'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'trinidad dan tobago' OR name_id = 'trinidad dan tobago'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'uruguay' OR name_id = 'uruguay'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OAS'), (SELECT id FROM countries WHERE name_en = 'venezuela' OR name_id = 'venezuela'), 'Member');