import asyncHandler from "express-async-handler";
import ProductVariant from "../Models/ProductVariantMd.js";
import ApiFeatures, { HandleERROR } from "vanta-api";
export const create = asyncHandler(async (req, res, next) => {
  const productVariantItems = req.body;
  if (!productVariantItems)
    return next(new HandleERROR("فیلد ها پر نیست ", 400));

  const productVariant = await ProductVariant.create(req.body);
  res
    .status(201)
    .json({
      message: "ویژگی های محصول ساخته شدن",
      data: productVariant,
      success: true,
    });
});
export const getAll = asyncHandler(async (req, res, next) => {
  let queryStr = req.query;

  const features = new ApiFeatures(ProductVariant, queryStr)
    .filter()
    .sort()
    .limitFields()
    .paginate()
    .populate(["variantId", "productId"]);
  const result = await features.execute();
  if (!result)
    return next(new HandleERROR("هیچ   مشخصه ای محصولی پیدا نشد", 404));
  return res
    .status(200)
    .json({ ...result, message: "مشخصات محصولات با موفقیت دریافت شدن " });
});
export const getOne = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const productVariant = await ProductVariant.findById(id).populate(
    "variantId productId"
  );
  if (!productVariant) {
    return next(new HandleERROR("محصول پیدا نشد", 404));
  }
  res
    .status(200)
    .json({
      message: "محصول با موفقیت دریافت شد",
      data: productVariant,
      success: true,
    });
});
export const update = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const updatedData = req.body;
  const productVariant = await ProductVariant.findByIdAndUpdate(
    id,
    updatedData,
    { new: true, runValidators: true }
  );
  if (!productVariant) {
    return next(new HandleERROR("محصول پیدا نشد", 404));
  }
  res
    .status(200)
    .json({
      message: "محصول با موفقیت به روز رسانی شد",
      data: productVariant,
      success: true,
    });
});
export const remove = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const productVariant = await ProductVariant.findByIdAndDelete(id);
  if (!productVariant) {
    return next(new HandleERROR("محصول پیدا نشد", 404));
  }
  res.status(204).json({ message: "محصول با موفقیت حذف شد", success: true });
});
