"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "skills", label: "Skills", href: "/skills" },
    { id: "contact", label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-3xl font-bold tracking-wide">
          <Link href="/">MyPortfolio</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="relative group hover:text-yellow-300 transition-colors duration-300"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className="hidden md:flex space-x-4 text-2xl">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Call-to-Action Button */}
        <div className="hidden md:flex">
          <Link
            href="#contact"
            className="bg-white text-purple-700 font-semibold px-4 py-2 rounded-full hover:bg-yellow-300 hover:text-purple-800 transition-all duration-300"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 py-4">
          {navItems.map((item) => (
            <li key={item.id} className="my-2">
              <Link
                href={item.href}
                className="text-lg font-semibold hover:text-yellow-300 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <div className="flex space-x-4 mt-4 text-2xl">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
