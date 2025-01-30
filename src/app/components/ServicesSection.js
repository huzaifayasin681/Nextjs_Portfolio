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
      color: 'from-cyan-400 to-blue-600',
    },
    {
      title: 'Cyber Security',
      description: 'Ensure robust security for your digital assets with advanced cybersecurity practices.',
      icon: '🔒',
      color: 'from-emerald-400 to-green-600',
    },
    {
      title: 'Data Science',
      description: 'Leverage data to gain actionable insights and make data-driven decisions.',
      icon: '📊',
      color: 'from-amber-400 to-orange-600',
    },
    {
      title: 'Python Automation',
      description: 'Automate repetitive tasks and workflows using Python scripts.',
      icon: '⚙️',
      color: 'from-rose-400 to-pink-600',
    },
  ];

  const { ref, inView } = useInView({ threshold: 0.1 });
  const animation = useAnimation();

  React.useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0 });
    } else {
      animation.start({ opacity: 0, y: 50 });
    }
  }, [inView, animation]);

  return (
    <section
      id="services"
      ref={ref}
      className="relative h-auto bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 py-24 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 50 + 20,
              height: Math.random() * 50 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0],
              scale: [1, 0.5],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={animation}
          className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          My Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={animation}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl" />
              <motion.div
                className="relative bg-gradient-to-br hover:bg-gradient-to-tr backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full transform transition-all duration-300 group-hover:-translate-y-2 shadow-2xl"
                style={{
                  background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                }}
                whileHover={{ scale: 1.02, rotate: Math.random() * 4 - 2 }}
              >
                <motion.div
                  className="text-6xl mb-6 flex justify-center"
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 2 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="drop-shadow-2xl">{service.icon}</span>
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {service.description}
                </p>
                <div className="absolute inset-0 border-2 border-white/5 rounded-3xl pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Decorative floating line */}
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[120%] h-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-xl" />
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-purple-900/20 pointer-events-none" />
    </section>
  );
};

export default Services;