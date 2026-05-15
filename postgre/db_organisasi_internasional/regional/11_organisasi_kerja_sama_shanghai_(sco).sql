-- Database Organisasi: Organisasi Kerja Sama Shanghai (SCO)
-- Tipe: Regional

INSERT INTO organisasi_internasional (code, name, type) 
VALUES ('SCO', 'Organisasi Kerja Sama Shanghai (SCO)', 'Regional')
ON CONFLICT (code) DO UPDATE SET name = EXCLUDED.name;

INSERT INTO organisasi_membership (organisasi_id, country_id, membership_type) VALUES
  ((SELECT id FROM organisasi_internasional WHERE code = 'SCO'), (SELECT id FROM countries WHERE name_en = 'china' OR name_id = 'china'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'SCO'), (SELECT id FROM countries WHERE name_en = 'india' OR name_id = 'india'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'SCO'), (SELECT id FROM countries WHERE name_en = 'iran' OR name_id = 'iran'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'SCO'), (SELECT id FROM countries WHERE name_en = 'kazakhstan' OR name_id = 'kazakhstan'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'SCO'), (SELECT id FROM countries WHERE name_en = 'kirgizstan' OR name_id = 'kirgizstan'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'SCO'), (SELECT id FROM countries WHERE name_en = 'pakistan' OR name_id = 'pakistan'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'SCO'), (SELECT id FROM countries WHERE name_en = 'rusia' OR name_id = 'rusia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'SCO'), (SELECT id FROM countries WHERE name_en = 'tajikistan' OR name_id = 'tajikistan'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'SCO'), (SELECT id FROM countries WHERE name_en = 'uzbekistan' OR name_id = 'uzbekistan'), 'Member');