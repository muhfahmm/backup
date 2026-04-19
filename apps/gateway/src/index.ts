import * as dotenv from 'dotenv';
import express, { Request, Response } from 'express';

import cors from 'cors';
import pool from './db';

dotenv.config();

const app = express();
const port: number = Number(process.env.PORT) || 4000;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the President Simulator Gateway' });
});

app.get('/api/countries', async (req: Request, res: Response) => {
  const requestId = Math.random().toString(36).substring(7);
  try {
    console.log(`[${requestId}] [DB] Fetching countries...`);
    const startTime = Date.now();
    
    // Explicitly set a timeout for this query to avoid hanging the entire process
    const result = await pool.query('SELECT id, nama_negara, ibukota, jumlah_penduduk, anggaran, latitude, longitude, kode_negara, agama, ideologi FROM "1_nama_negara" ORDER BY nama_negara ASC');
    
    const duration = Date.now() - startTime;
    console.log(`[${requestId}] [DB] Query success: ${result.rows.length} rows returned (${duration}ms)`);
    res.json(result.rows);
  } catch (err: any) {
    console.error(`[${requestId}] DATABASE CONNECTION ERROR:`, err.message);
    res.status(500).json({ 
      error: 'Database connection failed', 
      details: err.message,
      requestId 
    });
  }
});

app.get('/api/resources/:countryName', async (req: Request, res: Response) => {
  const { countryName } = req.params;
  try {
    console.log(`[DB] Starting query: SELECT resources for ${countryName}...`);
    const result = await pool.query('SELECT * FROM "2_sda_negara" WHERE LOWER(nama_negara) = LOWER($1)', [countryName]);
    console.log(`[DB] Query success: ${result.rows.length} rows returned`);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Resources not found for this country' });
    }
    res.json(result.rows[0]);
  } catch (err: any) {
    console.error('DATABASE ERROR:', err.message);
    res.status(500).json({ error: 'Failed to fetch resource data' });
  }
});

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.use((req, res) => {
  console.warn(`[404] UNMATCHED ROUTE: ${req.method} ${req.url}`);
  res.status(404).json({ 
    error: 'Route not found', 
    path: req.url,
    method: req.method 
  });
});

app.listen(port, '127.0.0.1', () => {
  console.log(`Gateway listening at http://127.0.0.1:${port}`);
});
