const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'db_president_simulator',
  password: 'fahiimsql123_',
  port: 5432,
  connectionTimeoutMillis: 5000,
});

async function test() {
  console.log('Testing DB connection...');
  try {
    const start = Date.now();
    const res = await pool.query('SELECT count(*) FROM "1_nama_negara"');
    console.log(`Success! Found ${res.rows[0].count} countries.`);
    console.log(`Time taken: ${Date.now() - start}ms`);
  } catch (err) {
    console.error('DB Connection Failed:', err.message);
  } finally {
    await pool.end();
  }
}

test();
