function calcBalance(coal, gas, pop) {
  const prod = (coal * 5000) + (gas * 3000);
  const cons = (prod * 0.7) + (pop / 50000);
  return prod - cons;
}

const problematic = [
  {name: 'Syria', pop: 21898440},
  {name: 'France', pop: 67970561}
];

console.log('\nDETAILED ANALYSIS OF PROBLEMATIC COUNTRIES\n');

problematic.forEach(c => {
  console.log(`${c.name} (Population: ${c.pop.toLocaleString()})`);
  console.log('='.repeat(70));
  
  // Check some specific combinations
  const testCombos = [
    {coal: 0, gas: 0},
    {coal: 0, gas: 1},
    {coal: 0, gas: 2},
    {coal: 1, gas: 0},
    {coal: 1, gas: 1},
    {coal: 1, gas: 2},
    {coal: 2, gas: 0},
    {coal: 2, gas: 1}
  ];
  
  console.log('Sample combinations:');
  testCombos.forEach(combo => {
    const balance = calcBalance(combo.coal, combo.gas, c.pop);
    const status = balance >= 500 && balance <= 1000 ? '✓ VALID' : (balance < 500 ? '← TOO LOW' : '→ TOO HIGH');
    console.log(`  Coal: ${combo.coal}, Gas: ${combo.gas} => ${balance.toFixed(2)} MW ${status}`);
  });
  
  // Find the gap
  console.log('\nAnalysis:');
  const bal01 = calcBalance(0, 1, c.pop);
  const bal10 = calcBalance(1, 0, c.pop);
  
  console.log(`  0 coal + 1 gas = ${bal01.toFixed(2)} MW`);
  console.log(`  1 coal + 0 gas = ${bal10.toFixed(2)} MW`);
  
  if (bal01 > 1000 && bal10 < 500) {
    console.log(`  Problem: 1 gas plant gives ${bal01.toFixed(2)} MW (exceeds 1000)`);
    console.log(`           1 coal plant gives ${bal10.toFixed(2)} MW (below 500)`);
    console.log(`  Gap exists between 500-1000 range - NO SOLUTION POSSIBLE`);
  }
  
  console.log('\n');
});
