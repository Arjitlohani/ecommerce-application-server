import express from 'express';
import { orderPostRequest } from '../request/order.js';
import { validator } from '../middlewares/validator.js';
import { requireAuth } from '../middlewares/requireAuth.js';
import { createOrderController, getAllOrdersController, getMyAllOrdersController, getOrderDetailsController, updateOrderStatusController } from '../controllers/orderController.js';
import { isAdmin } from '../middlewares/isAdmin.js';

const orderRoutes = express.Router();

orderRoutes.post('/create', orderPostRequest,validator,requireAuth,createOrderController)
orderRoutes.get('/getAll',requireAuth,isAdmin,getAllOrdersController)
orderRoutes.get('/:id',requireAuth,isAdmin,getOrderDetailsController)
orderRoutes.get('',requireAuth,getMyAllOrdersController)
orderRoutes.put('/:id',requireAuth,isAdmin,updateOrderStatusController)

export default orderRoutes;