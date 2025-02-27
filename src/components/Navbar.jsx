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
          <div className="flex items-center">
            <Zap className="h-6 w-6 text-blue-400 mr-2" />
            <span className="text-xl font-bold text-blue-400">EVHub</span>
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

      {/* Mobile Side Menu */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-800">
          <div className="flex items-center">
            <Zap className="h-6 w-6 text-blue-400 mr-2" />
            <span className="text-xl font-bold text-blue-400">EVHub</span>
          </div>
          <button 
            className="text-white focus:outline-none" 
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-4">
          <ul className="space-y-4">
            <li>
              <Link 
                to="home" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className="block py-2 hover:text-blue-400 transition-colors"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="charging" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className="block py-2 hover:text-blue-400 transition-colors"
                onClick={closeMobileMenu}
              >
                Charging
              </Link>
            </li>
            <li>
              <Link 
                to="food" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className="block py-2 hover:text-blue-400 transition-colors"
                onClick={closeMobileMenu}
              >
                Food & Shopping
              </Link>
            </li>
            <li>
              <Link 
                to="stay" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className="block py-2 hover:text-blue-400 transition-colors"
                onClick={closeMobileMenu}
              >
                Stay
              </Link>
            </li>
            <li>
              <Link 
                to="park" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className="block py-2 hover:text-blue-400 transition-colors"
                onClick={closeMobileMenu}
              >
                Park
              </Link>
            </li>
            <li>
              <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className="block py-2 hover:text-blue-400 transition-colors"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;