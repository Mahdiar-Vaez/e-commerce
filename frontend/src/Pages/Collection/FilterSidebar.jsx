import React, { useEffect, useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";

export default function FilterSidebar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [maxPrice, setMaxPrice] = useState([0, 100]);
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });
  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Beige",
    "Navy",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const bransd = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle",
  ];
  const genders = ["men", "women"];
  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(", ") : [],
      brand: params.brand ? params.brand.split(", ") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setMaxPrice([0, params.maxPrice || 100]);
  }, [searchParams]);
  const handlePriceChange = (e) => {
    const { value } = e.target;
    const newFilters={...filters,minPrice:0,maxPrice:value}
    setFilters(newFilters);
   updateURLParams(newFilters)
  };
  function handleFilterChange(e) {
    const { checked, value, type, name } = e.target;
    let newFilters = { ...filters };
    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else newFilters[name] = newFilters[name].filter((e) => e != value);
    } else newFilters[name] = value;
    setFilters(newFilters);
    updateURLParams(newFilters);
  }

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });
    setSearchParams(params);
    Navigate(`?${params. toString()}`);
  };
  
  return (
    <div className="p-4 ">
      <h3 className="text-xl font-medium text-gray-800 mb-2">Filter</h3>
      {/* Category Filter */}
      <div className="mb-2">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              value={category}
              onChange={handleFilterChange}
              name="category"
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>
      <div className="mb-2">
        <label className="block text-gray-600 font-medium mb-2">genders</label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              checked={gender===filters.gender}
              value={gender}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{gender}</span>
          </div>
        ))}
      </div>
      <div className="mb-2">
        <label className="block text-gray-600 font-medium mb-2">Colors</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              style={{
                backgroundColor: color,
              }}
              key={color}
              name="color"
              value={color}
              onClick={handleFilterChange}
              className={`${color===filters.color&&'ring-2 ring-blue-500'} w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 `}
            ></button>
          ))}
        </div>
      </div>
      <div className="mb-2">
        <label className="block text-gray-600 font-medium mb-2  ">Sizes</label>
        <div className="flex flex-col gap-1">
          {sizes.map((size) => (
            <div key={size} className="flex items-center  flex-wrap">
              <input
                type="checkbox"
                checked={filters?.size?.includes  (size)}
                name="size"
                onChange={handleFilterChange}
                value={size}
                className="mr-2 h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-400"
              />
              <span className="text-gray-700">{size}</span>
            </div>
          ))}
        </div>
      </div>

      {/* suggest */}

      <div className="mb-2">
        <label className="block text-gray-600 font-medium mb-2  ">Brands</label>
        <div className="flex flex-col gap-1">
          {bransd.map((brand) => (
            <div key={brand} className="flex items-center  flex-wrap">
              <input
              checked={filters.brand===brand}
                type="checkbox"
                name="size"
                className="mr-2 h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-400"
              />
              <span className="text-gray-700">{brand}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Price Range Filter */}
      <div className="mb-2">
        <label className="block text-gray-600 font-medium mb-2">
          Price Range
        </label>
        <div className="flex items-center gap-4">
          <span className="text-gray-700 text-sm">
            Max: ${filters?.maxPrice}
          </span>
          <input
            type="range"
            name="priceRange"
            min="0"
            max="500"
            value={filters.priceRange}
            onChange={handlePriceChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
