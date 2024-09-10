// src/Header.js

import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS for styling

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="logo">
        <h1>Xecutables</h1>
      </div>
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/service">Service</a>
        <a href="/contact">Contact Us</a>
      </nav>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
