-- Database Organisasi: Perhimpunan Bangsa-Bangsa Asia Tenggara (ASEAN)
-- Tipe: Regional

INSERT INTO organisasi_internasional (code, name, type) 
VALUES ('ASEAN', 'Perhimpunan Bangsa-Bangsa Asia Tenggara (ASEAN)', 'Regional')
ON CONFLICT (code) DO UPDATE SET name = EXCLUDED.name;

INSERT INTO organisasi_membership (organisasi_id, country_id, membership_type) VALUES
  ((SELECT id FROM organisasi_internasional WHERE code = 'ASEAN'), (SELECT id FROM countries WHERE name_en = 'brunei' OR name_id = 'brunei'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'ASEAN'), (SELECT id FROM countries WHERE name_en = 'filipina' OR name_id = 'filipina'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'ASEAN'), (SELECT id FROM countries WHERE name_en = 'indonesia' OR name_id = 'indonesia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'ASEAN'), (SELECT id FROM countries WHERE name_en = 'kamboja' OR name_id = 'kamboja'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'ASEAN'), (SELECT id FROM countries WHERE name_en = 'laos' OR name_id = 'laos'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'ASEAN'), (SELECT id FROM countries WHERE name_en = 'malaysia' OR name_id = 'malaysia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'ASEAN'), (SELECT id FROM countries WHERE name_en = 'myanmar' OR name_id = 'myanmar'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'ASEAN'), (SELECT id FROM countries WHERE name_en = 'singapura' OR name_id = 'singapura'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'ASEAN'), (SELECT id FROM countries WHERE name_en = 'thailand' OR name_id = 'thailand'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'ASEAN'), (SELECT id FROM countries WHERE name_en = 'vietnam' OR name_id = 'vietnam'), 'Member');