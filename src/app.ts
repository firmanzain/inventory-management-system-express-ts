import express, { Application, Request, Response } from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

const app: Application = express();
const port: number = parseInt(process.env.PORT || '3000', 10);

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is your Express.js TypeScript server!!');
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
