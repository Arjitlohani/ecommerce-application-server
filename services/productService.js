import productModels from "../models/productModels"


export const createProduct = async (fields,slug)=>{
    const product = await new productModels({...fields, slug}).save()
    return product
}