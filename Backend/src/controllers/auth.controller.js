import userModel from "../models/user.model.js";
import jwt from 'jsonwebtoken'



export const googleAuthController = async (req, res) => {
    try {
        const { name, email } = req.body
        const isUserAlreadyExists = await userModel.findOne({ email })
        if (isUserAlreadyExists) {
            return res.status(400).json({ 
                message:"user already exists",
             })
        }

        const user=await userModel.create({
            name,email
        })

        const token =jwt.sign({id:user._id},process.env.JWT_SECRET_KEY,{expiresIn:'7d'})
        res.cookie('token',token,{
            httpOnly:true,
            secure:false,
            sameSite:'strict',
            maxAge:7*24*60*60*1000
        })

        res.status(200).json({
            message:"User Registered successfully",
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                credits:user.credits
            }
        })
    } catch (error) {
        console.log(error)
       return res.status(500).json({
            message:`Internal Server Error: ${error}`
        })
    }
}

export const logoutController=async(req,res)=>{
    try {
       await res.clearCookie('token')
       return res.status(200).json({
            message:"Logged out successfully"
        })
    } catch (error) {
        console.log(error)
       return res.status(500).json({
            message:`Internal Server Error: ${error}`
        })
    }   
}