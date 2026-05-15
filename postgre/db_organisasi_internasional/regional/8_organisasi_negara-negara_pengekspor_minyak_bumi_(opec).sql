-- Database Organisasi: Organisasi Negara-Negara Pengekspor Minyak Bumi (OPEC)
-- Tipe: Regional

INSERT INTO organisasi_internasional (code, name, type) 
VALUES ('OPEC', 'Organisasi Negara-Negara Pengekspor Minyak Bumi (OPEC)', 'Regional')
ON CONFLICT (code) DO UPDATE SET name = EXCLUDED.name;

INSERT INTO organisasi_membership (organisasi_id, country_id, membership_type) VALUES
  ((SELECT id FROM organisasi_internasional WHERE code = 'OPEC'), (SELECT id FROM countries WHERE name_en = 'aljazair' OR name_id = 'aljazair'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OPEC'), (SELECT id FROM countries WHERE name_en = 'arab saudi' OR name_id = 'arab saudi'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OPEC'), (SELECT id FROM countries WHERE name_en = 'gabon' OR name_id = 'gabon'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OPEC'), (SELECT id FROM countries WHERE name_en = 'irak' OR name_id = 'irak'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OPEC'), (SELECT id FROM countries WHERE name_en = 'iran' OR name_id = 'iran'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OPEC'), (SELECT id FROM countries WHERE name_en = 'kongo' OR name_id = 'kongo'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OPEC'), (SELECT id FROM countries WHERE name_en = 'kuwait' OR name_id = 'kuwait'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OPEC'), (SELECT id FROM countries WHERE name_en = 'libya' OR name_id = 'libya'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OPEC'), (SELECT id FROM countries WHERE name_en = 'nigeria' OR name_id = 'nigeria'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OPEC'), (SELECT id FROM countries WHERE name_en = 'uni emirat arab' OR name_id = 'uni emirat arab'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'OPEC'), (SELECT id FROM countries WHERE name_en = 'venezuela' OR name_id = 'venezuela'), 'Member');