import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'db_president_simulator',
  password: process.env.DB_PASSWORD || 'fahiimsql123_',
  port: Number(process.env.DB_PORT) || 5432,
  connectionTimeoutMillis: 2000, // 2 seconds timeout
});

export default pool;
