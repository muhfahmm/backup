-- Kedutaan Besar untuk meksiko (REALISTIC)
INSERT INTO kedutaan_besar (country_id, partner_country_id, type, status) VALUES
  ((SELECT id FROM countries WHERE name_en = 'meksiko' OR name_id = 'meksiko' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Afrika Selatan' OR name_id = 'Afrika Selatan' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'meksiko' OR name_id = 'meksiko' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Aljazair' OR name_id = 'Aljazair' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'meksiko' OR name_id = 'meksiko' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Armenia' OR name_id = 'Armenia' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'meksiko' OR name_id = 'meksiko' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bahrain' OR name_id = 'Bahrain' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'meksiko' OR name_id = 'meksiko' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bangladesh' OR name_id = 'Bangladesh' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'meksiko' OR name_id = 'meksiko' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Barbados' OR name_id = 'Barbados' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'meksiko' OR name_id = 'meksiko' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belanda' OR name_id = 'Belanda' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'meksiko' OR name_id = 'meksiko' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belarus' OR name_id = 'Belarus' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'meksiko' OR name_id = 'meksiko' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Botswana' OR name_id = 'Botswana' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'meksiko' OR name_id = 'meksiko' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Brazil' OR name_id = 'Brazil' LIMIT 1), 'Kedutaan Besar', 'Aktif');