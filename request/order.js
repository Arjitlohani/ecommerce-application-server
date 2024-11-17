import { check } from "express-validator";


export const orderPostRequest = [
    check('products').notEmpty().withMessage("Products is required")
    .isArray().withMessage("Valid card item is required")
    .isLength({min:1}).withMessage("At least one product is required")
    .isLength({max:100}).withMessage("Cart can have only 100 product items"),

    check('customer').notEmpty().withMessage("Customer is required")
    .isMongoId().withMessage("Valid customer id is required"),

    check('totalAmount').notEmpty().withMessage("Total amount is required")
    .isFloat({min:1,max:5000000})
    .withMessage("Total amount must be a number and greater then 1 and less then 5,000,000"),


]