-- Database Organisasi: Liga Arab
-- Tipe: Regional

INSERT INTO organisasi_internasional (code, name, type) 
VALUES ('LIGAARAB', 'Liga Arab', 'Regional')
ON CONFLICT (code) DO UPDATE SET name = EXCLUDED.name;

INSERT INTO organisasi_membership (organisasi_id, country_id, membership_type) VALUES
  ((SELECT id FROM organisasi_internasional WHERE code = 'LIGAARAB'), (SELECT id FROM countries WHERE name_en = 'aljazair' OR name_id = 'aljazair'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'LIGAARAB'), (SELECT id FROM countries WHERE name_en = 'arab saudi' OR name_id = 'arab saudi'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'LIGAARAB'), (SELECT id FROM countries WHERE name_en = 'bahrain' OR name_id = 'bahrain'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'LIGAARAB'), (SELECT id FROM countries WHERE name_en = 'djibouti' OR name_id = 'djibouti'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'LIGAARAB'), (SELECT id FROM countries WHERE name_en = 'irak' OR name_id = 'irak'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'LIGAARAB'), (SELECT id FROM countries WHERE name_en = 'komoro' OR name_id = 'komoro'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'LIGAARAB'), (SELECT id FROM countries WHERE name_en = 'kuwait' OR name_id = 'kuwait'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'LIGAARAB'), (SELECT id FROM countries WHERE name_en = 'lebanon' OR name_id = 'lebanon'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'LIGAARAB'), (SELECT id FROM countries WHERE name_en = 'libya' OR name_id = 'libya'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'LIGAARAB'), (SELECT id FROM countries WHERE name_en = 'maroko' OR name_id = 'maroko'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'LIGAARAB'), (SELECT id FROM countries WHERE name_en = 'mauritania' OR name_id = 'mauritania'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'LIGAARAB'), (SELECT id FROM countries WHERE name_en = 'mesir' OR name_id = 'mesir'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'LIGAARAB'), (SELECT id FROM countries WHERE name_en = 'oman' OR name_id = 'oman'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'LIGAARAB'), (SELECT id FROM countries WHERE name_en = 'palestina' OR name_id = 'palestina'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'LIGAARAB'), (SELECT id FROM countries WHERE name_en = 'qatar' OR name_id = 'qatar'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'LIGAARAB'), (SELECT id FROM countries WHERE name_en = 'republik sudan' OR name_id = 'republik sudan'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'LIGAARAB'), (SELECT id FROM countries WHERE name_en = 'somalia' OR name_id = 'somalia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'LIGAARAB'), (SELECT id FROM countries WHERE name_en = 'suriah' OR name_id = 'suriah'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'LIGAARAB'), (SELECT id FROM countries WHERE name_en = 'tunisia' OR name_id = 'tunisia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'LIGAARAB'), (SELECT id FROM countries WHERE name_en = 'uni emirat arab' OR name_id = 'uni emirat arab'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'LIGAARAB'), (SELECT id FROM countries WHERE name_en = 'yaman' OR name_id = 'yaman'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'LIGAARAB'), (SELECT id FROM countries WHERE name_en = 'yordania' OR name_id = 'yordania'), 'Member');