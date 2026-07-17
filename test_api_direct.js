const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/country-data?path=oceania/193_tuvalu.ts',
  method: 'GET',
};

console.log('Calling:', 'http://localhost:3000' + options.path);

const req = http.request(options, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      console.log('\n✓ API Response received');
      console.log('Keys in response:', Object.keys(json).sort());
      
      console.log('\nExtraction fields:');
      console.log('  emas:', json.emas);
      console.log('  uranium:', json.uranium);
      console.log('  batu_bara:', json.batu_bara);
      console.log('  bangunan_emas:', json.bangunan_emas);
      
      console.log('\nAll fields with non-zero values:');
      Object.entries(json)
        .filter(([k, v]) => typeof v === 'number' && v > 0)
        .forEach(([k, v]) => console.log('  ' + k + ':', v));
    } catch (e) {
      console.error('✗ Parse error:', e.message);
      console.log('Raw response:', data.substring(0, 500));
    }
  });
});

req.on('error', (e) => {
  console.error('Request error:', e);
});

req.end();
