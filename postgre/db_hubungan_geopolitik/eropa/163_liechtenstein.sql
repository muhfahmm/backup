-- Hubungan Geopolitik untuk liechtenstein (REALISTIC DATA)
INSERT INTO hubungan_negara (country_id, target_country_id, relation_value) VALUES
  ((SELECT id FROM countries WHERE name_en = 'liechtenstein' OR name_id = 'liechtenstein' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Afganistan' OR name_id = 'Afganistan' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'liechtenstein' OR name_id = 'liechtenstein' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Afrika Selatan' OR name_id = 'Afrika Selatan' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'liechtenstein' OR name_id = 'liechtenstein' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Albania' OR name_id = 'Albania' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'liechtenstein' OR name_id = 'liechtenstein' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Aljazair' OR name_id = 'Aljazair' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'liechtenstein' OR name_id = 'liechtenstein' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Argentina' OR name_id = 'Argentina' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'liechtenstein' OR name_id = 'liechtenstein' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Australia' OR name_id = 'Australia' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'liechtenstein' OR name_id = 'liechtenstein' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bahrain' OR name_id = 'Bahrain' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'liechtenstein' OR name_id = 'liechtenstein' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Barbados' OR name_id = 'Barbados' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'liechtenstein' OR name_id = 'liechtenstein' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belanda' OR name_id = 'Belanda' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'liechtenstein' OR name_id = 'liechtenstein' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belarus' OR name_id = 'Belarus' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'liechtenstein' OR name_id = 'liechtenstein' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Benin' OR name_id = 'Benin' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'liechtenstein' OR name_id = 'liechtenstein' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bosnia dan Hercegovina' OR name_id = 'Bosnia dan Hercegovina' LIMIT 1), 50);