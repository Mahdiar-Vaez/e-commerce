import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFormFields from "../Utils/useFormFields";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import loginImage from "../assets/login.webp";

export default function Register() {
  const [fields, handleFields] = useFormFields();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  // State to toggle password visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fields.password !== fields.repeatPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError(""); // Clear error if passwords match
    console.log("Form submitted:", fields);
    // Add your form submission logic here
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-between">
      <div className="w-full md:w-1/2 flex  flex-col justify-start items-center p-8 md:p-12">
        <form
          className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Rabbit</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
          <p className="text-center mb-6">Fill in the details to register</p>

          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              required
              name="name"
              value={fields.name || ""}
              onChange={handleFields}
              className="w-full p-2 border rounded"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={fields.email || ""}
              onChange={handleFields}
              className="w-full p-2 border rounded"
              placeholder="Enter your email address"
            />
          </div>

          {/* Password Field */}
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

          {/* Repeat Password Field */}
          <div className="mb-4 relative">
            <label className="block text-sm font-semibold mb-2">Repeat Password</label>
            <input
            required
              type={showPassword ? "text" : "password"} // Toggle input type
              name="repeatPassword"
              value={fields.repeatPassword || ""}
              onChange={handleFields}
              className="w-full p-2 border rounded"
              placeholder="Repeat your password"
            />
            <span
              className="absolute right-3 top-10 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Sign Up
          </button>

          <p className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <Link className="text-blue-500" to="/login">
              Sign In
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden lg:w-1/2 md:block bg-gray-800">
        <div className="h-full flex-col justify-center items-center">
          <img
            src={loginImage}
            className="object-cover h-[800px] w-full"
            alt="Register Page"
          />
        </div>
      </div>
    </div>
  );
}