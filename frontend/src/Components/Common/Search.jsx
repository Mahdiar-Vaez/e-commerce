import React, { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState();
  const [open, setOpen] = useState(false);
  function handleToggleSearch(e) {
    e.preventDefault()
    setOpen(!open);
  }

  return (
    <div      className={` flex justify-center left-0 w-full transition-all   items-center duration-300  ${
        open ? "absolute top-0 w-full h-24 bg-white z-50" : "w-auto"
      }`}>
      {open ? (
        <form
        onSubmit={handleToggleSearch}
     className="relative flex items-center justify-center w-full  "
        >
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}
              className="bg-gray-100 px-4 py-2 pr-12 pl-2 rounded-lg focus:outline-none w-full placeholder:text-gray-700 "
            />
            <button className="absolute  text-gray-600 right-1 top-[50%] translate-y-[-50%]">
                <HiMagnifyingGlass className="h-6 w-6"/>
            </button>
          </div>
          <button onClick={handleToggleSearch}  className="absolute cursor-pointer right-4"><HiMiniXMark className="h-6 w-6"/></button>
        </form>
      ) : (
        <button onClick={handleToggleSearch}>
          <HiMagnifyingGlass className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
