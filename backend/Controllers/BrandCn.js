import asyncHandler from 'express-async-handler';
import Brand from '../Models/BrandMd.js';
import ApiFeatures, { HandleERROR } from 'vanta-api';
import Product from '../Models/ProductMd.js';
import { promises as fsPromises } from 'fs'; 
import { __dirname } from '../app.js'; 


export const create = asyncHandler(async (req, res, next) => {
  try {
    const brand = await Brand.create(req.body);
    return res.status(200).json({
      success: true,
      message: 'برند با موفقیت ساخته شد',
      data: brand,
    });
  } catch (error) {
    next(new HandleERROR('خطا در ایجاد برند', 500));
  }
});

export const getAll = asyncHandler(async (req, res, next) => {
  const features = new ApiFeatures(Brand, req.query, req.user?.role || 'guest')
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

export const getOne = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (req.userId !== id && req.role !== 'admin' && req.role !== 'superAdmin') {
    return next(new HandleERROR('دسترسی رد شد', 401));
  }

  const brand = await Brand.findById(id);

  if (brand) {
    return res.status(200).json({
      data: brand,
      success: true,
      message: 'برند یافت شد',
    });
  } else {
    return next(new HandleERROR('برند یافت نشد', 404));
  }
});

export const update = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const brand = await Brand.findByIdAndUpdate(id, req.body, { new: true });

  if (brand) {
    return res.status(200).json({
      data: brand,
      success: true,
      message: 'برند بروزرسانی شد',
    });
  } else {
    return next(new HandleERROR('برند پیدا نشد', 404));
  }
});

export const remove = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const products = await Product.find({ brandId: id });

  if (products.length > 0) {
    return next(new HandleERROR('برند در حال حاضر دارای محصول می‌باشد', 400));
  }

  const brand = await Brand.findByIdAndDelete(id);
  if (brand) {
    try {
      const imagePath = `${__dirname}/Public/${brand.image}`;
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
