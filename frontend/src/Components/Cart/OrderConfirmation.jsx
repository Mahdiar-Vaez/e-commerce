import React from 'react'
import { Link } from 'react-router-dom'

export default function OrderConfirmation() {
  // In a real app you might retrieve order details from props, context, or an API
  const orderId = "#123456" // example order ID

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-lg w-full text-center">
        {/* Success icon */}
        <svg
          className="w-16 h-16 mx-auto text-green-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2l4-4m5 2a9 9 0 11-18 0a9 9 0 0118 0z"
          ></path>
        </svg>
        <h2 className="text-2xl font-bold mb-2">سفارش شما تایید شد!</h2>
        <p className="mb-4 text-gray-600">
          از خرید شما سپاسگزاریم. سفارش شما با موفقیت ثبت شد و به زودی جهت ارسال پردازش خواهد شد.
        </p>
        <div className="border border-gray-200 rounded p-4 text-left mb-4">
          <p className="font-semibold">شماره سفارش:</p>
          <p className="text-gray-700">{orderId}</p>
        </div>
        <Link
          to="/shop"
          className="bg-rabbit-red text-white font-bold py-2 px-4 rounded transition hover:bg-red-600"
        >
          ادامه خرید
        </Link>
      </div>
    </div>
  )
}