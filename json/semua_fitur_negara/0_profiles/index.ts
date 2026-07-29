import { afrika_profiles } from './afrika/index';
import { asia_profiles } from './asia/index';
import { eropa_profiles } from './eropa/index';
import { na_profiles } from './na/index';
import { oceania_profiles } from './oceania/index';
import { sa_profiles } from './sa/index';

const allProfiles = [
  ...afrika_profiles,
  ...asia_profiles,
  ...eropa_profiles,
  ...na_profiles,
  ...oceania_profiles,
  ...sa_profiles,
];

export const PROFILES_RELIGION_DATA: { name_id: string; religion: string }[] =
  allProfiles.map((p) => ({ name_id: p.name_id, religion: p.religion }));

export const PROFILES_IDEOLOGY_DATA: { name_id: string; ideology: string }[] =
  allProfiles.map((p) => ({ name_id: p.name_id, ideology: p.ideology }));
