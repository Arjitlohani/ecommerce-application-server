import { check,param,query } from "express-validator";

export const productCreateRequest = [
    check('name').trim().notEmpty().withMessage("Name is required")
    .isLength({min:2}).withMessage("Product name must be at least 2  characters")
    .isLength({max:32}).withMessage("Product name must be less then  32 characters"),

    check('description').trim().notEmpty().withMessage("Description is required")
    .isLength({min:2}).withMessage("Description must be at least 2  characters")
    .isLength({max:1000}).withMessage("Description can not exceed 1000  characters"),

    check('price').trim().notEmpty().withMessage("price is required").isFloat({min:1,max:100000000})
    .withMessage("Price must be a number and greater then 1 and less then 100000000"),

    check('quantity').trim().notEmpty().withMessage("quantity is required").isInt({min:1,max:100000})
        .withMessage("Quantity must be a number and greater then 1 and less then 100000"),

    check('shipping').optional().isBoolean().withMessage("Shipping must be a boolean"),

    // check('rating'.trim().notEmpty().isNumeric({min:1,max:5})
    // .withMessage("Rating must be a number and greater then 1 and less then 5")),
    // check('category').trim().notEmpty().withMessage("Category is required")
    
]

export const ProductCategoryGetBySlug = [
    param('slug').trim().notEmpty().withMessage("Slug is required").isSlug().withMessage("Valid slug is required")

]

export const productPhotoGetById = [
    param('id').trim().notEmpty().withMessage("Id is required")
    .isMongoId().withMessage("Valid id is required")

]

export const productDeleteRequest= [
    param('id').trim().notEmpty().withMessage("Id is required")
    .isMongoId().withMessage("Valid id is required")

]


export const productUpdateRequest = [
    check('name').trim().notEmpty().withMessage("Name is required")
    .isLength({min:2}).withMessage("Product name must be at least 2  characters")
    .isLength({max:32}).withMessage("Product name must be less then  32 characters"),

    check('description').trim().notEmpty().withMessage("Description is required")
    .isLength({min:2}).withMessage("Description must be at least 2  characters")
    .isLength({max:1000}).withMessage("Description can not exceed 1000  characters"),

    check('price').trim().notEmpty().withMessage("price is required").isFloat({min:1,max:100000000})
    .withMessage("Price must be a number and greater then 1 and less then 100000000"),

    check('quantity').trim().notEmpty().withMessage("quantity is required").isInt({min:1,max:100000})
        .withMessage("Quantity must be a number and greater then 1 and less then 100000"),

    check('shipping').optional().isBoolean().withMessage("Shipping must be a boolean"),

  
    
]

export const productByPageRequest = [
    param('page').trim().notEmpty().withMessage("price is required").isFloat({min:1,max:100000000})
    .withMessage("page must be a number and greater then 1 and less then 100000000"),
]

export const productByCategoryGetRequest = [
    param('slug').trim().notEmpty().withMessage("Slug is required").isSlug().withMessage("Valid slug is required")

]

export const productSearchGetRequest = [
    query('keyword').trim().notEmpty().withMessage("Keyword is required")
    .isLength({min:2}).withMessage("Keyword must be at least 2  characters")
    .isLength({max:50}).withMessage("Keyword can not exceed 50  characters"),

]