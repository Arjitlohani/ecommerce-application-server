import { mongoose,Schema } from "mongoose";

const orderModel = new mongoose.Schema({
    products:[
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'products'
        }
    ],
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'user'

    },
    totalAmount:{
        type: Number,
        required: true,
        min: 1,
        max: 5000000
    },
    status:{
        type: String,
        trim: true,
        default: "onProcess",
        enum: ["onProcess", "rejected", "delivered","shipping"]
    }

}, {timestamps: true})


export default mongoose.model('order', orderModel)