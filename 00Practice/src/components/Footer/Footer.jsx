// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 text-center md:text-left">
          <p>© {new Date().getFullYear()} My App. All rights reserved.</p>
        </div>
        <div className="w-full md:w-1/3 text-center">
          <ul className="flex justify-center space-x-4">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-right">
          <p>Follow us on social media</p>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">Twitter</a>
            <a href="#" className="hover:text-gray-300">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
