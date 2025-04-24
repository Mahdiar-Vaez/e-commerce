import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t px-4 py-12 flex flex-col justify-center ">
      <div className="container mx-auto grid grid-cols-2 flex-grow md:grid-cols-4 gap-8 px-4 lg:px-0">
        <div className="col-span-1 max-lg:col-span-4 ">
          <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about new products, exclusive events, and
            online offers.
          </p>
          <p>Sign up and get 10% off your first order.</p>
          {/* Newsletter form */}


          <form className="flex mt-12">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button
              className="bg-black text-white px-4 rounded-r-lg"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="max-md:col-span-4">
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-black">
                Men's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-black">
                Women's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-black">
                Accessories
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-black">
                Footwear
              </Link>
            </li>
          </ul>
        </div>
        <div className="max-md:col-span-4">
          <h3 className="text-lg text-gray-800 mb-4">Customer Service</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-black">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-black">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-black">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-black">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="max-md:col-span-4">
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <ul className="flex space-x-4 text-gray-600">
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black"
                aria-label="Telegram"
              >
                <FaTelegram className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black"
                aria-label="Twitter"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy-right text-center mt-8 text-gray-600 text-sm">
  © {new Date().getFullYear()} Mahdiar Vaez. All rights reserved.
  
</div>
    </footer>
  );
}