"use client";
import React, { useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 mb-2 md:absolute md:w-full md:px-16">
      {/* Left Section (Logo) */}
      <div className="text-xl font-bold text-gray-800 md:flex-grow">
        WebX
      </div>

      {/* Right Section (Language and Drawer Icon) */}
      <div className="flex items-center justify-end md:justify-between w-full md:w-auto">
        {/* Language Button for Desktop */}
        <div className="hidden md:block z-10 ">
          <button className="flex px-3 py-1 text-[#212832] rounded-md items-center">
            En
            <RiArrowDropDownLine />
          </button>
        </div>

        {/* Drawer Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleDrawer}>
            <HiOutlineMenuAlt3 className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>

      {/* Drawer Menu */}
      {isDrawerOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-4 z-50">
          <button onClick={toggleDrawer} className="text-red-500 text-lg">
            Close
          </button>
          <ul className="mt-4 space-y-4">
            <li>
              <a href="#" className="text-gray-800">Home</a>
            </li>
            <li>
              <a href="#" className="text-gray-800">About</a>
            </li>
            <li>
              <a href="#" className="text-gray-800">Services</a>
            </li>
            <li>
              <a href="#" className="text-gray-800">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;