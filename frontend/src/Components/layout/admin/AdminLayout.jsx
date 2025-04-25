import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout() {
  const [isSidebarOpen, setSidebarIsOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarIsOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      <div className="flex items-center md:hidden p-4 bg-gray-900 text-white z-20 ">
        <button onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
        <h1 className="ml-4 text-xl font-medium ">Admin Dashboard</h1>
      </div>
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className={`fixed inset-0 bg-black opacity-50 right-0  top-0 md:hidden `}
        ></div>
      )}
      {/* sideabr */}
      <div
        className={`bg-gray-900 w-64 h-screen absolute  transform transition-transform ${
          !isSidebarOpen ? "-translate-x-full " : "translate-x-0"
        } duration-300 md:translate-x-0 md:static text-white `}
      >
        {<AdminSidebar />}
      </div>
      {/* main */}
      <div className="flex p-6 overflow-auto">
        
      </div>
    </div>
  );
}
