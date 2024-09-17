import express from 'express';
import userRouters from './routes/userRoutes.js';
import morgan from 'morgan';
import cors from 'cors';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
const app = express();
app.use(express.json());
app.use(cors())
app.use(morgan('dev'));
app.use('/api/v1/auth', userRouters);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);

export default app;