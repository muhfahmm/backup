import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: '127.0.0.1', // Force IPv4
  database: process.env.DB_NAME || 'db_president_simulator',
  password: process.env.DB_PASSWORD || 'fahiimsql123_',
  port: Number(process.env.DB_PORT) || 5432,
  connectionTimeoutMillis: 5000,
  idleTimeoutMillis: 30000,
  max: 20, // Max clients in the pool
});

// Pool error handling - VERY IMPORTANT to prevent process crashes
pool.on('error', (err) => {
  console.error('[DB Pool] Unexpected error on idle client', err.message);
});

export default pool;
