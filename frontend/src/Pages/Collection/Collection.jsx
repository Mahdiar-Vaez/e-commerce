import React, { useEffect, useRef, useState } from "react";
import FilterSidebar from "./FilterSidebar";
import { FaFilter } from "react-icons/fa";
import SortOption from "./SortOption";
import ProductGrid from "../../Components/Products/Productgrid";

export default function Collection() {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }
  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      const similarProducts = [
        {
          _id: 1,
          name: "Product 3",
          price: 1250,
          images: [{ url: "https://picsum.photos/500/500?random=1" }],
        },
        {
          _id: 1,
          name: "Product 1",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=2" }],
        },
        {
          _id: 2,
          name: "Product 1",
          price: 120,
          images: [{ url: "https://picsum.photos/500/500?random=3" }],
        },
        {
          _id: 1,
          name: "Product 5",
          price: 500,
          images: [{ url: "https://picsum.photos/500/500?random=5" }],
        },
      ];
      setProducts(similarProducts);
    }, 1000);
  }, []);
  return (
    <div className="flex flex-col   lg:flex-row">
      {/* Mobile Filter button */}
      <button onClick={toggleSidebar}  className="lg:hidden rounded my-4 max-w-40 self-center  border p-2 flex justify-center items-center">
        <FaFilter className="mr-2" />
        Filter
      </button>
      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50
left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0 h-screen `}
      >
        <FilterSidebar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>
        <SortOption/>
        <ProductGrid products={products}/> 
      </div>
    </div>
  );
}
