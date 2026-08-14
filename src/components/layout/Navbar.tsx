import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import logoImg from '../../assets/stnetworkslogo.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
        
        {/* Left - Logo Image */}
        <Link to="/" className="flex items-center gap-3 group z-10">
          <img
            src={logoImg}
            alt="ST Networks"
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Center - Navigation Links */}
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
            onClick={() => scrollToSection('product-services')}
            className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors cursor-pointer"
          >
            Product & Services
          </button>

          {/* Career */}
          <Link to="/career" className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors">
            Career
          </Link>

          {/* Contact Us */}
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors cursor-pointer"
          >
            Contact Us
          </button>
        </nav>

        {/* Right - Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 cursor-pointer"
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
              scrollToSection('product-services');
            }}
            className="block w-full text-left py-2 text-slate-700 font-medium cursor-pointer"
          >
            Product & Services
          </button>
          <Link to="/career" onClick={() => setIsOpen(false)} className="block py-2 text-slate-700 font-medium">
            Career
          </Link>
          <button
            onClick={() => {
              setIsOpen(false);
              scrollToSection('contact');
            }}
            className="block w-full text-left py-2 text-slate-700 font-medium cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};