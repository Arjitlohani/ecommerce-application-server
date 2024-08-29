import { environmentConfig } from "../config/environment.js";
import userModel from "../models/userModel.js";
import { createUser } from "../services/userServiece.js";
import { comparePassword, hashPassword } from "../utils/authHelpers.js";
import JWT from 'jsonwebtoken';

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
export const loginUserController= async (req,res)=>{
    try{
        const {email,password}= req.body;
        const doesUserExist = await userModel.findOne({email:email});
        console.log(doesUserExist, 'doesUserExist<><><>');
        if(!doesUserExist){
            return res.status(400).send({
                success:false,
                message:'User does not exist'
            })

        }
        const isValidPassword = await comparePassword(password,doesUserExist.password);
        if(!isValidPassword){
            return res.status(400).send({
                success:false,
                message:'Invalid password'
            })
        }

        const token = JWT.sign({_id:doesUserExist._id}, environmentConfig.jwtsecret,{expiresIn:'1h'})
        console.log(token, 'token<><><>');
        
    }
    catch(error){
        res.status(500).send({
            success:false,
            message:'Login failed',
            error
        })

    }
}