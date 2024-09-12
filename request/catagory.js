import { check, param } from "express-validator";


export const categoryCreateRequest = [
    check('name').trim().notEmpty().withMessage("Valid name is required")
]

export const categoryGetRequest = [
    param('id').trim().notEmpty().withMessage("Valid id is required")
]

export const categoryUpdateRequest = [
    check('name').trim().notEmpty().withMessage("Valid name is required"),
    param('id').trim().notEmpty().withMessage("Valid id is required")

]