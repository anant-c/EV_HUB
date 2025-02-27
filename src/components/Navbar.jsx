import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Zap, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <Zap className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-xl font-bold text-blue-400">batteryfy</span>
            </div>
            <span className="text-blue-200 font-bold text-lg pl-8 ">your life!!</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-blue-400 transition-colors">Home</Link>
            <Link to="charging" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-blue-400 transition-colors">Charging</Link>
            <Link to="food" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-blue-400 transition-colors">Food & Shopping</Link>
            <Link to="stay" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-blue-400 transition-colors">Stay</Link>
            <Link to="park" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-blue-400 transition-colors">Park</Link>
            <Link to="contact" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-blue-400 transition-colors">Contact</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button 
              className="md:hidden mr-4 text-white focus:outline-none" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors duration-300">
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
