import asyncHandler from 'express-async-handler'
import User from '../Models/UserMd'
import { sendAuthCode, verifyCode } from '../utils/smsHandler'
import { HandleERROR } from 'vanta-api'
import jwt from 'jsonwebtoken'


const generateToken=(model)=>{
    const token =jwt.sign({id:model._id,role:model.role },process.env.SECRET_KEY)
    if(token)
        return token
    else
    console.log('Token generation failed')
}
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
export const checkOtp = asyncHandler(async(req,res,next)=>{
    const {phoneNumber,code}=req.body
    if(!phoneNumber  || !code ){
        return next(new HandleERROR('  اطلاعات فرستاده شده اشتباه است',400))
    }    
    let user=await User.findOne({ phoneNumber })
    if(!user) {
        const result=await verifyCode(phoneNumber,code)
        if(!result){
            return next(new HandleERROR('کد تایید نادرست است',400))
        }
        user=await User.create({ phoneNumber })
        const token= generateToken(user)
        return res.status(201).json({
            success: true,
            message: 'کاربر جدید با موفقیت ایجاد شد',
            data: user
        })

    } else {
        const result=await verifyCode(phoneNumber,code)
        if(!result){
            return next(new HandleERROR('کد تایید نادرست است',400))
        }
        user=await User.findOne({ phoneNumber })
        const token=generateToken(user)
        return res.status(200).json({
            success: true,
            message: 'ورود با موفقیت انجام شد',
            data: user,
            token
        })


    }
})
export const checkPassword = asyncHandler((req,res,next)=>{})
export const forgetPass = asyncHandler((req,res,next)=>{})
export const resendPass = asyncHandler((req,res,next)=>{}) 