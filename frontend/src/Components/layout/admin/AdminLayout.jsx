import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
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
import { Outlet } from "react-router-dom";

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
  const [isSidebarOpen, setSidebarIsOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarIsOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative bg-gradient-to-br from-gray-100 to-indigo-100">
      {/* Mobile Topbar */}
      <div className="flex items-center md:hidden p-4 bg-gray-900 text-white z-20 shadow">
        <button onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
        <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
      </div>
      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 right-0 top-0 md:hidden"
        ></div>
      )}
      {/* Sidebar */}
      <div
        className={`bg-gray-900 w-64 h-screen top-0 sticky max-md:fixed left-0 transform transition-transform ${
          !isSidebarOpen ? "-translate-x-full " : "translate-x-0"
        } duration-300 md:translate-x-0  text-white shadow-lg z-30`}
      >
        <AdminSidebar />
      </div>
      {/* Main Content */}
     <Outlet/>
    </div>
  );
}