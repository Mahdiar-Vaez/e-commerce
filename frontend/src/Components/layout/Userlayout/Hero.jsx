import React from "react";
import HeroImage from "../../../assets/HomePage/heroImage.webp";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="relative">
      <img
        src={HeroImage}
        className="w-full  h-[400px] md:h-[600px] lg:h-[400px] object-cover "
        alt="تصویر فروشگاه  الکترونیک"
      />
      <div className="absolute inset-0 bg-rgba   flex items-center  justify-center">
        <div>
          <div className="text-center text-gray-100 p-6">
            <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
              VACATION
            </h1>
            <p className="text-sm tracking-tighter md:text-lg mb-6">
              Explore our vaction-ready outfits with fast worldwide shipping.
            </p>
            <Link
              to="#"
              className=" bg-white [text-gray-950 px-6 py-2 rounded-sm text-lg text-gray-700"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
