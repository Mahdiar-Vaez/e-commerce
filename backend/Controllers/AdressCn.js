import asyncHandler from "express-async-handler";
import Address from "../Models/AdressMd.js";
import ApiFeatures, { HandleERROR } from "vanta-api";
export const create = asyncHandler(async (req, res, next) => {
    if (!req.body || typeof req.body !== 'object') {
      return next(new HandleERROR("داده معتبر نیست", 400));
    }
  
    const address = await Address.create({ ...req.body, userId: req.userId });
  
    if (address) {
      return res.status(200).json({
        success: true,
        message: "آدرس با موفقیت اضافه شد",
        data: address,
      });
      
    } else {
      return next(new HandleERROR("مشکلی به وجود اومده", 400));
    }
  });
  
 export const getAll = asyncHandler(async (req, res, next) => { 
    let queryStr = { ...req.query };
  

    const features = new ApiFeatures(Address, queryStr)
      .filter()
      .sort()
      .limitFields()
      .paginate()
      .populate()
      .addManualFilters(
        req.role!='admin' && req.role!='superAdmin' ?
        {userId:req.userId} :
        null
      )
  
    const result = await features.execute();
  
    if (result.count > 0) {
      return res.status(200).json({
        ...result,
        message: "با موفقیت آدرس دریافت شد",
      });
    } else {
      return next(new HandleERROR("هیچ آدرسی یافت نشد", 404));
    }
  });
  

export const getOne = asyncHandler(async(req, res, next) => {
  const { id } = req.params;
  
  const address = await Address.findById(id);
  if (req.role !== "admin" && req.role !== "superAdmin" && address.userId!=req.userId) {
    return next(new HandleERROR("خطا در دسترسی", 401));


  }
    if (!address) {
    return next(new HandleERROR("آدرس یافت نشد", 404));
  }
  
  return res.status(200).json({
    success: true,
    message: "آدرس با موفقیت دریافت شد",
    data: address,
  });
});
export const update = asyncHandler(async(req, res, next) => {
  const { id } = req.params;
  const {userId=null,...others}=req.body
  const address = await Address.findById(id);
  if (req.role !== "admin" && req.role !== "superAdmin" && address.userId!=req.userId) {
    return next(new HandleERROR("خطا در دسترسی", 401));


  }
    const newAddress=await Address.findByIdAndUpdate(id,others,{ new: true ,runValidators:true})
  
  return res.status(200).json({
    success: true,
    message: "آدرس با موفقیت بروزرسانی شد",
    data: newAddress,
  });
  
  
});
export const remove = asyncHandler(async(req, res, next) => {
  const { id } = req.params;
  const address=await Address.findById(id)
  if (req.role !== "admin" && req.role !== "superAdmin" && address.userId!=req.userId) {
    return next(new HandleERROR("خطا در دسترسی", 401));

  }
  await Address.findByIdAndDelete(id)
  
  return res.status(200).json({
    success: true,
    message: "آدرس با موفقیت حذف شد",
  });
});
