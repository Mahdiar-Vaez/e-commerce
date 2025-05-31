import mongoose from "mongoose";

const variantSchema=new mongoose.Schema({
    type:{
        type:String,
        required:[true,'اطلاعات محصول اجباری است'],
        enum:['color','size']
    },
    value:{
        type:String,
        required:[true,'  مقدار تایپ محصول باید مشخص شود'],
    },
  
    
}, { 
    timestamps: true,
    versionKey: false,
  })
  const Variant=mongoose.model('Variant',variantSchema)
  export default Variant