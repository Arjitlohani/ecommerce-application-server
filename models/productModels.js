import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        maxLength: 32
    },
    slug:{
        type: String,
        required: true,
        lowercase: true,
    },
    description:{
        type: String,
        required: true,
        trim: true,
        maxLength: 1000

    },
    price:{
        type: Number,
        trim: true,
        required: true,
        min: 1
    },
    quantity:{
        type: Number,
        trim:true,
        required: true,
        max:100000,
        min:1
    },
    category:{
        type : Schema.Types.ObjectId,
        trim: true,
        required: true,
        ref:"Category"
    },
    shipping:{
        type: Boolean,
        
    },
    photo:{
        data: Buffer,
        contentType: String,
        
    }
    

}, {timestamps: true})

export default mongoose.model('products', productSchema)