import express from 'express';
import { registerUserController } from '../controllers/userControllers.js';

const userRouters = express.Router();

userRouters.post('/register', registerUserController)

export default userRouters;
