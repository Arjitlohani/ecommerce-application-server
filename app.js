import express from 'express';
import userRouters from './routes/userRoutes.js';
import morgan from 'morgan';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors())
app.use(morgan('dev'));
app.use('/api/v1/auth', userRouters);

export default app;