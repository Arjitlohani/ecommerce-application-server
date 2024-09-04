import express from 'express';
import userRouters from './routes/userRoutes.js';
const app = express();
app.use(express.json());
app.use('/api/v1/auth', userRouters);

export default app;