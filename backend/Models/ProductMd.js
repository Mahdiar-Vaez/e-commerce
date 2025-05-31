import mongoose from 'mongoose';

const informationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'کلید اطلاعات الزامی است'],
    trim: true
  },
  value: {
    type: String,
    required: [true, 'مقدار اطلاعات الزامی است'],
    trim: true
  }
}, { _id: false }); // حذف _id اضافی در آرایه‌ها

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'نام محصول الزامی است'],
    trim: true,
    minlength: [2, 'نام باید حداقل ۲ کاراکتر باشد']
  },
  description: {
    type: String,
    required: [true, 'توضیحات الزامی است'],
    trim: true,
    minlength: [10, 'توضیحات باید حداقل ۱۰ کاراکتر باشد']
  },
  information: {
    type: [informationSchema],
    default: []
  },
  images: {
    type: [String],
    validate: [array => array.length <= 10, 'حداکثر ۱۰ تصویر مجاز است'],
    default: []
  },
  categoriesId: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, 'شناسه کتگوری الزامی است']
    }],
    validate: [arr => arr.length > 0, 'حداقل یک کتگوری الزامی است'],
    default: []
  },
  brandId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand',
    required: [true, 'شناسه برند الزامی است']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  rate: {
    type: Number,
    default: 0,
    min: [0, 'امتیاز نمی‌تواند کمتر از صفر باشد'],
    max: [5, 'امتیاز نمی‌تواند بیشتر از ۵ باشد']
  },
  rateCount: {
    type: Number,
    default: 0,
    min: 0
  },
  defaultVariant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductVariant'
  }
}, {
  timestamps: true,
  versionKey: false
});
const Product= mongoose.model('Product', productSchema);
export default Product