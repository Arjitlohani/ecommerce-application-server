import slugify from 'slugify'
import categoryModels from '../models/categoryModels.js'
import { getCategoryById, saveCategory, updateCategoryService, getCategoryBySlug as getCategoryBySlugServiec, deleteCategoryById } from '../services/catagoryServices.js'

export const createCategory = async (req, res) => {

    try {
        const {name}= req.body
        const existingCategory = await categoryModels.findOne({name})
        if (existingCategory) {
            return res.status(409).send({
                success: false,
                message: 'Category already exists'
            })

        }
        const slug = slugify(name)
        const category = await saveCategory(name, slug)
        res.status(201).send({
            success: true,
            message:"category created successfully",
            category
        })
        
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Category creation failed!',
            error
        })
    }

}

export const getCategory = async (req, res) => {

    try {
        const {id}= req.params
        const category = await getCategoryById(id)
        if (!category) {
            return res.status(404).send({
                success: false,
                message: 'Category not found'
            })
        }
        res.status(200).send({
            success: true,
            message: "Category found",
            category
        })
        
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Something went wrong !!!- get category',
            error
        })
        
    }

}

export const getCategoryBySlug = async (req, res) => {
    try {
        const {slug}=req.params
        const category = await getCategoryBySlugServiec(slug)
        if (!category){
        return res.status(404).send({
            success:false,
            message:'Category with provided id not found',

        })}

        res.status(200).send({
            success: true,
            message: 'Category found',
            category
        })

        
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Something went wrong !!!-get category by slug',
            error
        })
    }

}

export const getAllCategories = async (req, res) => {


    try {
        const categories = await categoryModels.find()
        res.status(200).send({
            success: true, 
            categories
        })
  
    } catch (error) {

        res.status(500).send({
            success: false,
            message: 'Something went wrong !!!-All category',
            error
        })
        
    }

}

export const updateCategory = async (req, res) => {

    try {
        const {id}= req.params
        const {name}= req.body
        const category = await getCategoryById(id)
        if (!category){
            return res.status(400).send({
                success: false,
                message: 'Category not found !!!'
            })
        }
        const slug = slugify(name)
        const updatedCategory = await updateCategoryService(id, {name, slug})
        res.status(200).send({
            success: true,
            message: 'Category updated successfully',
            updatedCategory
        })
        
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Something went wrong !!!-update category',
            error
        })
        
    }

}

export const deleteCategory = async (req, res)=>{
    try {
        const {id}=req.params
        const category = await getCategoryById(id)
        if (!category){
            return res.status(404).send({
                success: false,
                message: 'Category not found'
            })
        }
        await  deleteCategoryById(id)
        res.status(200).send({
            success: true,
            message: 'Category deleted successfully'
        })
        
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Something went wrong !!!-update category',
            error
        })
        
    }
}