-- Database Organisasi: Persemakmuran Bangsa-Bangsa (Commonwealth)
-- Tipe: Regional

INSERT INTO organisasi_internasional (code, name, type) 
VALUES ('Commonwealth', 'Persemakmuran Bangsa-Bangsa (Commonwealth)', 'Regional')
ON CONFLICT (code) DO UPDATE SET name = EXCLUDED.name;

INSERT INTO organisasi_membership (organisasi_id, country_id, membership_type) VALUES
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'afrika selatan' OR name_id = 'afrika selatan'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'australia' OR name_id = 'australia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'bahama' OR name_id = 'bahama'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'bangladesh' OR name_id = 'bangladesh'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'barbados' OR name_id = 'barbados'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'belize' OR name_id = 'belize'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'botswana' OR name_id = 'botswana'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'fiji' OR name_id = 'fiji'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'ghana' OR name_id = 'ghana'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'guyana' OR name_id = 'guyana'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'india' OR name_id = 'india'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'inggris' OR name_id = 'inggris'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'jamaika' OR name_id = 'jamaika'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'kamerun' OR name_id = 'kamerun'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'kanada' OR name_id = 'kanada'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'kenya' OR name_id = 'kenya'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'malaysia' OR name_id = 'malaysia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'malta' OR name_id = 'malta'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'mauritius' OR name_id = 'mauritius'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'mozambik' OR name_id = 'mozambik'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'namibia' OR name_id = 'namibia'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'nigeria' OR name_id = 'nigeria'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'pakistan' OR name_id = 'pakistan'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'papua nugini' OR name_id = 'papua nugini'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'rwanda' OR name_id = 'rwanda'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'samoa' OR name_id = 'samoa'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'selandia baru' OR name_id = 'selandia baru'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'singapura' OR name_id = 'singapura'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'sri lanka' OR name_id = 'sri lanka'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'tonga' OR name_id = 'tonga'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'trinidad dan tobago' OR name_id = 'trinidad dan tobago'), 'Member'),
  ((SELECT id FROM organisasi_internasional WHERE code = 'Commonwealth'), (SELECT id FROM countries WHERE name_en = 'vanuatu' OR name_id = 'vanuatu'), 'Member');