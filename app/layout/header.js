"use client";
import Image from "next/image";
import { TbShoppingCart } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { useState } from 'react';
import { RiMenu3Line } from "react-icons/ri";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#fafafa] py-5 border-b border-gray-200 sticky top-0 z-10 w-full px-2">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo and Navigation Links */}
        <div className="flex items-center md:gap-5 lg:gap-8">
          <Image src="/Pest-logo.png" width={100} height={100} alt="logo" />

          {/* Navigation Links */}
          <ul className={`md:flex items-center gap-4 lg:gap-10 text-[#5C6B7E] absolute md:static top-16 left-0 w-full bg-white md:bg-transparent md:w-auto transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
            <li>
              <p className="lg:text-[15px] md:text-sm cursor-pointer hover:text-[#FF3F35]">
                Home
              </p>
            </li>
            <li>
              <p className="lg:text-[15px] md:text-sm cursor-pointer hover:text-[#FF3F35] whitespace-nowrap">
                About Us
              </p>
            </li>
            <li>
              <p className="lg:text-[15px] md:text-sm cursor-pointer hover:text-[#FF3F35]">
                Categories
              </p>
            </li>
            <li>
              <p className="lg:text-[15px] md:text-sm cursor-pointer hover:text-[#FF3F35]">
                Contact
              </p>
            </li>
          </ul>
        </div>

 {/* Search and Cart */}
        <div className="flex gap-5 items-center">
          {/* Search Large Screen */}
          <div className="hidden lg:flex px-3 shadow-lg shadow-[#f7c3c1] bg-white cursor-pointer active:opacity-40 py-2.5 lg:w-[280px] justify-between gap-2 rounded-full">
            <IoSearch size={20} className="text-[#FF3F35]" />
            <input type="text" placeholder="" className="w-full outline-none px-2" />
          </div>

          {/* Search Icon Medium and Small Screens */}
          <div className="lg:hidden flex items-center cursor-pointer rounded-full">
            <IoSearch size={22} className="text-[#FF3F35]" />
          </div>

          <div className="hidden md:flex px-6 shadow-md bg-[#FFD7D5] cursor-pointer active:opacity-40 py-2.5 justify-between gap-2 rounded-full">
            <p className="text-[#FF3F35] text-[15px]">Log in</p>
          </div>

          <div className="group flex items-center justify-center bg-[#FF3F35] rounded-full px-6 py-2.5 cursor-pointer gap-2">
            <div className="hidden sm:flex flex-col justify-center text-white">
              <p className="text-[15px] whitespace-nowrap capitalize">
                My Craft
              </p>
            </div>
            <div className="relative text-center text-white">
  <p className="bg-white text-[#FF3F35] rounded-full h-4 w-4 flex items-center justify-center text-[10px] absolute -top-2 left-3">
    2
  </p>
  <TbShoppingCart
    size={16}
    className="text-white"
  />
</div>
          </div>
          {/* Menu icon */}
          <button onClick={toggleMenu} className="md:hidden text-[#FF3F35]">
            <RiMenu3Line size={24} />
          </button>
        </div>
      </nav>
    </header>
  );
}
