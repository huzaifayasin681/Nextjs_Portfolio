"use client"
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const services = [
    {
      title: 'MERN Stack Development',
      description: 'Build dynamic, full-stack web applications using MongoDB, Express.js, React.js, and Node.js.',
      icon: '🌐',
    },
    {
      title: 'Cyber Security',
      description: 'Ensure robust security for your digital assets with advanced cybersecurity practices.',
      icon: '🔒',
    },
    {
      title: 'Data Science',
      description: 'Leverage data to gain actionable insights and make data-driven decisions.',
      icon: '📊',
    },
    {
      title: 'Python Automation',
      description: 'Automate repetitive tasks and workflows using Python scripts.',
      icon: '⚙️',
    },
  ];

  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  React.useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0, scale: 1, rotate: 0 });
    } else {
      animation.start({ opacity: 0, y: 50, scale: 0.9, rotate: -5 });
    }
  }, [inView, animation]);

  return (
    <section
      id="services"
      ref={ref}
      className="h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white"
    >
      <div className="container mx-auto px-6 h-full flex flex-col justify-center">
        <h2 className="text-5xl font-extrabold text-center mb-12">What I Do</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50, scale: 0.9, rotate: -5 }}
          animate={animation}
          transition={{ duration: 0.7, staggerChildren: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 text-white shadow-2xl rounded-3xl p-8 text-center transform hover:scale-110 hover:shadow-xl transition duration-300"
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
              <motion.div
                className="text-6xl mb-4 text-yellow-400"
                animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
