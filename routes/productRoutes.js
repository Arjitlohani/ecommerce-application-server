import express from 'express'
import { productByCategoryGetRequest, productByPageRequest, ProductCategoryGetBySlug, productCreateRequest, productDeleteRequest, productPhotoGetById, productSearchGetRequest, productUpdateRequest} from '../request/products.js'
import {validator} from '../middlewares/validator.js'
import { requireAuth } from '../middlewares/requireAuth.js'
import { isAdmin } from '../middlewares/isAdmin.js'

import { createProductController, getAllProductsController, getOneProductController, getProductByCategory, getProductByPageController, getProductCountController, getProductPhotoController, productDeleteController, productUpdateController, searchProductController } from '../controllers/productController.js'
import { formidableParser } from '../middlewares/formidableParser.js'


const productRoutes = express.Router()

productRoutes.post('/create', formidableParser,productCreateRequest,validator,requireAuth,isAdmin,createProductController)
productRoutes.get('',requireAuth,getAllProductsController)
productRoutes.get('/:slug', ProductCategoryGetBySlug,validator,requireAuth,getOneProductController)
productRoutes.get('/photo/:id', productPhotoGetById,validator,requireAuth,getProductPhotoController)
productRoutes.delete('/:id',productDeleteRequest,requireAuth,isAdmin,productDeleteController)
productRoutes.put('/:slug',formidableParser,productUpdateRequest,validator,requireAuth,isAdmin,productUpdateController)
productRoutes.get('/total/count',requireAuth,getProductCountController)
productRoutes.get('/pages/:page',productByPageRequest,validator,requireAuth,getProductByPageController)
productRoutes.get('/category/:slug',productByCategoryGetRequest,validator,requireAuth,getProductByCategory)
productRoutes.get('/products/search',productSearchGetRequest,validator,requireAuth,searchProductController)




export default productRoutes