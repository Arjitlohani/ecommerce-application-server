import express from 'express'
import {validator} from '../middlewares/validator.js'
import { requireAuth } from '../middlewares/requireAuth.js'
import { isAdmin } from '../middlewares/isAdmin.js'
import { categoryCreateRequest, categoryGetRequest, categoryUpdateRequest } from '../request/catagory.js'
import { createCategory, getAllCategories, getCategory, updateCategory } from '../controllers/categoryController.js'


const categoryRoutes = express.Router()

categoryRoutes.post('/create',categoryCreateRequest,validator,requireAuth,isAdmin,createCategory)
categoryRoutes.get('/:id',categoryGetRequest,validator,requireAuth,getCategory)
categoryRoutes.get('',requireAuth,getAllCategories)
categoryRoutes.put('/:id',categoryUpdateRequest,validator,requireAuth,isAdmin,updateCategory)

export default categoryRoutes