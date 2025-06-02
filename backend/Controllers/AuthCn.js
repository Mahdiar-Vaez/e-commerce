import asyncHandler from "express-async-handler";
import User from "../Models/UserMd.js";
import { sendAuthCode, verifyCode } from "../utils/smsHandler.js";
import { HandleERROR } from "vanta-api";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

const generateToken = (model) => {
  const token = jwt.sign(
    { id: model._id, role: model.role },
    process.env.SECRET_KEY
  );
  if (token) return token;
  else console.log("Token generation failed");
};
export const auth = asyncHandler(async (req, res, next) => {
  const { phoneNumber = null } = req.body;
  if (!phoneNumber) return next(new HandleERROR("شماره تلفن الزامی است", 400));
  const user = await User.findOne({ phoneNumber });
  if (!user) return next(new HandleERROR("کاربر یافت نشد", 404));
  const passwordExist = user?.password ? true : false;
  if (!passwordExist) {
    const smsResult = await sendAuthCode(phoneNumber);
    if (!smsResult.success)
      return next(new HandleERROR("مشکل در ارسال پیامک ", 400));
  }
  return res.status(200).json({
    success: true,
    message: passwordExist ? "ورود با رمز عبور" : "ورود با ارسال کد",
    data: {
      
      passwordExist: passwordExist,
      phoneNumber,
    },
  });
});
export const checkOtp = asyncHandler(async (req, res, next) => {
    const { phoneNumber=null, code=null } = req.body;
    if (!phoneNumber || !code) {
      return next(new HandleERROR("شماره یا کد وارد نشده است", 400));
    }
    const result = await verifyCode(phoneNumber, code);
    if (!result) {
      return next(new HandleERROR("کد تایید نادرست است", 400));
    }
    
    let user = await User.findOne({ phoneNumber });
    if (!user) {
      user = await User.create({ phoneNumber });
      const token = generateToken(user);
      return res.status(201).json({
        success: true,
        message: "کاربر جدید با موفقیت ایجاد شد",
        data: user,
        token,
      });
    }
    
    const token = generateToken(user);
    return res.status(200).json({
      success: true,
      message: "ورود با موفقیت انجام شد",
      data: user,
      token,
    });
    
});
export const checkPassword = asyncHandler(async (req, res, next) => {
  const { password = null, phoneNumber = null } = req.body;
  if (!password || !phoneNumber) {
    return next(new HandleERROR("رمز عبور و شماره تلفن الزامی است", 400));
  }
  const user = await User.findOne({ phoneNumber });
  if (!user) {
    return next(new HandleERROR("کاربر یافت نشد", 404));
  }
  const comparePass = bcryptjs.compareSync(password, user?.password);
  if (!comparePass) return next(new HandleERROR("رمز عبور اشتباه است ", 400));

  const token = generateToken(user);
  return res.status(200).json({
    success: true,
    message: "ورود با موفقیت انجام شد",
    data: {
      id: user._id,
      role: user.role,
      favoriteProduct: user.favoriteProductIds,
      boughtProducts: user.boughtProductIds,
      phoneNumber: user.phoneNumber,
      lastName: user.lastName,
      firstName: user.firstName,
    },
    token,
  });
});
export const forgetPass = asyncHandler(async (req, res, next) => {
  const { newPassword = null, phoneNumber = null, code = null } = req.body;

  if (!newPassword || !phoneNumber || !code) {
    return next(new HandleERROR("تمامی فیلدها الزامی است", 400));
  }
  const resultSms = await verifyCode(phoneNumber, code);
  if (!resultSms) {
    return next(new HandleERROR("کد تایید نادرست است", 400));
  }

  const user = await User.findOne({ phoneNumber });
  if (!user) {
    return next(new HandleERROR("کاربر یافت نشد", 404));
  }
  const hashedPassword = bcryptjs.hashSync(newPassword, 10);
  user.password = hashedPassword;
  await user.save();

  return res.status(200).json({
    success: true,
    message: "رمز عبور با موفقیت تغییر یافت",
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: req.body.phoneNumber,
    },
  });
});
export const resendPass = asyncHandler(async (req, res, next) => {
  const { phoneNumber = null } = req.body;

  if (!phoneNumber) return next(new HandleERROR("شماره ارسال نشده است ", 400));
 
  const user = await User.findOne({ phoneNumber });
  if (!user) return next(new HandleERROR(" کاربری وجود ندارد با این شماره ", 400));
   const sendSms = await sendAuthCode(phoneNumber);
   if (!sendSms.success)
    return next(new HandleERROR("مشکل در ارسال پیم به وجود اومده "));

  return res.status(200).json({
    success: true,
    message: "کد تایید با موفقیت ارسال شد",
  });
});
