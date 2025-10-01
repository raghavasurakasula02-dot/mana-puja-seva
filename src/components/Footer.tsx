import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Globe, Mail } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="MANA PUJA" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold font-telugu-serif">MANA PUJA</h3>
                <p className="text-sm opacity-90">Traditional Spiritual Services</p>
              </div>
            </div>
            <p className="text-sm opacity-75 leading-relaxed">
              Professional Hindu spiritual services by Guru Garu. Traditional homams, 
              abhishekams, kalyanams, and vratams for Telugu devotees.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-sm hover:text-accent transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block text-sm hover:text-accent transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                About Guru Garu
              </Link>
              <Link 
                to="/services" 
                className="block text-sm hover:text-accent transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Our Services
              </Link>
              <Link 
                to="/contact" 
                className="block text-sm hover:text-accent transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <a
                href="tel:+919989101037"
                className="flex items-center space-x-2 text-sm hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+91 99891 01037</span>
              </a>
              <a
                href="tel:+918886207347"
                className="flex items-center space-x-2 text-sm hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+91 88862 07347</span>
              </a>
              <a
                href="https://www.manapuja.in"
                className="flex items-center space-x-2 text-sm hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="h-4 w-4" />
                <span>www.manapuja.in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-sacred opacity-30"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm opacity-75">
            <p>&copy; 2025 MANA PUJA. All rights reserved.</p>
          </div>
          
          {/* Legal Links */}
          <div className="flex space-x-6 text-sm">
            <Link 
              to="/privacy" 
              className="hover:text-accent transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="hover:text-accent transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Terms of Service
            </Link>
            <Link 
              to="/cookies" 
              className="hover:text-accent transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;