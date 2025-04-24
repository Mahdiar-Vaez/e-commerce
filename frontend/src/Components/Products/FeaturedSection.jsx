import React from "react";
import {
  HiArrowPathRoundedSquare,
  HiOutlineCreditCard,
  HiOutlineShoppingBag,
  HiShoppingBag,
} from "react-icons/hi2";
import { CgCommunity } from "react-icons/cg";


export default function FeaturedSection() {
  return (
    <section className="py-16 px-4 bg-white ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiOutlineShoppingBag className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2">FREE INTERNATIONAL SHIPPING</h4>
          <p className="[text-gray-600 text-sm tracking-tighter">
            On all orders over $100.00
          </p>
        </div>
        {/* feaTURE 2 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiArrowPathRoundedSquare className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2 uppercase">45 days return</h4>
          <p className="[text-gray-600 text-sm tracking-tighter">
            Money back guarantee
          </p>
        </div>
        {/* feaTURE 3 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiOutlineCreditCard className="text-xl" />
          </div>
          <h4 className="tracking-tighter uppercase mb-2">secure checkout</h4>
          <p className="[text-gray-600 text-sm tracking-tighter">
            100% Secured Checkout Process
          </p>
        </div>
        {/* feature 4 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <CgCommunity className="text-xl" />
          </div>
          <h4 className="tracking-tighter uppercase mb-2">Big Community</h4>
          <p className="[text-gray-600 text-sm tracking-tighter">
            Explore Our wide Community
          </p>
        </div>
      </div>
    </section>
  );
}
