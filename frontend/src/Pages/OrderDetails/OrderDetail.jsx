import React from 'react'

export default function OrderDetail() {
  // Sample order details – in a real app these would come from an API
  const order = {
    orderId: '#123456',
    orderDate: '2025-04-24',
    deliveryAddress: {
      name: 'John Doe',
      address: '123 Main St, Apartment 4B',
      city: 'New York',
      state: 'NY',
      postalCode: '10001',
      country: 'USA',
    },
    paymentMethod: 'Credit Card',
    shippingMethod: 'Standard Shipping',
    products: [
      {
        id: 1,
        name: 'Stylish Jacket',
        qty: 1,
        price: 120,
        image: 'https://picsum.photos/500/500?random=1',
      },
      {
        id: 2,
        name: 'Classic Shirt',
        qty: 2,
        price: 80,
        image: 'https://picsum.photos/500/500?random=2',
      },
      {
        id: 3,
        name: 'Sneakers',
        qty: 1,
        price: 200,
        image: 'https://picsum.photos/500/500?random=3',
      },
    ],
  }

  const subtotal = order.products.reduce((sum, p) => sum + p.price * p.qty, 0)
  const shippingCost = 25
  const tax = subtotal * 0.1 // assume 10% tax
  const total = subtotal + shippingCost + tax

  // For the countdown circle (if needed)
  const fullTime = 60 
  const timeLeft = 25 // minutes remaining
  const radius = 90
  const circumference = 2 * Math.PI * radius
  const progress = (timeLeft / fullTime)
  const offset = circumference * (1 - progress)
  
  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center">جزئیات سفارش</h1>

      {/* Order Basic Info */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div>
            <p className="font-semibold text-gray-700">شماره سفارش:</p>
            <p className="text-gray-800">{order.orderId}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">تاریخ سفارش:</p>
            <p className="text-gray-800">{order.orderDate}</p>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">آدرس تحویل</h2>
          <p className="text-gray-700">{order.deliveryAddress.name}</p>
          <p className="text-gray-700">{order.deliveryAddress.address}</p>
          <p className="text-gray-700">
            {order.deliveryAddress.city}, {order.deliveryAddress.state} {order.deliveryAddress.postalCode}
          </p>
          <p className="text-gray-700">{order.deliveryAddress.country}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-gray-700">روش پرداخت:</p>
            <p className="text-gray-800">{order.paymentMethod}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">روش ارسال:</p>
            <p className="text-gray-800">{order.shippingMethod}</p>
          </div>
        </div>
      </div>

      {/* Products and Price Summary as Table */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">محصولات سفارش شده</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-gray-700">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">محصول</th>
                <th className="px-4 py-2">تعداد</th>
                <th className="px-4 py-2 text-right">قیمت</th>
              </tr>
            </thead>
            <tbody>
              {order.products.map(product => (
                <tr key={product.id} className="border-t">
                  <td className="px-4 py-2 flex items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <span>{product.name}</span>
                  </td>
                  <td className="px-4 py-2 text-center">{product.qty}</td>
                  <td className="px-4 py-2 text-right font-bold text-rabbit-red">
                    {product.price * product.qty} تومان
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between mb-3 text-lg font-semibold">
            <span>جمع فرعی:</span>
            <span>{subtotal} تومان</span>
          </div>
          <div className="flex justify-between mb-3 text-lg font-semibold">
            <span>هزینه ارسال:</span>
            <span>{shippingCost} تومان</span>
          </div>
          <div className="flex justify-between mb-3 text-lg font-semibold">
            <span>مالیات (10%):</span>
            <span>{tax.toFixed(2)} تومان</span>
          </div>
          <div className="flex justify-between font-bold text-2xl">
            <span>جمع کل:</span>
            <span>{total.toFixed(2)} تومان</span>
          </div>
        </div>
      </div>
    </div>
  )
}