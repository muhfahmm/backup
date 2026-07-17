const http = require('http');

const req = http.get('http://localhost:3000/api/country-data?all=true', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    try {
      const arr = JSON.parse(data);
      const tu = arr.find((x) => {
        const name = String(x.name_id || x.nama_negara || x.country || x.__fileName || '').toLowerCase();
        return name.includes('tuvalu') || String(x.__fileName || '').toLowerCase().includes('tuvalu');
      });
      if (!tu) {
        console.log('Tuvalu not found in payload');
        return;
      }
      console.log('FOUND TUVALU');
      console.log('file:', tu.__fileName);
      console.log('emas:', tu.emas);
      console.log('batu_bara:', tu.batu_bara);
      console.log('uranium:', tu.uranium);
      console.log('keys:', Object.keys(tu).filter((k) => ['emas','batu_bara','uranium','nikel','litium'].includes(k)).join(', '));
    } catch (e) {
      console.error('PARSE ERROR', e.message);
      console.log(data.slice(0, 2000));
    }
  });
});
req.on('error', (e) => console.error('REQ ERROR', e.message));
