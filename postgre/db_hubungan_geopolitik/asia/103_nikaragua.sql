-- Hubungan Geopolitik untuk nikaragua (REALISTIC DATA)
INSERT INTO hubungan_negara (country_id, target_country_id, relation_value) VALUES
  ((SELECT id FROM countries WHERE name_en = 'nikaragua' OR name_id = 'nikaragua' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Afrika Selatan' OR name_id = 'Afrika Selatan' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'nikaragua' OR name_id = 'nikaragua' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Aljazair' OR name_id = 'Aljazair' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'nikaragua' OR name_id = 'nikaragua' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Angola' OR name_id = 'Angola' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'nikaragua' OR name_id = 'nikaragua' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bangladesh' OR name_id = 'Bangladesh' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'nikaragua' OR name_id = 'nikaragua' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belanda' OR name_id = 'Belanda' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'nikaragua' OR name_id = 'nikaragua' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belgia' OR name_id = 'Belgia' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'nikaragua' OR name_id = 'nikaragua' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bermuda' OR name_id = 'Bermuda' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'nikaragua' OR name_id = 'nikaragua' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bolivia' OR name_id = 'Bolivia' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'nikaragua' OR name_id = 'nikaragua' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bosnia dan Hercegovina' OR name_id = 'Bosnia dan Hercegovina' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'nikaragua' OR name_id = 'nikaragua' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Brunei' OR name_id = 'Brunei' LIMIT 1), 50);