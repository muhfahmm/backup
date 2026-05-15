-- Hubungan Geopolitik untuk bhutan (REALISTIC DATA)
INSERT INTO hubungan_negara (country_id, target_country_id, relation_value) VALUES
  ((SELECT id FROM countries WHERE name_en = 'bhutan' OR name_id = 'bhutan' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Albania' OR name_id = 'Albania' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'bhutan' OR name_id = 'bhutan' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Arab Saudi' OR name_id = 'Arab Saudi' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'bhutan' OR name_id = 'bhutan' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Argentina' OR name_id = 'Argentina' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'bhutan' OR name_id = 'bhutan' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Australia' OR name_id = 'Australia' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'bhutan' OR name_id = 'bhutan' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Azerbaijan' OR name_id = 'Azerbaijan' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'bhutan' OR name_id = 'bhutan' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bahama' OR name_id = 'Bahama' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'bhutan' OR name_id = 'bhutan' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bangladesh' OR name_id = 'Bangladesh' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'bhutan' OR name_id = 'bhutan' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belanda' OR name_id = 'Belanda' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'bhutan' OR name_id = 'bhutan' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Botswana' OR name_id = 'Botswana' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'bhutan' OR name_id = 'bhutan' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Brazil' OR name_id = 'Brazil' LIMIT 1), 50),
  ((SELECT id FROM countries WHERE name_en = 'bhutan' OR name_id = 'bhutan' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bulgaria' OR name_id = 'Bulgaria' LIMIT 1), 50);