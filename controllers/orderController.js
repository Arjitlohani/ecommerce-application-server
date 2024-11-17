import orderModel from "../models/orderModel.js"


export const createOrderController = async (req, res) => {

    try {
        const {products,customer,totalAmount} = req.body
        const order = await new orderModel({
            products,
            customer,
            totalAmount
        }).save()
        res.status(201).send({
            success: true,
            message: "Order created successfully",
            order
        })
        
    } catch (error) 
    {
        res.status(500).send({
            success: false,
            message: "Something went wrong--Create order",
            error
        })
        
    }

}

export const getAllOrdersController = async (req,res)=>{
    try {
        const allOrder = await orderModel.find({})
        .populate('products','name').populate('customer','name')
        .sort({createdAt: -1})
        res.status(200).send({
            succes: true,
            message: "All orders fetched successfully",
            totalOrder: allOrder.length,
            allOrder
        })
        
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Something went wrong while fetching all orders",
            error
        })
        
    }
}

export const getOrderDetailsController = async (req,res)=>{
    try {
        const {id} = req.params
        const order = await orderModel.findById(id).populate({path: 'products', select: '-photo'})
        .populate({path:'customer', select: '-password'}).sort({createdAt: -1})
        res.status(200).send({
            success: true,
            message: "Order details fetched successfully",
            order
        })
        
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Something went wrong while fetching order details",
            error
        })
        
    }
}

export const getMyAllOrdersController = async (req,res)=>{
    try {
       
        const myOrder = await orderModel.find({customer: req.user._id }).populate({path: 'products', select: '-photo'})
        .populate({path:'customer', select: '-password'}).sort({createdAt: -1})

        res.status(200).send({
            success: true,
            message: "Your orders fetched successfully",
            totalOrder: myOrder.length,
            myOrder
        })
        
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Something went wrong while fetching your orders",
            error
        })
        
    }

}

export const updateOrderStatusController = async (req,res)=>{

    try {
        const {orderId} = req.params
       const {status} = req.body
        const  order = await orderModel.findByIdAndUpdate(orderId, {status}, {new: true})
        res.status(200).send({
            success: true,
            message: "Order status updated successfully",
            order
        })
        
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Something went wrong while updating order status",
            error
        })
        
    }

}