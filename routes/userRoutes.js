import express from 'express'
import { changePasswordController, forgotPassword, getAdminUserInfo, getLoggedUser, loginUserController, registerUserController, resetPassword, updateUserProfile } from '../controllers/userController.js'
import { forgotPasswordRequest, resetPasswordRequest, userChangePasswordRequest, userLoginRequest, userProfileUpdateRequest, userRegistrationRequest } from '../request/user.js'
import {validator} from '../middlewares/validator.js'
import { requireAuth } from '../middlewares/requireAuth.js'
import { isAdmin } from '../middlewares/isAdmin.js'

const userRoutes = express.Router()

userRoutes.post('/register', userRegistrationRequest, validator, registerUserController)
userRoutes.post('/login', userLoginRequest, validator, loginUserController)
userRoutes.get('/me', requireAuth, getLoggedUser)
userRoutes.get('/adminInfo', requireAuth, isAdmin, getAdminUserInfo)
userRoutes.post('/forgot-password', forgotPasswordRequest, validator, forgotPassword)
userRoutes.post('/reset-password', resetPasswordRequest, validator, resetPassword)
userRoutes.put('/profile',userProfileUpdateRequest,validator,requireAuth,updateUserProfile)
userRoutes.put('/change-password',userChangePasswordRequest,validator,requireAuth,changePasswordController)

export default userRoutes