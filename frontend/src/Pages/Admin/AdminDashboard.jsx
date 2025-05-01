import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const summaryData = [
  { month: "Jan", users: 120, income: 5000, outcome: 2000, orders: 40 },
  { month: "Feb", users: 150, income: 7000, outcome: 2500, orders: 55 },
  { month: "Mar", users: 200, income: 9000, outcome: 3000, orders: 70 },
  { month: "Apr", users: 250, income: 12000, outcome: 3500, orders: 90 },
  { month: "May", users: 300, income: 15000, outcome: 4000, orders: 110 },
];

const ordersStatus = [
  { name: "Pending", value: 15, color: "#f59e42" },
  { name: "Shipped", value: 30, color: "#6366f1" },
  { name: "Delivered", value: 45, color: "#10b981" },
  { name: "Cancelled", value: 10, color: "#ef4444" },
];

export default function AdminLayout() {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">
        Dashboard Overview
      </h2>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <span className="text-indigo-600 text-3xl font-bold mb-2">300</span>
          <span className="text-gray-600 font-semibold">Users</span>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <span className="text-green-500 text-3xl font-bold mb-2">
            15,000 تومان
          </span>
          <span className="text-gray-600 font-semibold">Income (May)</span>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <span className="text-red-500 text-3xl font-bold mb-2">
            4,000 تومان
          </span>
          <span className="text-gray-600 font-semibold">Outcome (May)</span>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <span className="text-yellow-500 text-3xl font-bold mb-2">110</span>
          <span className="text-gray-600 font-semibold">Orders (May)</span>
        </div>
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Users Growth */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2 text-indigo-700">User Growth</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={summaryData}>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#6366f1"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* Income vs Outcome */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2 text-indigo-700">Income vs Outcome</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={summaryData}>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="income" fill="#10b981" />
              <Bar dataKey="outcome" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Orders Summary & Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Orders Summary */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2 text-indigo-700">Orders Summary</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={summaryData}>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="orders"
                stroke="#f59e42"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* Orders Status Pie */}
        <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
          <h3 className="font-bold mb-2 text-indigo-700">Orders Status</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={ordersStatus}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {ordersStatus.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
