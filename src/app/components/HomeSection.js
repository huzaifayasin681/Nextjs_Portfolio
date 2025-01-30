"use client"
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: Math.random() * 30 + 10,
              height: Math.random() * 30 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.5, 0],
              scale: [1, 0.5]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 gap-12 z-10">
        {/* Left Section - Introduction */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold leading-tight mb-4"
            variants={itemVariants}
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Huzaifa</span>
          </motion.h1>
          
          <motion.div 
            className="text-xl md:text-2xl mb-8 min-h-[60px]"
            variants={itemVariants}
          >
            <span className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              {typedText}
            </span>
            <span className="blinking-cursor ml-1">|</span>
          </motion.div>

          {/* Call-to-Action Buttons */}
          <motion.div 
            className="flex gap-6 justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social Media Links */}
          <motion.div 
            className="flex gap-8 mt-12 justify-center md:justify-start"
            variants={itemVariants}
          >
            {[
              { icon: <FaGithub />, link: "https://github.com" },
              { icon: <FaLinkedin />, link: "https://linkedin.com" },
              { icon: <FaTwitter />, link: "https://twitter.com" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.2 }}
                className="text-3xl bg-white/10 p-4 rounded-full backdrop-blur-sm hover:text-yellow-400 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Section - Profile Image */}
        <motion.div 
          className="flex-1 flex justify-center items-center relative"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-2xl opacity-30 animate-pulse" />
            <div className="relative rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
              <Image
                src="/profile.jpeg"
                alt="Profile Image"
                width={500}
                height={500}
                className="object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white/5 px-6 py-2 rounded-full backdrop-blur-sm border border-white/10">
              <span className="text-sm font-semibold">Available for work</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FaArrowDown className="text-2xl text-white/80" />
        <span className="text-sm text-white/80">Scroll Down</span>
      </motion.div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-purple-900/30 pointer-events-none" />
    </section>
  );
};

export default HomeSection;