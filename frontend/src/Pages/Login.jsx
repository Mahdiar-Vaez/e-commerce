import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFormFields from "../Utils/useFormFields";
import loginImage from '../assets/login.webp'
import { FaEye, FaEyeSlash } from "react-icons/fa";
export default function Login() {
  const [fields, handleFields] = useFormFields();
    const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex justify-between  ">
      <div className="w-full  md:w-1/2 mt-6 flex h-full flex-col justify-center  items-center px-4 py-12 md:p-12">
        <form className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Rabbit</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">Hey there!</h2>
          <p className="text-center mb-6">
            Enter your username and password to login
          </p>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email or Name</label>
            <input
            required 

              type="email"
              name="email"
              value={fields.email}
              onChange={handleFields}
              className="w-full p-2 border rounded"
              
            />
          </div>
         <div className="mb-4 relative">
                 <label className="block text-sm font-semibold mb-2">Password</label>
                 <input
                   type={showPassword ? "text" : "password"} // Toggle input type
                   name="password"
                   value={fields.password || ""}
                   onChange={handleFields}
                   required
                   className="w-full p-2 border rounded"
                   placeholder="Enter your password"
                 />
                 <span
                   className="absolute right-3 top-10 cursor-pointer"
                   onClick={togglePasswordVisibility}
                 >
                   {showPassword ? <FaEyeSlash /> : <FaEye />}
                 </span>
               </div>
          <button className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition">
                Sign In
          </button>
          <p className="mt-6 text-center text-sm">
            Don't have an account?
            <Link className="text-blue-500" to='/register'>
            Sign Up
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden lg:w-1/2 md:block bg-gray-800">
        <div className="h-full flex-col justify-center items-center"> 
            <img src={loginImage} className="object-cover h-[800px] w-full "  alt="عکس صفحه ورود" />
        </div>
      </div>
    </div>
  );
}
