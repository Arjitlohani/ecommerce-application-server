import categoryModels from '../models/categoryModels.js'

export const saveCategory = async (name,slug)=>{
    const category = await new categoryModels({
        name,
        slug
    }).save()
    return category
}

export const getCategoryById = async (id)=>{
    const category = await categoryModels.findById(id)
    return category

}
export const getCategoryBySlug = async (slug)=>{
    const category = await categoryModels.findOne({slug})
    return category

}

export const updateCategoryService = async (id, updatedData)=>{

    const newCategory = await categoryModels.findByIdAndUpdate(id, updatedData,{new:true})
    return newCategory
}
export const deleteCategoryById = async (id)=>{
    const category = await categoryModels.findByIdAndDelete(id)
    
}