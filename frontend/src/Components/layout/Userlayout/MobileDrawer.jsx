import React from "react";
import { NAV_LINKS } from "../../../Constant/links";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";

export default function MobileDrawer({ drawerOpen, onClose }) {
  return (
    <div
      className={`fixed md:hidden left-0 top-0 h-full w-64 bg-white shadow-lg rounded-r-lg transition-transform z-60 ${
        !drawerOpen ? "-translate-x-full" : "translate-x-0"
      }`}
      aria-hidden={!drawerOpen}
      aria-expanded={drawerOpen}
      role="dialog"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <span className="text-2xl font-bold">Menu</span>
        <button
          onClick={onClose}
          aria-label="Close Menu"
          className="text-gray-700 hover:text-black"
        >
          <HiX className="h-6 w-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col p-4 gap-4">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-gray-700 hover:text-black text-sm font-medium"
            onClick={onClose} // Close the drawer when a link is clicked
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}