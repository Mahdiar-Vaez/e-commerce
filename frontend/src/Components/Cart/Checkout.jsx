import React, { useState } from 'react'
import useFormFields from '../../Utils/useFormFields'

export default function Checkout() {
  const [fields, handleFields] = useFormFields()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  // Imagine you have 10 products in the cart with updated image URLs
  const cartProducts = [
    {
      name: "Stylish Jacket",
      price: 120,
      qty: 1,
      image: "https://picsum.photos/500/500?random=1",
    },
    {
      name: "Classic Shirt",
      price: 80,
      qty: 2,
      image: "https://picsum.photos/500/500?random=2",
    },
    {
      name: "Sneakers",
      price: 200,
      qty: 1,
      image: "https://picsum.photos/500/500?random=3",
    },
    {
      name: "Jeans",
      price: 150,
      qty: 1,
      image: "https://picsum.photos/500/500?random=4",
    },
    {
      name: "Cap",
      price: 40,
      qty: 3,
      image: "https://picsum.photos/500/500?random=5",
    },
    {
      name: "Socks",
      price: 20,
      qty: 5,
      image: "https://picsum.photos/500/500?random=6",
    },
    {
      name: "Belt",
      price: 60,
      qty: 1,
      image: "https://picsum.photos/500/500?random=7",
    },
    {
      name: "Watch",
      price: 300,
      qty: 1,
      image: "https://picsum.photos/500/500?random=8",
    },
    {
      name: "Sunglasses",
      price: 180,
      qty: 1,
      image: "https://picsum.photos/500/500?random=9",
    },
    {
      name: "Backpack",
      price: 220,
      qty: 1,
      image: "https://picsum.photos/500/500?random=10",
    },
  ]

  function handleSubmit(e) {
    e.preventDefault()
    for (let key of ['name', 'email', 'address', 'city', 'country', 'postalCode', 'cardNumber', 'cardName', 'expiry', 'cvc']) {
      if (!fields[key]) {
        setError('لطفاً همه فیلدها را پر کنید.')
        setSuccess(false)
        return
      }
    }
    setError('')
    setSuccess(true)
    // Send your data to the backend here
  }

  const total = cartProducts.reduce((sum, p) => sum + p.price * p.qty, 0)

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow mt-6 flex flex-col lg:flex-row gap-4">
      {/* Product Summary */}
      <div className="lg:w-2/5 w-full mb-4 lg:mb-0">
        <div className="border rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-bold mb-4 text-gray-800">خلاصه سفارش</h3>
          <div className="flex flex-col gap-3 max-h-80 overflow-y-auto">
            {cartProducts.map((p, idx) => (
              <div key={idx} className="flex items-center gap-3 border-b pb-2 last:border-b-0">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-16 h-16 rounded object-cover" 
                />
                <div className="flex-1">
                  <div className="text-sm font-semibold text-gray-700 truncate">{p.name}</div>
                  <div className="text-xs text-gray-500">تعداد: {p.qty}</div>
                </div>
                <div className="text-sm font-bold text-rabbit-red">{p.price * p.qty} تومان</div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-base font-bold">
            <span>جمع کل:</span>
            <span className="text-blue-600">{total} تومان</span>
          </div>
        </div>
      </div>
      {/* Checkout Form */}
      <div className="lg:w-3/5 w-full">
        <h2 className="text-xl font-bold mb-6 text-center">تکمیل خرید</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              name="name"
              value={fields.name || ''}
              onChange={handleFields}
              className="w-full border rounded p-3 text-sm"
              placeholder="نام و نام خانوادگی"
              required
            />
            <input
              type="email"
              name="email"
              value={fields.email || ''}
              onChange={handleFields}
              className="w-full border rounded p-3 text-sm"
              placeholder="ایمیل"
              required
            />
            <input
              type="text"
              name="address"
              value={fields.address || ''}
              onChange={handleFields}
              className="w-full border rounded p-3 text-sm md:col-span-2"
              placeholder="آدرس کامل"
              required
            />
            <input
              type="text"
              name="city"
              value={fields.city || ''}
              onChange={handleFields}
              className="w-full border rounded p-3 text-sm"
              placeholder="شهر"
              required
            />
            <input
              type="text"
              name="country"
              value={fields.country || ''}
              onChange={handleFields}
              className="w-full border rounded p-3 text-sm"
              placeholder="کشور"
              required
            />
            <input
              type="text"
              name="postalCode"
              value={fields.postalCode || ''}
              onChange={handleFields}
              className="w-full border rounded p-3 text-sm md:col-span-2"
              placeholder="کد پستی"
              required
            />
          </div>
          <div className="border-t pt-3 mt-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="text"
                name="cardNumber"
                value={fields.cardNumber || ''}
                onChange={handleFields}
                className="w-full border rounded p-3 text-sm md:col-span-2"
                placeholder="شماره کارت"
                required
                maxLength={19}
              />
              <input
                type="text"
                name="cardName"
                value={fields.cardName || ''}
                onChange={handleFields}
                className="w-full border rounded p-3 text-sm"
                placeholder="نام روی کارت"
                required
              />
              <input
                type="text"
                name="expiry"
                value={fields.expiry || ''}
                onChange={handleFields}
                className="w-full border rounded p-3 text-sm"
                placeholder="MM/YY"
                required
                maxLength={5}
              />
              <input
                type="text"
                name="cvc"
                value={fields.cvc || ''}
                onChange={handleFields}
                className="w-full border rounded p-3 text-sm"
                placeholder="CVC"
                required
                maxLength={4}
              />
            </div>
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          {success && <div className="text-green-600 text-sm">سفارش شما با موفقیت ثبت شد!</div>}
          <button
            type="submit"
            className="w-full bg-rabbit-red text-white font-bold py-3 px-4 rounded transition text-base"
          >
            ثبت سفارش
          </button>
        </form>
      </div>
    </div>
  )
}