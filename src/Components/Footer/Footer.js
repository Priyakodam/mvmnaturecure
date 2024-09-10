// src/Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="about">
          <h3>About</h3>
          <p>
            We are committed to providing the best service and products to our customers. Our goal is to exceed your expectations with quality and professionalism.
          </p>
        </div>
        <div className="contact-us">
          <h3>Contact Us</h3>
          <p>Email: support@mywebsite.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 1234 Street Name, City, State, 56789</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
