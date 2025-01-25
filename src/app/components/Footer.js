import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">My Portfolio</h3>
            <p className="text-gray-400">Building innovative solutions for the web.</p>
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} className="text-gray-400 hover:text-white" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} className="text-gray-400 hover:text-white" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="text-gray-400 hover:text-white" />
            </Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="text-gray-400 hover:text-white" />
            </Link>
          </div>
          <div>
            <p className="text-gray-400">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
