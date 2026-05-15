-- Kedutaan Besar untuk lebanon (REALISTIC)
INSERT INTO kedutaan_besar (country_id, partner_country_id, type, status) VALUES
  ((SELECT id FROM countries WHERE name_en = 'lebanon' OR name_id = 'lebanon' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Afganistan' OR name_id = 'Afganistan' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'lebanon' OR name_id = 'lebanon' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Afrika Selatan' OR name_id = 'Afrika Selatan' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'lebanon' OR name_id = 'lebanon' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Andorra' OR name_id = 'Andorra' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'lebanon' OR name_id = 'lebanon' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Angola' OR name_id = 'Angola' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'lebanon' OR name_id = 'lebanon' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Arab Saudi' OR name_id = 'Arab Saudi' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'lebanon' OR name_id = 'lebanon' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Azerbaijan' OR name_id = 'Azerbaijan' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'lebanon' OR name_id = 'lebanon' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bahama' OR name_id = 'Bahama' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'lebanon' OR name_id = 'lebanon' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bangladesh' OR name_id = 'Bangladesh' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'lebanon' OR name_id = 'lebanon' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Benin' OR name_id = 'Benin' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'lebanon' OR name_id = 'lebanon' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Brunei' OR name_id = 'Brunei' LIMIT 1), 'Kedutaan Besar', 'Aktif');