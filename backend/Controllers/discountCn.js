import asyncHandler from 'express-async-handler'
export const create = asyncHandler((req,res,next)=>{
    const {code}=req.body
    res.status(200).json({
        success:true,
        data: 
        message: 'Discount code created successfully'                      


    })
})
export const getAll = asyncHandler((req,res,next)=>{})
export const checkDiscount = asyncHandler(async(req,res,next)=>{
    

})




export const update = asyncHandler((req,res,next)=>{})
export const remove = asyncHandler((req,res,next)=>{})