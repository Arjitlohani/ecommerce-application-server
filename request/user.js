import { check } from 'express-validator';
export const userRegistrationRequest = [
    check('name').trim().notEmpty().withMessage('Name is required'),
    check('email').trim().isEmail().withMessage('Email is required'),
    check('password').trim().isLength({ min: 6 }).withMessage('Password is required'),
    check('address').trim().notEmpty().withMessage('Address is required'),
    check('phone').trim().notEmpty().withMessage('Phone is required')

]

export const userLoginRequest = [
    check('email').trim().isEmail().withMessage('Email is required'),
    check('password').trim().isLength({ min: 6 }).withMessage('Password is required')
]