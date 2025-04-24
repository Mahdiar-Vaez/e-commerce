import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import Search from "./Search";
import CartSidebar from "../layout/Userlayout/CartSidebar";
import MobileDrawer from "../layout/Userlayout/MobileDrawer";
import { NAV_LINKS } from "../../Constant/links";
export default function Navbar() {
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [drawerOpen,setDrawerOpen]=useState(false)
  const toggleDrawer=()=>{
    setDrawerOpen(!drawerOpen)
    setIsCartOpen(false)
  }
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    setDrawerOpen(false)
  };
console.log(drawerOpen)
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Left - Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>
        {/* Center - Navigation Links */}
        <div className="hidden md:flex gap-4">
        {NAV_LINKS?.map((link,index)=>
          <Link key={index} to={link.path}>
          {link.name}
          </Link>
        )}
        </div>
        <div className="flex items-center gap-4">
          <Link to={"/profile"}>
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            className="relative [hover : text-black"
            onClick={toggleCart}
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 bg-rabbit-red text-white text-xs rounded-full px-1 py-0.5 ">
              4
            </span>
          </button>
          {/* Search */}
          <Search />
          {/* Search */}
          <button className="md:hidden">

            {/* suggest */}





          


            <HiBars3BottomRight onClick={toggleDrawer} className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />
      <MobileDrawer drawerOpen={drawerOpen} onClose={toggleDrawer} />
    </>
  );
}