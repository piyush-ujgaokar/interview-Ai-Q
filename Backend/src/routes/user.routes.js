import express from 'express'
import  currentUser  from '../controllers/user.controller.js'
import authUser from '../middleware/auth.middleware.js'

const userRouter=express.Router()

userRouter.get('/current-user',authUser,currentUser)

export default userRouter