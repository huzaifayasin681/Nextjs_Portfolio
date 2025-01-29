"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiCode, FiHeart, FiGlobe, FiBookOpen, FiShield } from "react-icons/fi";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-700 flex items-center justify-center p-6">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="max-w-6xl w-full bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 space-y-10"
      >
        {/* Profile Section */}
        <motion.div variants={slideUp} className="relative group text-center">
          <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          <img
            src="/profile.jpeg"
            alt="Huzaifa"
            className="w-40 h-40 mx-auto rounded-full border-4 border-white shadow-2xl transform hover:rotate-3 transition duration-500"
          />
          <h1 className="mt-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Hi, I'm Huzaifa
          </h1>
          <p className="mt-4 text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Full Stack Developer & Cyber Security Enthusiast 🚀<br/>
            Turning coffee into code and ideas into digital reality
          </p>
        </motion.div>

        {/* Skills & Hobbies Grid */}
        <motion.div variants={slideUp} className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="p-6 bg-indigo-50 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <FiCode className="w-8 h-8 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-800">Technical Arsenal</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['MERN Stack', 'Python/Django', 'Next.js', 'TypeScript', 'Cybersecurity', 'AWS'].map((skill, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Passions & Hobbies */}
          <div className="p-6 bg-pink-50 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <FiHeart className="w-8 h-8 text-pink-600" />
              <h2 className="text-2xl font-bold text-gray-800">Passions & Hobbies</h2>
            </div>
            <div className="space-y-4">
              {[
                { icon: <FiGlobe />, text: 'Exploring new technologies' },
                { icon: <FiBookOpen />, text: 'Reading tech journals' },
                { icon: <FiShield />, text: 'Ethical hacking challenges' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-purple-50 transition-colors">
                  <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">{item.icon}</div>
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div variants={slideUp} className="space-y-6">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Notable Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Google IT Support",
                link: "https://coursera.org/share/ade4898b4e23c566edb6119f6ff95ea2",
                icon: <FiAward className="w-6 h-6" />
              },
              {
                title: "Meta Frontend Developer",
                link: "https://coursera.org/share/212ad706fc459faf4ee5f59e9ba69d5a",
                icon: <FiAward className="w-6 h-6" />
              },
              {
                title: "Cyber Security Essentials",
                link: "#",
                icon: <FiAward className="w-6 h-6" />
              }
            ].map((achievement, index) => (
              <a
                key={index}
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-100 text-purple-600 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-500">View Certificate →</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div variants={slideUp} className="text-center space-y-4">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 p-1 rounded-full">
            <div className="bg-white px-8 py-3 rounded-full">
              <p className="text-lg font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                "Striving for growth and creativity in every step."
              </p>
            </div>
          </div>
          <p className="text-gray-600 italic">- Huzaifa</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;