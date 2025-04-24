import React from "react";
import { Link } from "react-router-dom";

export default function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-12 md:grid-cols-3 lg:grid-cols-4">
      {products?.map((product, index) => (
        <Link key={index} to={`/product/${product._id}`} className="block">
          <div className=" bg-white  ">
            <div className="w-full h-42 md:h-96  ">
              <img
              className="rounded-lg h-full object-cover w-full"
                src={product.images[0].url}
                alt={product.images[0].altText || product.name}
              />
            </div>
            <h3 className="text-sm mb-2">{product.name}</h3>
            <p className="text-gray-500 font-medium text-sm tracking-tighter">
                ${product.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

