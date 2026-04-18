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
  const dbDir = path.join(__dirname, '../apps/database');
  const files = fs.readdirSync(dbDir)
    .filter(file => file.endsWith('.sql'))
    .sort(); // Sort to ensure predictable execution order

  try {
    console.log('Connecting to database...');
    
    for (const file of files) {
      console.log(`Executing ${file}...`);
      const sqlPath = path.join(dbDir, file);
      const sql = fs.readFileSync(sqlPath, 'utf8');
      await pool.query(sql);
    }
    
    console.log('Successfully synchronized all database files!');
  } catch (err) {
    console.error('Failed to sync database:', err.message);
  } finally {
    await pool.end();
  }
}

sync();
