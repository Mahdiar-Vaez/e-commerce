import asyncHandler from 'express-async-handler';
import Slider from '../Models/SliderMd';
import ApiFeatures from 'vanta-api';
import { promises as fsPromises } from 'fs'; // تغییر از fs به نسخه غیرهمزمان
import { __dirname } from '../app.js'; // 

// ...existing code...

export const create = asyncHandler(async (req, res, next) => {
  try {
    const slider = await Slider.create(req.body);
    return res.status(200).json({
      success: true,
      message: 'برند با موفقیت ساخته شد',
      data: slider,
    });
  } catch (error) {
    next(new HandleERROR('خطا در ایجاد برند', 500));
  }
});

export const getAll = asyncHandler(async (req, res, next) => {
  const features = new ApiFeatures(Slider, req.query, req.user?.role || 'guest')
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const result = await features.execute();

  if (result.count === 0) {
    return next(new HandleERROR('برند یافت نشد', 404));
  }

  return res.status(200).json({
    message: 'برندها با موفقیت دریافت شدند',
    ...result,
  });
});




export const remove = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
 

  const slider = await Slider.findByIdAndDelete(id);
  if (slider) {
    try {
      const imagePath = `${__dirname}/Public/${slider.image}`;
      await fsPromises.access(imagePath);  // بررسی وجود فایل
      await fsPromises.unlink(imagePath); // حذف فایل
    } catch (error) {
      console.error('Error removing file:', error);
    }

    return res.status(200).json({
      success: true,
      message: 'برند با موفقیت پاک شد',
    });
  } else {
    return next(new HandleERROR('برند پیدا نشد', 404));
  }
});
