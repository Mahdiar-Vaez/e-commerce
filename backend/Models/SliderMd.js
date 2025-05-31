import mongoose from "mongoose";

const sliderSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'نام اسلایدر مشخص نشده'],

    },
    image:{
        type:String,
        required:[true,'عکس  مشخص نشده'],
    },
    location:{
        type:String,
        required:[true,'مکان اسلایدر یمبایست مشخص باشه'],

        default:'home'
    }

    
}, {
    timestamps: true,
    versionKey: false,
  })
  const Slider=mongoose.model('Slider',sliderSchema)
  export default Slider