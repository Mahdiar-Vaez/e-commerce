import asyncHandler from 'express-async-handler'
import Product from '../Models/ProductMd.js';
import ApiFeatures, { HandleERROR } from 'vanta-api';
import  jwt from 'jsonwebtoken';
import User from '../Models/UserMd.js';
export const create = asyncHandler(async(req,res,next)=>{
    const newProduct=await Product.create(req.body)
   return res.status(201).json({
        success: true,
        message:'محصول با موفقیت ساخته شد',
        product: newProduct
    });
    


})
  
export const getAll = asyncHandler(async (req, res, next) => { 
  
   
    let queryStr = req.query;
    if(req?.headers?.authorization.split(" ")[1]){
        const {id,role} = jwt.verify(req?.headers?.authorization.split(" ")[1],process.env.SECRET_KEY)
        if(role!='admin'&& role!='superAdmin'){
            const filters={
                isActive:true
            }
            queryStr.filters=JSON.stringify(filters)
        }
    }
    const features = new ApiFeatures(Product, queryStr)
      .filter()
      .sort()
      .limitFields()
      .paginate()
      .populate(['categoriesId', 'brandId', 'defaultVariant']);
    
    const result = await features.execute();
    
    if (result.count > 0) {
      return res.status(200).json({
        ...result,
        message: "با موفقیت محصولات دریافت شدند",
      });
    } else {
      return next(new HandleERROR("هیچ محصولی یافت نشد", 404));
    }
  });
export const getOne = asyncHandler(async(req,res,next)=>{
    const {id}=req.params
    let favoriteProduct=false
    const product=await Product.findById(id)

    if(!product ){
        return new HandleERROR('محصول با شناسه ذکر شده یافت نشد',400)
    }
    if(req?.headers?.authorization.split(" ")[1]){
        const {id:userId,role} = jwt.verify(req?.headers?.authorization.split(" ")[1],process.env.SECRET_KEY)
        if(role!='admin'&& role!='superAdmin' && !product.isActive){
            return new HandleERROR('محصول با شناسه ذکر شده یافت نشد',400)
        }    
        const user=await User.findById(userId)
        const isFavorite= user.favoriteProductIds.includes(id);
        if(isFavorite)
            favoriteProduct=true

    }
    
    

    return res.status(200).json({
        success: true,
        message: 'محصول با موفقیت دریافت شد',
        product,
        favoriteProduct
    });
})
export const update = asyncHandler(async(req,res,next)=>{
    const {id}=req.params
    const updatedPr=await Product.findByIdAndUpdate(id,req.body,{new:true,runValidators:true})
    return res.status(200).json({
        success: true,
        message: 'محصول با موفقیت بروز شد',
        updatedPr
    })
})
