import mongoose from "mongoose";

const brandSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'نام برند مشخص نشده'],

    },
    image:{
        type:String,
        required:[true,'عکس  مشخص نشده'],
    },

    
}, {
    timestamps: true,
    versionKey: false,
  })
  const Brand=mongoose.model('Brand',brandSchema)
  export default Brand