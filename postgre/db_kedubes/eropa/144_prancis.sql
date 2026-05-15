-- Kedutaan Besar untuk prancis (REALISTIC)
INSERT INTO kedutaan_besar (country_id, partner_country_id, type, status) VALUES
  ((SELECT id FROM countries WHERE name_en = 'prancis' OR name_id = 'prancis' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Amerika Serikat' OR name_id = 'Amerika Serikat' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'prancis' OR name_id = 'prancis' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Arab Saudi' OR name_id = 'Arab Saudi' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'prancis' OR name_id = 'prancis' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Armenia' OR name_id = 'Armenia' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'prancis' OR name_id = 'prancis' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Azerbaijan' OR name_id = 'Azerbaijan' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'prancis' OR name_id = 'prancis' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belarus' OR name_id = 'Belarus' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'prancis' OR name_id = 'prancis' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Belize' OR name_id = 'Belize' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'prancis' OR name_id = 'prancis' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bermuda' OR name_id = 'Bermuda' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'prancis' OR name_id = 'prancis' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Bosnia dan Hercegovina' OR name_id = 'Bosnia dan Hercegovina' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'prancis' OR name_id = 'prancis' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Brazil' OR name_id = 'Brazil' LIMIT 1), 'Kedutaan Besar', 'Aktif'),
  ((SELECT id FROM countries WHERE name_en = 'prancis' OR name_id = 'prancis' LIMIT 1), (SELECT id FROM countries WHERE name_en = 'Brunei' OR name_id = 'Brunei' LIMIT 1), 'Kedutaan Besar', 'Aktif');