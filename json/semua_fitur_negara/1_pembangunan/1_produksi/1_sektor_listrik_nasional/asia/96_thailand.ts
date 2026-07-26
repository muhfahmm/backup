// @ts-nocheck
// Current Balance: 1083 MW (Target: 500-1000 MW) ✗ OUT OF RANGE (41 MW over)
// NOTE: Cannot achieve 500-1000 MW target. Options:
// - [0 coal, 2 gas] = 483 MW balance (92 MW too low)
// - [1 coal, 1 gas] = 1083 MW balance (83 MW too high)
// Current config chosen due to larger production capacity
const thailand_listrik = {
  pembangkit_listrik_tenaga_nuklir: 0,
  pembangkit_listrik_tenaga_air: 0,
  pembangkit_listrik_tenaga_surya: 0,
  pembangkit_listrik_tenaga_uap: 1,
  pembangkit_listrik_tenaga_gas: 1,
  pembangkit_listrik_tenaga_angin: 0
};
