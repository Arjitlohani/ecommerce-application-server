import express from 'express';
import { loginUserController, registerUserController } from '../controllers/userControllers.js';
import { userLoginRequest, userRegistrationRequest } from '../request/user.js';
import { validator } from '../middlewares/validator.js';

const userRouters = express.Router();

userRouters.post('/register', userRegistrationRequest,validator, registerUserController)
userRouters.post('/login',userLoginRequest,validator,loginUserController)

export default userRouters;
