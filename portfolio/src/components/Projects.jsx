import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, FolderGit2, Sparkles, Code } from "lucide-react";

// Default showcase projects if API server is disconnected
const DEFAULT_PROJECTS = [
  {
    _id: "p1",
    title: "Enterprise E-Commerce Full-Stack Platform",
    description: "Architected a scalable full-stack e-commerce system featuring Spring Boot REST services, JWT authentication, MySQL transactional order processing, and a modern React interface.",
    technologies: "Java, Spring Boot, React, MySQL, REST APIs, Tailwind CSS",
    gitRepoLink: "https://github.com/Kuresu-Sahu",
    projectLink: "#",
    projectBanner: { url: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop" },
    featured: true
  },
  {
    _id: "p2",
    title: "Real-Time Portfolio & Management System",
    description: "Built a centralized portfolio management suite with admin controls, live content management APIs, responsive dark mode UI, and image media storage.",
    technologies: "React, Node.js, Express, MongoDB, Axios, Framer Motion",
    gitRepoLink: "https://github.com/Kuresu-Sahu",
    projectLink: "#",
    projectBanner: { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" },
    featured: false
  },
  {
    _id: "p3",
    title: "RESTful Task & Workflow Automation Engine",
    description: "Designed microservice APIs for task scheduling, user role permissions, automated status tracking, and database indexing optimizations.",
    technologies: "Java, Spring Security, Hibernate, PostgreSQL, Postman",
    gitRepoLink: "https://github.com/Kuresu-Sahu",
    projectLink: "#",
    projectBanner: { url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop" },
    featured: false
  }
];

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000'}/api/v1/project/getall`,
          { withCredentials: true }
        );
        if (data && data.projects && data.projects.length > 0) {
          setProjects(data.projects);
        }
      } catch (error) {
        console.log("Projects fetch error:", error);
      }
    };
    fetchProjects();
  }, []);

  const displayProjects = (projects && projects.length > 0) ? projects : DEFAULT_PROJECTS;

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-[#050508] transition-colors duration-300">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-indigo-700 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/20 inline-block mb-3 shadow-sm">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-base sm:text-lg">
            A showcase of full-stack web applications, RESTful microservices, and client-side interfaces.
          </p>
        </motion.div>

        {/* 📦 ALL PROJECTS GRID (Equal Priority, 3 per row on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((element, index) => (
            <motion.div
              key={element._id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-[#0d0e14]/80 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-lg dark:shadow-xl flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:bg-slate-50 dark:hover:bg-[#13141c] transition-all duration-300 group"
            >
              <div>
                {/* Banner image */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900">
                  <img
                    src={element.projectBanner?.url || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"}
                    alt={element.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 dark:from-[#0d0e14] via-transparent to-transparent opacity-80"></div>
                </div>

                {/* Body content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                    {element.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                    {element.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {parseTechStack(element.technologies).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md border border-slate-200 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer links */}
              <div className="px-6 py-4 border-t border-slate-200/80 dark:border-white/5 flex items-center justify-between">
                {element.projectLink && (
                  <a
                    href={element.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1 transition-colors"
                  >
                    View Project <ArrowUpRight size={14} />
                  </a>
                )}
                {element.gitRepoLink && (
                  <a
                    href={element.gitRepoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                    title="GitHub Repository"
                  >
                    <Github size={16} />
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

// Helper function to split comma-separated technology string
function parseTechStack(techStr = "") {
  if (!techStr) return ["Java", "React", "SQL"];
  return techStr.split(",").map(t => t.trim()).filter(Boolean);
}

export default Projects;