import userModel from "../models/userModel.js";
import { createUser } from "../services/userServiece.js";
import { hashPassword } from "../utils/authHelpers.js";

export const registerUserController= async (req,res)=>{
    const {name,email,password,phone,address}=req.body;
    console.log(req.body);

try{
    const existingUser= await userModel.findOne({email:email});
    console.log(existingUser, 'existingUser<><><>');
    if(existingUser){
        return res.status(400).send({
            success:false,
            message:'User already exists'
        })
    }
        const hashedPassword= await hashPassword(password);
        console.log(hashedPassword, 'hashedPassword<><><>');
        const newUser = await createUser(name,email,address,phone,hashedPassword);
        console.log(newUser, 'newUser<><><>');
        res.status(201).send({
            success:true,
            message:'Registeration successful',
            data:newUser
    })

}
catch(err){
    res.status(500).send({
        success:false,
        message:'Registeration failed',
        err
    })
}
}