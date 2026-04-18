import * as dotenv from 'dotenv';
import express, { Request, Response } from 'express';

dotenv.config();

const app = express();
const port: number = Number(process.env.PORT) || 4000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the President Simulator Gateway' });
});

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Gateway listening at http://localhost:${port}`);
});
