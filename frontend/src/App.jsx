import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserLayout } from "./Components/import";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile/Profile";
import Collection from "./Pages/Collection/Collection";
import Checkout from "./Components/Cart/Checkout";
import ProductDetails from "./Components/Products/ProductDetail";
import OrderConfirmation from "./Components/Cart/OrderConfirmation";
import OrderDetail from "./Pages/OrderDetails/OrderDetail";
import MyOrderPage from "./Pages/Profile/MyOrderPage";
import AdminLayout from "./Components/layout/admin/AdminLayout";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AdminUsers from "./Pages/Admin/AdminUser";
import Products from "./Pages/Admin/Products";
import OrderManagement from "./Pages/Admin/orderManagement.jsx";

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        {/* user layout */}
        <Route exact path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="collection/:category" element={<Collection />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="order-confirm" element={<OrderConfirmation />} />
        <Route path="order/:id" element={<OrderDetail />} />
        <Route path="orders" element={<MyOrderPage />} />
      </Route>
      <Route path="/admin" element={<AdminLayout/>}>
      <Route path="dashboard" element={<AdminDashboard/>}/>
      <Route path="users" element={<AdminUsers/>}/>
      <Route path="products" element={<Products/>}/>
      <Route path="order-management" element={<OrderManagement/>}/>
      </Route>
    </Routes>
  );
}
