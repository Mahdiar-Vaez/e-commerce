import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: String,
    userName: String,
    phoneNumber: {
      type: Number,
      match: [/^(\+98|98|0)?9\d{9}$/,"شماره تلفن شما نامعتبر است"],
      required: [true, "شماره تلفن اجباری است "],
      unique: [true, "شماره تلفن قبلا استفاده شده است "],
    },
    favoriteProductIds: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
      ],
      default: [],
    },
    boughtProductIds: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
      ],
      default: [],
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin", "superAdmin"],
      default: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);
const User = mongoose.model("User", userSchema);
export default User;
