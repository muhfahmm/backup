-- Database Organisasi: Dialog Keamanan Kuadrilateral (QUAD)
-- Tipe: Regional

INSERT INTO organisasi_internasional (code, name, type) 
VALUES ('QUAD', 'Dialog Keamanan Kuadrilateral (QUAD)', 'Regional')
ON CONFLICT (code) DO UPDATE SET name = EXCLUDED.name;

INSERT INTO organisasi_membership (organisasi_id, country_id, membership_type) VALUES
  ((SELECT id FROM organisasi_internasional WHERE code = 'QUAD'), (SELECT id FROM countries WHERE name_en = 'amerika serikat' OR name_id = 'amerika serikat'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'QUAD'), (SELECT id FROM countries WHERE name_en = 'australia' OR name_id = 'australia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'QUAD'), (SELECT id FROM countries WHERE name_en = 'india' OR name_id = 'india'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'QUAD'), (SELECT id FROM countries WHERE name_en = 'jepang' OR name_id = 'jepang'), 'Member');