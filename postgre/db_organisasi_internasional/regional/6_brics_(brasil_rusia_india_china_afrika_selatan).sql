-- Database Organisasi: BRICS (Brasil Rusia India China Afrika Selatan)
-- Tipe: Regional

INSERT INTO organisasi_internasional (code, name, type) 
VALUES ('Brasil Rusia India China Afrika Selatan', 'BRICS (Brasil Rusia India China Afrika Selatan)', 'Regional')
ON CONFLICT (code) DO UPDATE SET name = EXCLUDED.name;

INSERT INTO organisasi_membership (organisasi_id, country_id, membership_type) VALUES
  ((SELECT id FROM organisasi_internasional WHERE code = 'Brasil Rusia India China Afrika Selatan'), (SELECT id FROM countries WHERE name_en = 'afrika selatan' OR name_id = 'afrika selatan'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Brasil Rusia India China Afrika Selatan'), (SELECT id FROM countries WHERE name_en = 'arab saudi' OR name_id = 'arab saudi'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Brasil Rusia India China Afrika Selatan'), (SELECT id FROM countries WHERE name_en = 'brazil' OR name_id = 'brazil'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Brasil Rusia India China Afrika Selatan'), (SELECT id FROM countries WHERE name_en = 'china' OR name_id = 'china'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Brasil Rusia India China Afrika Selatan'), (SELECT id FROM countries WHERE name_en = 'ethiopia' OR name_id = 'ethiopia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Brasil Rusia India China Afrika Selatan'), (SELECT id FROM countries WHERE name_en = 'india' OR name_id = 'india'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Brasil Rusia India China Afrika Selatan'), (SELECT id FROM countries WHERE name_en = 'iran' OR name_id = 'iran'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Brasil Rusia India China Afrika Selatan'), (SELECT id FROM countries WHERE name_en = 'mesir' OR name_id = 'mesir'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Brasil Rusia India China Afrika Selatan'), (SELECT id FROM countries WHERE name_en = 'rusia' OR name_id = 'rusia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Brasil Rusia India China Afrika Selatan'), (SELECT id FROM countries WHERE name_en = 'uni emirat arab' OR name_id = 'uni emirat arab'), 'Member');