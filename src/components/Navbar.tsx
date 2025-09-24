import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm shadow-temple border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
            <img src={logo} alt="MANA POOJA" className="h-10 w-10" />
            <div>
              <h1 className="text-xl font-bold text-primary font-telugu-serif">MANA POOJA</h1>
              <p className="text-xs text-muted-foreground">Traditional Spiritual Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
            
            {/* Phone Numbers */}
            <div className="flex items-center space-x-4 text-sm">
              <a
                href="tel:+919989101037"
                className="flex items-center space-x-1 text-primary hover:text-primary-glow transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">99891 01037</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border animate-fade-in">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-border mt-2">
              <a
                href="tel:+919989101037"
                className="flex items-center space-x-2 px-3 py-2 text-primary hover:text-primary-glow transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">99891 01037</span>
              </a>
              <a
                href="tel:+918886207347"
                className="flex items-center space-x-2 px-3 py-2 text-primary hover:text-primary-glow transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">88862 07347</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;