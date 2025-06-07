import express from 'express';
import {
  auth,
  checkOtp,
  checkPassword,
  forgetPass,
  resendPass,
} from '../Controllers/َAuthCn.js'; 

const authRouter = express.Router();

// 📲 بررسی شماره تلفن برای ورود (بررسی رمز یا ارسال کد)
authRouter.post('/check-phone', auth);

// ✅ بررسی کد تایید پیامکی
authRouter.post('/verify-otp', checkOtp);

// 🔐 ورود با رمز عبور
authRouter.post('/login-password', checkPassword);

// 🔁 فراموشی رمز عبور و بازیابی با کد
authRouter.post('/forget-password', forgetPass);

// ♻️ ارسال مجدد کد پیامک برای کاربرانی که رمز ندارن
authRouter.post('/resend-code', resendPass);

export default authRouter;