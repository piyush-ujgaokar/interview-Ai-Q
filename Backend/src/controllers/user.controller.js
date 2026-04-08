import userModel from "../models/user.model.js"


const currentUser=async (req,res)=>{
    try {
        const userId=req.userId 
        const user=await userModel.findById(userId)
        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        }
        res.status(200).json({
            message:"User fetched successfully",
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
            message:`Failed to get current user: ${error}`
        })
    }   
}

export default currentUser