-- Hubungan Geopolitik untuk belarus (REALISTIC DATA)
INSERT INTO hubungan_negara (country_id, target_country_id, relation_value) VALUES
  ((SELECT id FROM countries WHERE name_en = 'belarus' OR name_id = 'belarus' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Afganistan' OR name_id = 'Afganistan' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'belarus' OR name_id = 'belarus' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Albania' OR name_id = 'Albania' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'belarus' OR name_id = 'belarus' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Andorra' OR name_id = 'Andorra' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'belarus' OR name_id = 'belarus' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Arab Saudi' OR name_id = 'Arab Saudi' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'belarus' OR name_id = 'belarus' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Argentina' OR name_id = 'Argentina' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'belarus' OR name_id = 'belarus' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Australia' OR name_id = 'Australia' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'belarus' OR name_id = 'belarus' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bahama' OR name_id = 'Bahama' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'belarus' OR name_id = 'belarus' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bahrain' OR name_id = 'Bahrain' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'belarus' OR name_id = 'belarus' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belanda' OR name_id = 'Belanda' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'belarus' OR name_id = 'belarus' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belgia' OR name_id = 'Belgia' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'belarus' OR name_id = 'belarus' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belize' OR name_id = 'Belize' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'belarus' OR name_id = 'belarus' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Brazil' OR name_id = 'Brazil' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'belarus' OR name_id = 'belarus' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Brunei' OR name_id = 'Brunei' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'belarus' OR name_id = 'belarus' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bulgaria' OR name_id = 'Bulgaria' LIMIT 1), 50);