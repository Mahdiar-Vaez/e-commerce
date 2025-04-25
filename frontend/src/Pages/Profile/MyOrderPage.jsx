import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyOrderPage() {
  const [orders, setOrders] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    setTimeout(() => {
     const  mockOrders = [
        {
          _id: "12345",
          createdAt: new Date(),
          shippingAddress: { city: "New York", country: "USA" },
          orderItems: [
            {
              name: "product1",
              image: "https://picsum.photos/500/500?random=1",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: "67890",
          createdAt: new Date(),
          shippingAddress: { city: "Los Angeles", country: "USA" },
          orderItems: [
            {
              name: "product2",
              image: "https://picsum.photos/500/500?random=2",
            },
          ],
          totalPrice: 200,
          isPaid: false,
        },
        {
          _id: "11223",
          createdAt: new Date(),
          shippingAddress: { city: "London", country: "UK" },
          orderItems: [
            {
              name: "product3",
              image: "https://picsum.photos/500/500?random=3",
            },
          ],
          totalPrice: 150,
          isPaid: true,
        },
        {
          _id: "44556",
          createdAt: new Date(),
          shippingAddress: { city: "Tokyo", country: "Japan" },
          orderItems: [
            {
              name: "product4",
              image: "https://picsum.photos/500/500?random=4",
            },
          ],
          totalPrice: 300,
          isPaid: false,
        },
      ];
      setOrders(mockOrders);
    }, 1000);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 sm:py-3">Image</th>
              <th className="py-2 px-4 sm:py-3">Order ID</th>
              <th className="py-2 px-4 sm:py-3">Created</th>
              <th className="py-2 px-4 sm:py-3">Shipping Address</th>
              <th className="py-2 px-4 sm:py-3">Items</th>
              <th className="py-2 px-4 sm:py-3">Price</th>
              <th className="py-2 px-4 sm:py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} onClick={()=>{
                navigate(`/order/${order._id}`)
              }} className="border-b hover:bg-gray-50">
                {/* Image */}
                <td className="py-2 px-4 sm:py-3">
                  <img
                    src={order.orderItems[0].image}
                    alt={order.orderItems[0].name}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                {/* Order ID */}
                <td className="py-2 px-4 sm:py-3">{order._id}</td>
                {/* Created Date */}
                <td className="py-2 px-4 sm:py-3">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
                {/* Shipping Address */}
                <td className="py-2 px-4 sm:py-3">
                  {order.shippingAddress.city}, {order.shippingAddress.country}
                </td>
                {/* Items */}
                <td className="py-2 px-4 sm:py-3">
                  {order.orderItems.map((item) => item.name).join(", ")}
                </td>
                {/* Price */}
                <td className="py-2 px-4 sm:py-3">${order.totalPrice}</td>
                {/* Status */}
                <td className="py-2 px-4 sm:py-3">
                  {order.isPaid ? (
                    <span className="text-green-500 font-semibold">Paid</span>
                  ) : (
                    <span className="text-red-500 font-semibold">Not Paid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}