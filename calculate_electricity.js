function calcBalance(coal, gas, pop) {
  const prod = (coal * 5000) + (gas * 3000);
  const cons = (prod * 0.7) + (pop / 50000);
  return prod - cons;
}

const countries = [
  {name: 'Malawi', pop: 19129952},
  {name: 'Tanzania', pop: 59734218},
  {name: 'Bangladesh', pop: 168065920},
  {name: 'India', pop: 1417173173},
  {name: 'Kazakhstan', pop: 19606633},
  {name: 'Syria', pop: 21898440},
  {name: 'Thailand', pop: 71801279},
  {name: 'England', pop: 56550138},
  {name: 'France', pop: 67970561},
  {name: 'Brazil', pop: 215313498},
  {name: 'Chile', pop: 19603733}
];

console.log('\nELECTRICITY BALANCE CALCULATIONS');
console.log('='.repeat(70));

const results = [];

countries.forEach(c => {
  let best = null;
  let bestCount = 999;
  
  // Standard search range
  for (let coal = 0; coal <= 30; coal++) {
    for (let gas = 0; gas <= 20; gas++) {
      const balance = calcBalance(coal, gas, c.pop);
      if (balance >= 500 && balance <= 1000) {
        if (coal + gas < bestCount) {
          best = {coal, gas, balance};
          bestCount = coal + gas;
        }
      }
    }
  }
  
  // If no solution in standard range, expand search
  if (!best) {
    for (let coal = 0; coal <= 50; coal++) {
      for (let gas = 0; gas <= 50; gas++) {
        const balance = calcBalance(coal, gas, c.pop);
        if (balance >= 500 && balance <= 1000) {
          if (!best || coal + gas < best.total) {
            best = {coal, gas, balance, total: coal + gas};
          }
        }
      }
    }
  }
  
  if (best) {
    const display = `${c.name.padEnd(15)}: ${best.coal} ${best.gas}  (Balance: ${best.balance.toFixed(2)} MW)`;
    console.log(display);
    results.push({name: c.name, coal: best.coal, gas: best.gas, balance: best.balance});
  } else {
    console.log(`${c.name.padEnd(15)}: NO SOLUTION FOUND`);
  }
});

console.log('\n' + '='.repeat(70));
console.log('RESULTS (coal gas):');
console.log('='.repeat(70));

results.forEach(r => {
  console.log(`${r.name}: ${r.coal} ${r.gas}`);
});
