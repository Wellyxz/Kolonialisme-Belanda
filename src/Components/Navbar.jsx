import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Array Navigasi (Sudah termasuk Warisan Budaya)
  const navItems = [
    { name: "Beranda", path: "/" },
    { name: "Latar Belakang", path: "/latarbelakang" },
    { name: "Linimasa", path: "/timeline" },
    { name: "Tokoh", path: "/tokoh" },
    { name: "Galeri", path: "/galeri" },
    { name: "Dampak", path: "/dampak" },
    { name: "Warisan Budaya", path: "/warisan-budaya" }, // <-- ITEM BARU
  ];
  
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#0f1724]/90 fixed top-0 left-0 w-full z-40 shadow-xl backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        
        {/* Nama Website/Logo */}
        <Link 
          to="/" 
          className="text-3xl font-bold text-yellow-500 tracking-wider font-serif hover:text-yellow-600 transition duration-300"
          onClick={handleLinkClick}
        >
          Jejak Nusantara
        </Link>
        
        {/* 1. Menu Navigasi Desktop */}
        <div className="space-x-8 hidden md:flex items-center">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path} 
              className="text-gray-300 hover:text-yellow-500 transition duration-300 text-lg font-medium tracking-wide"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* 2. Tombol Menu Hamburger */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-yellow-500 hover:text-yellow-600 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* 3. Menu Mobile Dropdown */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
        // Menaikkan max-h agar muat lebih banyak item
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#1c1d21] shadow-2xl">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={handleLinkClick}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-yellow-500 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;