import asyncHandler from 'express-async-handler'
import User from '../Models/UserMd'
import { sendAuthCode } from '../utils/smsHandler'
import { HandleERROR } from 'vanta-api'
export const auth = asyncHandler(async(req,res,next)=>{
    const {phoneNumber=null}=req.body
    if(!phoneNumber)
        return next(new HandleERROR('شماره تلفن الزامی است',400))
    const user=await User.findOne({ phoneNumber })
    const passwordExist=user?.password ?true :false
    if(!passwordExist){
        const smsResult=await sendAuthCode(phoneNumber)
        if(!smsResult.success)
            return (next(new HandleERROR('مشکل در ارسال پیامک ',400)))
    }
    return res.status(200).json({ 
        success:true,
        message:`${!passwordExist ?" ورود با رمز عبور ":"ورود با ارسال کد"}`,
        data:{
            newAccount:!user._id,
            passwordExist:passwordExist,
            phoneNumber
        }
     })
})
export const checkOtp = asyncHandler((req,res,next)=>{})
export const checkPassword = asyncHandler((req,res,next)=>{})
export const forgetPass = asyncHandler((req,res,next)=>{})
export const resendPass = asyncHandler((req,res,next)=>{}) 