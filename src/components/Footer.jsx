import React from 'react';
import { Link } from 'react-scroll';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              The future of EV charging stations with premium amenities and seamless integration.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="charging" spy={true} smooth={true} duration={500} className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">
                  Charging Stations
                </Link>
              </li>
              <li>
                <Link to="food" spy={true} smooth={true} duration={500} className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">
                  Food Court
                </Link>
              </li>
              <li>
                <Link to="park" spy={true} smooth={true} duration={500} className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">
                  Recreation
                </Link>
              </li>
              <li>
                <Link to="contact" spy={true} smooth={true} duration={500} className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div id="contact">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400">+91 1234567890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400">info@evhub.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400">Bangalore, India</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="social-icon">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400" />
              </a>
              <a href="#" className="social-icon">
                <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400" />
              </a>
              <a href="#" className="social-icon">
                <Instagram className="h-6 w-6 text-gray-400 hover:text-blue-400" />
              </a>
              <a href="#" className="social-icon">
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-blue-400" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Zap className="h-6 w-6 text-blue-400 mr-2" />
            <span className="text-xl font-bold text-blue-400">EVHub</span>
          </div>
          <p className="text-gray-500">© 2025 EVHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;