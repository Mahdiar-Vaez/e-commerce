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

export default function App() {
  const x = {
    lastName: "alii",
  };
  const y = "name";
  console.log((x[y] = "ali"));
  console.log(x);
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
      </Route>
      <Route>{/* admin Layout */}</Route>
    </Routes>
  );
}
