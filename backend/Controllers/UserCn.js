import asyncHandler from "express-async-handler";
import ApiFeatures, { HandleERROR } from "vanta-api";
import User from "../Models/UserMd.js";
export const getAll = asyncHandler(async (req, res, next) => {
  const features = new ApiFeatures(User, req.query, req.user?.role || "guest")
    .filter()
    .sort()
    .limitFields()
    .paginate()
    .populate();

  const result = await features.execute();

  if (result.count === 0) {
    return next(new HandleERROR("کاربری یافت نشد", 404));
  }

  return res.status(200).json({
    message: "کاربران با موفقیت دریافت شدن",
    ...result,
  });
});
export const getOne = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (req.userId != id && req.role != "admin" && req.role != "superAdmin")
    return next(new HandleERROR("دسترسی رد شد", 401));

  const user = await User.findById(id);

  if (user)
    return res.status(200).json({
      data: user,
      success: true,
      message: "کاربر یافت شد",
    });
  else return next(new HandleERROR(" کاربر یافت نشد", 404));
});
export const update = asyncHandler(async(req, res, next) => {
    const { id } = req.params;
    const {role=null,phoneNumber=null,boughtProductIds=null,...others}=req.body

    if (req.userId != id && req.role != "admin" && req.role != "superAdmin")
      return next(new HandleERROR("دسترسی رد شد", 401));
    
    const user = await User.findByIdAndUpdate(id,others,{new:true});
  
    if (user)
      return res.status(200).json({
        data: user,
        success: true,
        message: " کاربر  با موفقیت بروزرسانی شد",
      });
    else return next(new HandleERROR(" کاربر یافت نشد", 404));
});
