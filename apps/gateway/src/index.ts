import * as dotenv from 'dotenv';
import express, { Request, Response } from 'express';

import cors from 'cors';
import pool from './db';

dotenv.config();

const app = express();
const port: number = Number(process.env.PORT) || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the President Simulator Gateway' });
});

app.get('/api/countries', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT id, nama_negara, ibukota, jumlah_penduduk, anggaran, latitude, longitude, kode_negara, agama, ideologi FROM "1_nama_negara" ORDER BY nama_negara ASC');
    res.json(result.rows);
  } catch (err: any) {
    console.error('DATABASE CONNECTION ERROR:', err.message);
    
    // Jika gagal, kirimkan pesan error ke frontend agar user tahu masalah kredensial
    res.status(500).json({ 
      error: 'Database connection failed', 
      message: err.message,
      hint: 'Please ensure PostgreSQL is running and credentials in apps/gateway/src/db.ts are correct.'
    });
  }
});

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Gateway listening at http://localhost:${port}`);
});
