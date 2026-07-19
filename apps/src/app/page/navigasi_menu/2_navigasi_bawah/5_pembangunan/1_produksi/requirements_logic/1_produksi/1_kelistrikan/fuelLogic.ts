export interface FuelRule {
  resourceKey: string;
  label: string;
  amount: number;
}

const KELISTRIKAN_FUEL_REQUIREMENTS: Record<string, FuelRule[]> = {
  pembangkit_listrik_tenaga_gas: [
    { resourceKey: 'gas_alam', label: 'gas alam', amount: 2 },
  ],
  pembangkit_listrik_tenaga_nuklir: [
    { resourceKey: 'uranium', label: 'uranium', amount: 1 },
  ],
  pembangkit_listrik_tenaga_uap: [
    { resourceKey: 'batu_bara', label: 'batu bara', amount: 50 },
    { resourceKey: 'minyak_bumi', label: 'minyak bumi', amount: 5 },
  ],
};

export function getKelistrikanFuelRequirements(buildingKey: string): FuelRule[] {
  return KELISTRIKAN_FUEL_REQUIREMENTS[buildingKey] || [];
}
