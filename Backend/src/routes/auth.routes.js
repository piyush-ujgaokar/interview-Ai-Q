import express from 'express'
import { googleAuthController, logoutController } from '../controllers/auth.controller.js'


const authRouter=express.Router()


authRouter.post('/google',googleAuthController)
authRouter.get('/logout',logoutController)

export default authRouter