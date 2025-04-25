import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaTachometerAlt, FaBoxOpen, FaShoppingCart, FaUsers, FaChartBar, FaCog, FaSignOutAlt } from 'react-icons/fa'

export default function AdminSidebar() {
    const navigate=useNavigate()
  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <FaTachometerAlt /> },
    { name: 'Orders', path: '/admin/orders', icon: <FaShoppingCart /> },
    { name: 'Products', path: '/admin/products', icon: <FaBoxOpen /> },
    { name: 'Users', path: '/admin/users', icon: <FaUsers /> },
    { name: 'Reports', path: '/admin/reports', icon: <FaChartBar /> },
    { name: 'Settings', path: '/admin/settings', icon: <FaCog /> },
    { name: 'Logout', path: '/', icon: <FaSignOutAlt /> ,function(){
        navigate('/')
    }}
  ]

  return (
    <div className="p-4">
      <nav>
        <ul>
          {navItems.map(item => (
            <li key={item.name} className="mb-3">
              <NavLink
                to={item.path}
                onClick={item.function&&item.function}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-2 py-2 px-4 bg-indigo-600 text-white rounded"
                    : "flex items-center gap-2 py-2 px-4 text-gray-300 hover:bg-gray-700 rounded"
                }
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}