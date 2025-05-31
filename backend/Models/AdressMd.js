import mongoose from "mongoose";

const addressSchema=new mongoose.Schema({
    city:{
        type:String,
        required:[true,'شهر مشخص نشده'],

    },
    state:{
        type:String,
        required:[true,'استان مشخص نشده'],

    },
    street:{
        type:String,
        required:[true,"خیابان مشخص نشده"]
    },
    description:{
        type:String,
    },
    receiverName:{
        type:String,
        required:[true,"نام گیرنده  مشخص نشده"]
    },
    receiverPhone:{
        type:String,
        required:[true,"شماره گیرنده مشخص  نشده"]
    },
    postalCode:{
        type:String,
        required:[true," کد پستی مشخص نشده"]
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
    
}, {
    timestamps: true,
    versionKey: false,
  })
  const Address=mongoose.model('Address',addressSchema)
  export default Address