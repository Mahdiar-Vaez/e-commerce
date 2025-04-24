import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";

export default function Topbar() {
  return (
    <div className="bg-rabbit-red text-white">
      <div className="container flex p-4 mx-auto">
        <div className="md:flex hidden   items-center gap-2">
          <a className="hover:text-gray-300" href="#">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a className="hover:text-gray-300" href="#">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a className="hover:text-gray-300" href="#">
            <RiTwitterXLine className="h-5 w-5" />
          </a>
        </div>
        <div className="text-sm text-center flex-grow">
          <span>We ship worldwide - Fa-st and reliable shipping !</span>
        </div>
        <div className="text-sm hidden md:block">
          <a href="tel: +1234567890" className="_hover : text-gray-300">
            +1 (234) 567-890
          </a>
        </div>
      </div>
    </div>
  );
}
