-- Database Organisasi: Dewan Kerja Sama Teluk (GCC)
-- Tipe: Regional

INSERT INTO organisasi_internasional (code, name, type) 
VALUES ('GCC', 'Dewan Kerja Sama Teluk (GCC)', 'Regional')
ON CONFLICT (code) DO UPDATE SET name = EXCLUDED.name;

INSERT INTO organisasi_membership (organisasi_id, country_id, membership_type) VALUES
  ((SELECT id FROM organisasi_internasional WHERE code = 'GCC'), (SELECT id FROM countries WHERE name_en = 'arab saudi' OR name_id = 'arab saudi'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'GCC'), (SELECT id FROM countries WHERE name_en = 'bahrain' OR name_id = 'bahrain'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'GCC'), (SELECT id FROM countries WHERE name_en = 'kuwait' OR name_id = 'kuwait'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'GCC'), (SELECT id FROM countries WHERE name_en = 'oman' OR name_id = 'oman'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'GCC'), (SELECT id FROM countries WHERE name_en = 'qatar' OR name_id = 'qatar'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'GCC'), (SELECT id FROM countries WHERE name_en = 'uni emirat arab' OR name_id = 'uni emirat arab'), 'Member');