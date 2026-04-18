const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../apps/gateway/.env') });

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'db_president_simulator',
  password: process.env.DB_PASSWORD || 'fahiimsql123_',
  port: Number(process.env.DB_PORT) || 5432,
});

async function sync() {
  const sqlPath = path.join(__dirname, '../apps/database/init_nations.sql');
  const sql = fs.readFileSync(sqlPath, 'utf8');

  try {
    console.log('Connecting to database...');
    await pool.query(sql);
    console.log('Successfully synchronized 207 nations with ISO codes!');
  } catch (err) {
    console.error('Failed to sync database:', err.message);
  } finally {
    await pool.end();
  }
}

sync();
