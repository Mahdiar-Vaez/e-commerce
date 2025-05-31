import asyncHandler from 'express-async-handler';
import Category from '../Models/CategoryMd.js';
import ApiFeatures, { HandleERROR } from 'vanta-api';
import Product from '../Models/ProductMd.js';
import fs from 'fs'
import {__dirname} from '../app.js' 
export const create = asyncHandler(async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    return res.status(200).json({
      success: true,
      message: 'دسته بندی با موفقیت ساخته شد',
      data: category,
    });
  } catch (error) {
    next(new HandleERROR('خطا در ایجاد دسته بندی', 500));
  }
});

export const getAll = asyncHandler(async (req, res, next) => {
  const features = new ApiFeatures(Category, req.query, req.user?.role || 'guest')
    .filter()
    .sort()
    .limitFields()
    .paginate()
    .populate(['parentCategoryId']);

  const result = await features.execute();

  if (result.count === 0) {
    return next(new HandleERROR('دسته بندی یافت نشد', 404));
  }

  return res.status(200).json({
    message: 'دسته بندی ها با موفقیت دریافت شدند',
    ...result,
  });
});

export const getOne = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (req.userId !== id && req.role !== 'admin' && req.role !== 'superAdmin') {
    return next(new HandleERROR('دسترسی رد شد', 401));
  }

  const category = await Category.findById(id);

  if (category) {
    return res.status(200).json({
      data: category,
      success: true,
      message: 'دسته بندی یافت شد',
    });
  } else {
    return next(new HandleERROR('دسته بندی یافت نشد', 404));
  }
});

export const update = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const category = await Category.findByIdAndUpdate(id, req.body, { new: true });

  if (category) {
    return res.status(200).json({
      data: category,
      success: true,
      message: 'دسته بندی بروزرسانی شد',
    });
  } else {
    return next(new HandleERROR('دسته بندی پیدا نشد', 404));
  }
});

export const remove = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const products = await Product.find({ categoryId: id });

  if (products.length > 0) {
    return next(new HandleERROR('دسته بندی در حال حاضر دارای محصول می‌باشد', 400));
  }

  const category = await Category.findByIdAndDelete(id);
  fs.unlinkSync(`${__dirname}/Public/${category.image}`)
  if (category) {
    return res.status(200).json({
      success: true,
      message: 'دسته بندی با موفقیت پاک شد',
    });
  } else {
    return next(new HandleERROR('دسته بندی پیدا نشد', 404));
  }
});
