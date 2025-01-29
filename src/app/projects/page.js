"use client";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiStar, FiFolder } from "react-icons/fi";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/huzaifayasin681/repos?sort=updated&direction=desc",
          {
            headers: {
              'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
            }
          }
        );
        const data = await response.json();
        setProjects(data.slice(0, 6));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={hasMounted ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my latest coding endeavors. From web apps to open-source contributions, 
            each project tells a story of problem-solving and innovation.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((skeleton) => (
              <div
                key={skeleton}
                className="h-64 bg-gray-800 rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : (
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={hasMounted ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardAnimation}
                className="relative group bg-gray-800 rounded-xl p-6 h-64 flex flex-col justify-between transform transition-all hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      {project.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      {project.homepage && (
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                          <FiExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description || "No description available"}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.topics?.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 bg-gray-700 text-xs text-purple-300 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <FiStar className="w-4 h-4" />
                      <span>{project.stargazers_count}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiFork className="w-4 h-4" />
                      <span>{project.forks_count}</span>
                    </div>
                    <span className="text-purple-400">{project.language}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/huzaifayasin681"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-lg hover:shadow-xl transition-shadow"
          >
            <FiGithub className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;