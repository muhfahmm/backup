-- Database Organisasi: Pasar Umum Selatan (MERCOSUR)
-- Tipe: Regional

INSERT INTO organisasi_internasional (code, name, type) 
VALUES ('MERCOSUR', 'Pasar Umum Selatan (MERCOSUR)', 'Regional')
ON CONFLICT (code) DO UPDATE SET name = EXCLUDED.name;

INSERT INTO organisasi_membership (organisasi_id, country_id, membership_type) VALUES
  ((SELECT id FROM organisasi_internasional WHERE code = 'MERCOSUR'), (SELECT id FROM countries WHERE name_en = 'argentina' OR name_id = 'argentina'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'MERCOSUR'), (SELECT id FROM countries WHERE name_en = 'bolivia' OR name_id = 'bolivia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'MERCOSUR'), (SELECT id FROM countries WHERE name_en = 'brazil' OR name_id = 'brazil'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'MERCOSUR'), (SELECT id FROM countries WHERE name_en = 'paraguay' OR name_id = 'paraguay'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'MERCOSUR'), (SELECT id FROM countries WHERE name_en = 'uruguay' OR name_id = 'uruguay'), 'Member');