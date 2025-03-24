import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <span className="font-display text-xl font-medium tracking-tight">MAKHANA</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          <a href="#home" className="nav-link nav-link-active">
            Home
          </a>
          <a href="#news" className="nav-link">
            News & Media
          </a>
          <a href="#about" className="nav-link">
            About Us
          </a>
          <a href="#blog" className="nav-link">
            Blogs
          </a>
          <a href="#contact" className="nav-link">
            Contact Us
          </a>
          <a href="#products" className="buy-now-btn">
            Buy Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed bottom-0 left-0 right-0 top-16 flex flex-col bg-white p-4 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col space-y-4 p-4">
          <a href="#home" className="text-lg font-medium" onClick={toggleMenu}>
            Home
          </a>
          <a href="#news" className="text-lg font-medium" onClick={toggleMenu}>
            News & Media
          </a>
          <a href="#about" className="text-lg font-medium" onClick={toggleMenu}>
            About Us
          </a>
          <a href="#blog" className="text-lg font-medium" onClick={toggleMenu}>
            Blogs
          </a>
          <a href="#contact" className="text-lg font-medium" onClick={toggleMenu}>
            Contact Us
          </a>
          <a
            href="#products"
            className="mt-4 rounded-full bg-primary px-6 py-3 text-center text-lg font-medium text-white"
            onClick={toggleMenu}
          >
            Buy Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;