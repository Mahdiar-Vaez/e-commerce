import asyncHandler from 'express-async-handler'
import Variant from '../Models/VariantMd.js'
import ApiFeatures, { HandleERROR } from 'vanta-api'
export const create = asyncHandler(async(req,res,next)=>{
    if (!req.body || (Array.isArray(req.body) && req.body.length === 0)) {
        return next(new HandleERROR('مقداری برای ویژگی ارسال نشده', 400));
      }
        const variants=await Variant.create(req.body)
        if(variants)
            return res.status(200).json({
        success:true,
        message:'ویژگی محصول با موفقیت اضافه شد',
        data:variants
        })
        else
        return next(new HandleERROR('مشکلی به وجود آمده',400))
})
export const getAll = asyncHandler(async(req,res,next)=>{
    const features=new ApiFeatures(Variant,req.query).filter().sort().paginate().limitFields()
   const result=await features.execute()
   if(result.count>0)
    return res.status(200).json({
        ...result,
        message:'ویژگی ها با موفقیت پیدا شدن'
    })
   else
   return next(new HandleERROR('ویژگی وجود ندارد',404))
})
export const getOne = asyncHandler(async(req,res,next)=>{
    const {id}=req.params
    const variant=await Variant.findById(id)
    if(variant)
        return res.status(200).json({
            success:true,
            data:variant,
            message:'ویژگی ها با موفقیت پیدا شدن'
        })
        else
        return next(new HandleERROR('ویژگی وجود ندارد',404))

})
export const update = asyncHandler(async(req,res,next)=>{
    const {id}=req.params
    if (!req.body || (Array.isArray(req.body) && req.body.length === 0)) {
        return next(new HandleERROR('مقداری برای ویژگی ارسال نشده', 400));
      }
    const variant=await Variant.findByIdAndUpdate(id,req.body,{new:true,runValidators:true})
    if(variant)
        return res.status(200).json({
            success:true,
            data:variant,
            message:'ویژگی ها با موفقیت بروزرسانی شدن'
        })
        else
        return next(new HandleERROR('ویژگی وجود ندارد',404))

})
export const remove = asyncHandler(async(req,res,next)=>{
    const {id}=req.params
    const variant=await Variant.findByIdAndDelete(id)
    if(variant)
        return res.status(200).json({
            success:true,
            data:variant,
            message:'ویژگی ها با موفقیت حذف شدن'
        })
        else
        return next(new HandleERROR('ویژگی حذف نشد',404))

})
