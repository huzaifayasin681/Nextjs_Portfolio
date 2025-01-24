"use client"
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useState, useEffect } from "react";

const HomeSection = () => {
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  const textArray = [
    "Next.js Developer",
    "UI/UX Enthusiast",
    "Creative Problem Solver",
  ];

  useEffect(() => {
    const typingEffect = setInterval(() => {
      setTypedText((prev) => {
        if (prev.length < textArray[textIndex].length) {
          return textArray[textIndex].slice(0, prev.length + 1);
        } else {
          clearInterval(typingEffect);
          setTimeout(() => {
            setTypedText("");
            setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
          }, 1500);
          return prev;
        }
      });
    }, 100);

    return () => clearInterval(typingEffect);
  }, [typedText, textIndex]);

  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-indigo-700 to-blue-600 text-white min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 gap-12">
        {/* Left Section - Introduction */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Hi, I'm <span className="text-yellow-300">Huzaifa</span>
          </h1>
          <div className="text-lg md:text-xl mb-6">
            <span className="font-semibold">{typedText}</span>
            <span className="blinking-cursor">|</span>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transform hover:scale-105 transition">
              View My Work
            </button>
            <button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition">
              Contact Me
            </button>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6 mt-8 justify-center md:justify-start">
            <a
              href="https://github.com/huzaifayasin681"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 transition text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 transition text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 transition text-2xl"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl">
            <Image
              src="/profile.jpeg" // Replace with your profile image
              alt="Profile Image"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>

          {/* Decorative Animated Circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 md:w-56 md:h-56 bg-yellow-400 rounded-full opacity-30 animate-pulse blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 md:w-56 md:h-56 bg-blue-300 rounded-full opacity-20 animate-bounce blur-3xl"></div>
        </div>
      </div>

      {/* Full-Screen Decorative Waves */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-32"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fff"
            fillOpacity="0.1"
            d="M0,192L1440,288L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HomeSection;
