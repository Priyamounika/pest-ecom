"use client";
import Image from "next/image";
import { TbShoppingCart } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { useState } from 'react';
import { FiMenu } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#fafafa] py-4 lg:py-6 border-b border-gray-200 sticky top-0 z-10 w-full">
      <nav className="container mx-auto flex justify-between items-center px-4">
        {/* Logo and Navigation Links */}
        <div className="flex items-center md:gap-5 lg:gap-8">
          <Image src="/Pest-logo.png" width={150} height={100} alt="logo" />

          {/* Hamburger Menu Icon for Mobile View */}
          <button onClick={toggleMenu} className="md:hidden text-[#FF3F35]">
            <FiMenu size={24} />
          </button>

          {/* Navigation Links */}
          <ul className={`md:flex items-center gap-4 lg:gap-10 text-[#5C6B7E] absolute md:static top-16 left-0 w-full bg-white md:bg-transparent md:w-auto transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
            <li>
              <p className="lg:text-lg md:text-sm cursor-pointer hover:text-[#FF3F35]">
                Home
              </p>
            </li>
            <li>
              <p className="lg:text-lg md:text-sm cursor-pointer hover:text-[#FF3F35] whitespace-nowrap">
                About Us
              </p>
            </li>
            <li>
              <p className="lg:text-lg md:text-sm cursor-pointer hover:text-[#FF3F35]">
                Categories
              </p>
            </li>
            <li>
              <p className="lg:text-lg md:text-sm cursor-pointer hover:text-[#FF3F35]">
                Contact
              </p>
            </li>
          </ul>
        </div>

        {/* Search and Cart */}
        <div className="flex gap-5 items-center">
          {/* Search Bar Large Screens */}
          <div className="hidden lg:flex px-3 shadow-lg shadow-[#f7c3c1] bg-white cursor-pointer active:opacity-40 py-3 lg:w-[280px] flex justify-between gap-2 rounded-full">
            <IoSearch size={20} className="text-[#FF3F35]" />
            <input type="text" placeholder="Search..." className="w-full outline-none px-2" />
          </div>

          {/* Search Icon Medium and Small Screens */}
          <div className="lg:hidden flex items-center px-3 bg-white cursor-pointer rounded-full shadow-lg shadow-[#f7c3c1]">
            <IoSearch size={20} className="text-[#FF3F35]" />
          </div>

          <div className="hidden md:flex px-5 shadow-md bg-[#FFD7D5] cursor-pointer active:opacity-40 py-2 flex justify-between gap-2 rounded-full">
            <p className="text-[#FF3F35]">Login</p>
          </div>

          <div className="group flex items-center bg-[#FF3F35] rounded-full px-10 py-1 cursor-pointer">
            <div className="hidden sm:flex flex-col justify-center text-white">
              <p className="text-[16px] whitespace-nowrap capitalize">
                My Cart
              </p>
              <p className="text-sm font-sans whitespace-nowrap">
                item(s)
              </p>
            </div>
            <div className="relative text-center text-white">
              <p className="bg-white text-[#FF3F35] rounded-full h-5 w-5 text-xs absolute -top-3 left-3">
                2
              </p>
              <TbShoppingCart
                  size={20}
                  className="text-white"
                />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
