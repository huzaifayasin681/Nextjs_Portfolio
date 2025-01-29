"use client";
import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiCloud, FiTool, FiStar } from "react-icons/fi";
import { 
  SiJavascript, SiReact, SiNodedotjs, SiPython, SiGit, 
  SiDocker, SiAmazon, SiPostgresql, SiTypescript, 
  SiGraphql, SiKubernetes, SiTerraform 
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
  const skillsCategories = [
    {
      title: "Frontend Mastery",
      icon: <FiCode className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React", level: 96, icon: <SiReact />},
        { name: "TypeScript", level: 92, icon: <SiTypescript /> },
        { name: "Next.js", level: 88, icon: <TbBrandNextjs /> },
        { name: "JavaScript", level: 98, icon: <SiJavascript /> }
      ]
    },
    {
      title: "Backend Expertise",
      icon: <FiDatabase className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      skills: [
        { name: "Node.js", level: 94, icon: <SiNodedotjs /> },
        { name: "Python", level: 85, icon: <SiPython /> },
        { name: "GraphQL", level: 88, icon: <SiGraphql /> },
        { name: "REST API", level: 97, icon: <FiCloud /> }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <FiCloud className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS", level: 89, icon: <SiAmazon /> },
        { name: "Docker", level: 91, icon: <SiDocker /> },
        { name: "Kubernetes", level: 82, icon: <SiKubernetes /> },
        { name: "Terraform", level: 85, icon: <SiTerraform /> }
      ]
    },
    {
      title: "Tools & DB",
      icon: <FiTool className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Git", level: 98, icon: <SiGit /> },
        { name: "PostgreSQL", level: 90, icon: <SiPostgresql /> },
        { name: "MongoDB", level: 88, icon: <FiDatabase /> },
        { name: "Linux", level: 93, icon: <FiTool /> }
      ]
    }
  ];

  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const SkillCard = ({ category }) => (
    <motion.div 
      className={`p-6 rounded-2xl bg-gradient-to-br ${category.color} relative overflow-hidden group transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <motion.div {...floatingAnimation} className="p-3 bg-white/10 rounded-xl">
            {category.icon}
          </motion.div>
          <h3 className="text-2xl font-bold text-white">{category.title}</h3>
        </div>
        
        <div className="space-y-5">
          {category.skills.map((skill, idx) => (
            <div key={idx} className="relative">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3 text-white/90">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="font-medium">{skill.name}</span>
                </div>
                <span className="text-white/80">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.8 }}
                  className="h-full bg-white rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Technical Arsenal
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Mastering the tools and technologies that power modern digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillsCategories.map((category, idx) => (
            <SkillCard key={idx} category={category} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center bg-white/10 px-8 py-4 rounded-full gap-4">
            <FiStar className="text-yellow-400 animate-pulse" />
            <span className="text-white/90">
              Currently leveling up: <strong className="text-purple-300">AWS Solutions Architecture</strong> 
              & <strong className="text-blue-300">Serverless Patterns</strong>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;