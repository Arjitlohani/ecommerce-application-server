import mongoose from 'mongoose'

const categoryModels = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    // slug is a unique string that is used to identify a category used for SEO purpose
    slug:{
        type: String,
        required: true,
        lowercase: true,
    }
}, {timestamps: true})

export default mongoose.model('Category', categoryModels)