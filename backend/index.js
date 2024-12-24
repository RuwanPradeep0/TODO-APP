import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { conectDB } from './database/connectDB.js';
import authRoute from './routes/authRoute.js';
import taskRoute from './routes/taskRoute.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000', 
    credentials: true, 
  };
  
  app.use(cors(corsOptions));

app.use(cookieParser());
app.use(express.json());

conectDB();

app.use('/api/auth', authRoute);
app.use('/api/task', taskRoute);
app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(5000, () => {
  console.log('Server is up and running on port 5000');
});
