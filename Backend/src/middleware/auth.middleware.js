import jwt from 'jsonwebtoken'



const authUser=async (req,res,next)=>{
   try {
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({
            message:"Unauthorized: No token provided"
        })
    }

    const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)

    if(!decoded){
        return res.status(401).json({
            message:"Unauthorized: Invalid token"
        })
    }
    req.userId=decoded.id
    next()
   } catch (error) {
    console.log(error)
    return res.status(401).json({
        message:"Unauthorized: Invalid token"
    })
   }

}

export default authUser