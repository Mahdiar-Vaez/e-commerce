import mongoose from "mongoose";

const categorySchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'نام برند مشخص نشده'],

    },
    image:{
        type:String,
        required:[true,'عکس  مشخص نشده'],
    },
    parentCategoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        default:null
    }

    
}, {
    timestamps: true,
    versionKey: false,
  })
  const Category=mongoose.model('Category',categorySchema)
  export default Category