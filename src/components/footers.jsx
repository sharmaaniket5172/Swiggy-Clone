// src/components/Footer.js
import React from 'react';

const Footers = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div className="footer-section">
            <h2 className="text-xl font-bold">Swiggy Clone</h2>
            <p>Your favorite food delivered fast at your door.</p>
          </div>
          <div className="footer-section">
            <h3 className="text-lg font-bold">Useful Links</h3>
            <ul>
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
              <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p>Email: support@swiggyclone.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>
        <div className="text-center mt-8">
          &copy; 2024 Swiggy Clone. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footers;
