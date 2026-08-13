import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Network, ChevronDown, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const navigate = useNavigate();

  const scrollToProducts = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('product-services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
        
        {/* Left - Logo */}
        <Link to="/" className="flex items-center gap-3 group z-10">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <Network className="w-6 h-6" />
          </div>
          <span className="font-black text-xl text-slate-900 tracking-wider">
            ST <span className="text-emerald-600">NETWORK</span>
          </span>
        </Link>

        {/* Center - Perfectly Centered Navigation Links */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {/* About Us Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setAboutDropdown(true)}
            onMouseLeave={() => setAboutDropdown(false)}
          >
            <button className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-emerald-600 py-2 transition-colors cursor-pointer">
              About Us <ChevronDown className="w-4 h-4" />
            </button>
            {aboutDropdown && (
              <div className="absolute top-full left-0 w-48 bg-white border border-slate-200 rounded-xl shadow-lg py-2 z-50">
                <Link
                  to="/about"
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                >
                  Company Info
                </Link>
                <Link
                  to="/leadership"
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                >
                  Leadership
                </Link>
              </div>
            )}
          </div>

          {/* Product & Services */}
          <button
            onClick={scrollToProducts}
            className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors cursor-pointer"
          >
            Product & Services
          </button>

          {/* Career */}
          <Link to="/about" className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors">
            Career
          </Link>

          {/* Contact Us */}
          <a href="#contact" className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors">
            Contact Us
          </a>
        </nav>

        {/* Right Spacer for Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 text-slate-700 font-medium">
            About Us - Company Info
          </Link>
          <Link to="/leadership" onClick={() => setIsOpen(false)} className="block py-2 text-slate-700 font-medium">
            Leadership
          </Link>
          <button
            onClick={() => {
              setIsOpen(false);
              scrollToProducts();
            }}
            className="block w-full text-left py-2 text-slate-700 font-medium"
          >
            Product & Services
          </button>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 text-slate-700 font-medium">
            Career
          </Link>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 text-slate-700 font-medium">
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
};