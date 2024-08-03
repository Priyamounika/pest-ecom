import React from 'react';
import { IoLogoFacebook } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black py-16 rounded-t-[20px] px-8 w-full">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          {/* Brand and Description */}
          <div className="space-y-5">
            <a href="/">
              <img
                alt="logo"
                loading="lazy"
                width="100"
                height="75"
                decoding="async"
                data-nimg="1"
                className="bg-white p-2 rounded-lg"
                style={{ color: 'transparent' }} // Corrected style prop
                src="/Pest-logo.png"
              />
            </a>
            <div className="flex">
              <p className="text-white text-sm font-normal max-w-[450px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="flex space-x-2">
              <a className="bg-[#FF3F35] text-white p-3 rounded-full" href="/">
                <IoLogoFacebook />
              </a>
              <a className="bg-[#FF3F35] text-white p-3 rounded-full" href="/">
                <RiTwitterXLine />
              </a>
              <a className="bg-[#FF3F35] text-white p-3 rounded-full" href="/">
                <FaLinkedin />
              </a>
              <a className="bg-[#FF3F35] text-white p-3 rounded-full" href="/">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Footer Links and Location */}
          <div className="flex justify-between flex-wrap lg:flex-nowrap xl:flex-nowrap gap-20">
            <ul className="text-white">
              <li><p className="text-white text-lg mb-3">Company</p></li>
              <li><a className="text-sm" href="/">Home</a></li>
              <li><a className="text-sm" href="/about">About</a></li>
              <li><a className="text-sm" href="/categories">Categories</a></li>
              <li><a className="text-sm" href="/pest-control">Pest Control</a></li>
              <li><a className="text-sm" href="/contact">Contact</a></li>
            </ul>

            <ul className="text-white">
              <li><p className="text-white text-lg mb-3">Pest Library</p></li>
              <li><a className="text-sm" href="/">Fly Control</a></li>
              <li><a className="text-sm" href="/about">Rodent Control</a></li>
              <li><a className="text-sm" href="/categories">Cockroach Control</a></li>
              <li><a className="text-sm" href="/pest-control">Ant Control</a></li>
              <li><a className="text-sm" href="/contact">Bed Bugs Control</a></li>
            </ul>

            <ul className="text-white">
              <li><p className="text-white text-lg mb-3">Location</p></li>
              <li>
                <p className="text-sm text-white">
                  New No.44,<br />
                  4th Street Extn.<br />
                  Gandhipuram - 641012
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
