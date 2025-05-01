import React, { useState } from 'react'

export default function OrderManagement() {
  // Sample static orders data
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderId: "#123456",
      customer: "John Doe",
      date: "2025-04-24",
      status: "Pending",
      total: 345000,
      address: "123 Main St, New York",
      payment: "Credit Card",
    },
    {
      id: 2,
      orderId: "#123457",
      customer: "Jane Smith",
      date: "2025-04-25",
      status: "Shipped",
      total: 120000,
      address: "456 Elm St, Los Angeles",
      payment: "PayPal",
    },
    {
      id: 3,
      orderId: "#123458",
      customer: "Ali Reza",
      date: "2025-04-26",
      status: "Delivered",
      total: 90000,
      address: "789 Oak St, Tehran",
      payment: "Cash",
    },
    {
      id: 4,
      orderId: "#123459",
      customer: "Sara Lee",
      date: "2025-04-27",
      status: "Cancelled",
      total: 50000,
      address: "321 Pine St, London",
      payment: "Credit Card",
    },
  ])

  // Optionally, you can add status update or delete logic here

  return (
    <div className="w-full mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700">Order Management</h2>
      <div className="bg-white rounded-lg shadow p-6 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Customer</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Total</th>
              <th className="px-4 py-2 text-left">Address</th>
              <th className="px-4 py-2 text-left">Payment</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="border-t">
                <td className="px-4 py-2">{order.orderId}</td>
                <td className="px-4 py-2">{order.customer}</td>
                <td className="px-4 py-2">{order.date}</td>
                <td className="px-4 py-2">
                  <span
                    className={
                      "px-2 py-1 rounded text-xs " +
                      (order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-700"
                        : order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700")
                    }
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-2">{order.total.toLocaleString()} تومان</td>
                <td className="px-4 py-2">{order.address}</td>
                <td className="px-4 py-2">{order.payment}</td>
                <td className="px-4 py-2">
                  {/* You can add edit/view/delete buttons here */}
                  <button className="text-indigo-600 hover:underline mr-2">View</button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan={8} className="text-center py-4 text-gray-400">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}