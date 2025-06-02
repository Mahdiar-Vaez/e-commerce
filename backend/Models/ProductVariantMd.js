import mongoose from "mongoose";

const productVariantSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: [true, "قیمت اجباری است "],
    },
    quantity: {
      type: Number,
      required: [true, "تعداد محصول اجباری است "],
    },

    variantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Variant",
      required: [true, "شناسه وریانت  الزامی است"],
    },
    finalPrice: {
      type: Number,
      required: [true, "قیمت نهایی محصول  اجباری است "],
    },

    discount: {
      type: Number,
      default: 0,
      min: 0,
      max: 90,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    ProductId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: [true, "شناسه محصول  الزامی است"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const ProductVariant = mongoose.model(
  "ProductVariant",
  productVariantSchema
);
export default ProductVariant;
