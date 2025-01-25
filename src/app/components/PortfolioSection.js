'use client'
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A dynamic web application built using React and Node.js.',
      image: '/project1.jpg',
      link: '/projects/project-one',
    },
    {
      title: 'Project Two',
      description: 'A data visualization dashboard developed with Python and D3.js.',
      image: '/project2.jpg',
      link: '/projects/project-two',
    },
    {
      title: 'Project Three',
      description: 'An e-commerce website powered by the MERN stack.',
      image: '/project3.jpg',
      link: '/projects/project-three',
    },
  ];

  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const animation = useAnimation();

  React.useEffect(() => {
    if (inView) {
      animation.start('visible');
    } else {
      animation.start('hidden');
    }
  }, [inView, animation]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="portfolio"
      ref={ref}
      className="min-h-screen w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-16"
    >
      <div className="container mx-auto px-6 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">My Work</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={animation}
        >
          {projects.map((project, index) => (
            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.5}
              glareColor="#ffffff"
              glarePosition="all"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
            >
              <motion.div
                className="relative bg-gradient-to-br from-gray-800 to-gray-700 text-white shadow-2xl rounded-3xl overflow-hidden transform transition duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 1 }}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 md:h-60 object-cover rounded-t-3xl hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                  <motion.h3
                    className="absolute bottom-4 left-4 text-2xl md:text-3xl font-bold text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                </div>
                <div className="p-4 md:p-6 relative">
                  <p className="text-gray-300 text-sm md:text-base mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="text-yellow-400 font-semibold hover:underline hover:text-yellow-300"
                  >
                    View Details
                  </a>
                  <motion.div
                    className="absolute top-4 right-4 w-8 md:w-10 h-8 md:h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-yellow-500/50"
                    whileHover={{ scale: 1.3, rotate: 360 }}
                  >
                    <span className="text-black font-bold">+</span>
                  </motion.div>
                </div>
                <motion.div
                  className="absolute bottom-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-pink-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
