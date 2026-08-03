import { calculateResolusiVoting, ResolusiVotingStats } from "./resolusiPBB_logic";

export type KeamananVotingStats = ResolusiVotingStats;

export const calculateKeamananVoting = async (
  userCountryName: string,
  targetCountryName: string,
  countries: Array<{ id: number; name: string; iso: string; continent: string }> 
): Promise<KeamananVotingStats> => {
  return calculateResolusiVoting(userCountryName, targetCountryName, countries as any);
};
