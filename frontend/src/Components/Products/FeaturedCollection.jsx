import React from "react";
import { Link } from "react-router-dom";
import FeatureImage from '../../assets/HomePage/featured.webp'
export default function FeaturedCollection() {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div
        className="container mx-auto justify-between flex flex-col-reverse lg:flex-row items-center bg-green-50
rounded-3x1"
      >
        {/* Left Content */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-lg font-semibold [text-gray-700 mb-2">
            Comfort and Style
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Apparel made for your everyday life
          </h2>
          <p className="text-lg [text-gray-600 mb-6">
            Discover high-quality, comfortable clothing that effortlessly blends
            fashion and function. Designed to make you look and feel great every
            day.
          </p>
          <Link
            to="/collection/all"
            className="bg-black  text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800"
          >
            Shop Now
          </Link>
        </div>
        {/* right content */}
        <div className="lg-w-1/2">
            <img src={FeatureImage} alt="فیچر ها " className="w-full h-[600px] object-cover lg:rounded-tr-3xl "/>
        </div>
      </div>
    </section>
  );
}
