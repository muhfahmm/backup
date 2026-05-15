-- Hubungan Geopolitik untuk amerika serikat (REALISTIC DATA)
INSERT INTO hubungan_negara (country_id, target_country_id, relation_value) VALUES
  ((SELECT id FROM countries WHERE name_en = 'amerika serikat' OR name_id = 'amerika serikat' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Albania' OR name_id = 'Albania' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'amerika serikat' OR name_id = 'amerika serikat' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Aljazair' OR name_id = 'Aljazair' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'amerika serikat' OR name_id = 'amerika serikat' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Andorra' OR name_id = 'Andorra' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'amerika serikat' OR name_id = 'amerika serikat' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Angola' OR name_id = 'Angola' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'amerika serikat' OR name_id = 'amerika serikat' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Antigua dan Barbuda' OR name_id = 'Antigua dan Barbuda' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'amerika serikat' OR name_id = 'amerika serikat' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Armenia' OR name_id = 'Armenia' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'amerika serikat' OR name_id = 'amerika serikat' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Azerbaijan' OR name_id = 'Azerbaijan' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'amerika serikat' OR name_id = 'amerika serikat' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bahama' OR name_id = 'Bahama' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'amerika serikat' OR name_id = 'amerika serikat' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bangladesh' OR name_id = 'Bangladesh' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'amerika serikat' OR name_id = 'amerika serikat' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Barbados' OR name_id = 'Barbados' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'amerika serikat' OR name_id = 'amerika serikat' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belarus' OR name_id = 'Belarus' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'amerika serikat' OR name_id = 'amerika serikat' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belize' OR name_id = 'Belize' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'amerika serikat' OR name_id = 'amerika serikat' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Benin' OR name_id = 'Benin' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'amerika serikat' OR name_id = 'amerika serikat' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bosnia dan Hercegovina' OR name_id = 'Bosnia dan Hercegovina' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'amerika serikat' OR name_id = 'amerika serikat' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Botswana' OR name_id = 'Botswana' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'amerika serikat' OR name_id = 'amerika serikat' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bulgaria' OR name_id = 'Bulgaria' LIMIT 1), 50);