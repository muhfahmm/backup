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

console.log('\n' + '='.repeat(70));
console.log('ELECTRICITY BALANCE - FINAL RESULTS');
console.log('='.repeat(70) + '\n');

countries.forEach(c => {
  let best = null;
  let bestCount = 999;
  
  // Standard search: try all combinations up to 50/50
  for (let coal = 0; coal <= 50; coal++) {
    for (let gas = 0; gas <= 50; gas++) {
      const balance = calcBalance(coal, gas, c.pop);
      if (balance >= 500 && balance <= 1000) {
        if (coal + gas < bestCount) {
          best = {coal, gas, balance};
          bestCount = coal + gas;
        }
      }
    }
  }
  
  // If no solution in target range, find closest to target
  if (!best) {
    let closest = null;
    let closestDist = Infinity;
    
    for (let coal = 0; coal <= 30; coal++) {
      for (let gas = 0; gas <= 20; gas++) {
        const balance = calcBalance(coal, gas, c.pop);
        // Find closest to 750 MW (middle of target range)
        const dist = Math.abs(balance - 750);
        if (dist < closestDist) {
          closest = {coal, gas, balance};
          closestDist = dist;
        }
      }
    }
    best = closest;
  }
  
  if (best) {
    const status = best.balance >= 500 && best.balance <= 1000 ? '' : ' [OUT OF RANGE]';
    console.log(`${c.name.padEnd(15)}: ${best.coal} ${best.gas}${status}`);
  }
});

console.log('\n' + '='.repeat(70));
console.log('ANSWER FORMAT (country: coal gas)');
console.log('='.repeat(70) + '\n');

const answers = [];
countries.forEach(c => {
  let best = null;
  let bestCount = 999;
  
  for (let coal = 0; coal <= 50; coal++) {
    for (let gas = 0; gas <= 50; gas++) {
      const balance = calcBalance(coal, gas, c.pop);
      if (balance >= 500 && balance <= 1000) {
        if (coal + gas < bestCount) {
          best = {coal, gas};
          bestCount = coal + gas;
        }
      }
    }
  }
  
  if (!best) {
    let closest = null;
    let closestDist = Infinity;
    
    for (let coal = 0; coal <= 30; coal++) {
      for (let gas = 0; gas <= 20; gas++) {
        const balance = calcBalance(coal, gas, c.pop);
        const dist = Math.abs(balance - 750);
        if (dist < closestDist) {
          closest = {coal, gas};
          closestDist = dist;
        }
      }
    }
    best = closest;
  }
  
  if (best) {
    answers.push(`${c.name}: ${best.coal} ${best.gas}`);
  }
});

answers.forEach(a => console.log(a));
