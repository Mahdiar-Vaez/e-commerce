import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { IoAddSharp } from "react-icons/io5";
import { IoMdRemove } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export default function CartSidebar({ isOpen, onClose }) {
  const navigate=useNavigate()
  function handleCheckout(){
    navigate('/checkout')
    onClose()
    }
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80  rounded-l-lg bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex items-center justify-between p-2 border-b">
        <h2 className="text-lg font-medium">Your Cart</h2>
        <button onClick={onClose}>
          <HiX className="h-6 w-6 text-gray-700" />
        </button>
      </div>
      <div className="">
        {/* Cart Items */}
        <div className="flex flex-col gap-4 items-center">
          <div className="flex items-center gap-4">
            <img
              src="https://randomwordgenerator.com/img/picture-generator/57e5dd464d54ac14f1dc8460962e33791c3ad6e04e50744172297ed29f4bc4_640.jpg"
              alt="Product"
              className="w-1/2 h-full  object-cover rounded"
            />
            <div className="flex-1 flex flex-col gap-3 items-start justify">
              <h3 className="text-sm font-medium">Product Name</h3> 
              <div className="flex gap-2 items-center">
                <button className="border border-gray-400 rounded-md p-0.5"><IoAddSharp className='w-5 h-5'/></button>
                <p className="text-xs text-gray-500">Quantity: 1</p>
                <button className="border border-gray-400 rounded-md p-0.5"><IoMdRemove className='w-5 h-5'/></button>
              </div>
              <p className="text-sm font-medium">$20.00</p>
            </div>
          </div>
          <div className="flex items-center  px-2 gap-4">
            <img
              src="https://randomwordgenerator.com/img/picture-generator/57e5dd464d54ac14f1dc8460962e33791c3ad6e04e50744172297ed29f4bc4_640.jpg"
              alt="Product"
              className="w-1/2 h-full  object-cover rounded"
            />
            <div className="flex-1 flex flex-col gap-3 items-start justify">
              <h3 className="text-sm font-medium">Product Name</h3> 
              <div className="flex gap-2 items-center">
                <button className="border border-gray-400 rounded-md p-0.5"><IoAddSharp className='w-3 h-3'/></button>
                <p className="text-xs text-center text-gray-500">Quantity: 1</p>
                <button className="border border-gray-400 rounded-md p-0.5"><IoMdRemove className='w-3 h-3'/></button>
              </div>
              <p className="text-sm font-medium">$20.00</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="https://randomwordgenerator.com/img/picture-generator/57e5dd464d54ac14f1dc8460962e33791c3ad6e04e50744172297ed29f4bc4_640.jpg"
              alt="Product"
              className="w-1/2 h-full  object-cover rounded"
            />
            <div className="flex-1 flex flex-col gap-3 items-start justify">
              <h3 className="text-sm font-medium">Product Name</h3> 
              <div className="flex gap-2 items-center">
                <button className="border border-gray-400 rounded-md p-0.5"><IoAddSharp className='w-5 h-5'/></button>
                <p className="text-xs text-gray-500">Quantity: 1</p>
                <button className="border border-gray-400 rounded-md p-0.5"><IoMdRemove className='w-5 h-5'/></button>
              </div>
              <p className="text-sm font-medium">$20.00</p>
            </div>
          </div>
          {/* Add more items here */}
        </div>
        {/* Total */}
        <div className="mt-6 p-2 border-t pt-4">
          <div className="flex justify-between text-sm font-medium">
            <span>Total</span>
            <span>$20.00</span>
          </div>
          <button onClick={handleCheckout} className=" absolute bottom-0 w-full bg-black text-white py-2 rounded">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
