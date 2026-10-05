import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Server, Database, Wrench, Layers } from "lucide-react";

// Default fallback skills if API data is loading/empty
const DEFAULT_SKILLS = [
  { _id: "1", name: "Java", category: "Backend & Core", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { _id: "2", name: "Spring Boot", category: "Backend & Core", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { _id: "3", name: "REST APIs", category: "Backend & Core", level: "Advanced", icon: null },
  { _id: "4", name: "React.js", category: "Frontend", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { _id: "5", name: "JavaScript", category: "Frontend", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { _id: "6", name: "HTML5 & CSS3", category: "Frontend", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { _id: "7", name: "Tailwind CSS", category: "Frontend", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { _id: "8", name: "SQL", category: "Databases & Tools", level: "Advanced", icon: null },
  { _id: "9", name: "MySQL", category: "Databases & Tools", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { _id: "10", name: "MongoDB", category: "Databases & Tools", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { _id: "11", name: "Git & GitHub", category: "Databases & Tools", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { _id: "12", name: "Postman", category: "Databases & Tools", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
];

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/softwareapplication/getall",
          { withCredentials: true }
        );
        if (data && data.softwareApplications && data.softwareApplications.length > 0) {
          setSkills(data.softwareApplications);
        }
      } catch (error) {
        console.log("Skills fetch error:", error);
      }
    };
    fetchSkills();
  }, []);

  // Use fetched skills if present, else fallback
  const displaySkills = (skills && skills.length > 0) 
    ? skills.map(item => ({
        _id: item._id,
        name: item.name,
        svg: item.svg?.url,
        category: getCategoryForSkill(item.name)
      }))
    : DEFAULT_SKILLS;

  const categories = ["All", "Backend & Core", "Frontend", "Databases & Tools"];

  const filteredSkills = activeTab === "All" 
    ? displaySkills 
    : displaySkills.filter(item => item.category === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs font-mono tracking-widest text-indigo-700 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/20 inline-block mb-3 shadow-sm">
            TECHNICAL STACK
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-base sm:text-lg">
            Organized tools and frameworks utilized across backend services and frontend interfaces.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all duration-300 ${
                activeTab === cat
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20 border border-indigo-600"
                  : "bg-white dark:bg-[#0d0e14] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((element, index) => {
              const iconUrl = element.svg || element.icon;
              return (
                <motion.div
                  layout
                  key={element._id || index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                  className="bg-white/90 dark:bg-[#0d0e14]/80 backdrop-blur-md p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-lg flex flex-col items-center justify-center gap-3 group hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:bg-slate-50 dark:hover:bg-[#13141c] transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 group-hover:border-indigo-300 dark:group-hover:border-indigo-500/30 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 transition-all duration-300 p-2.5">
                    {iconUrl ? (
                      <img
                        src={iconUrl}
                        alt={element.name}
                        className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.4)] transition-all duration-300"
                      />
                    ) : (
                      <Code2 className="text-indigo-600 dark:text-indigo-400" size={24} />
                    )}
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-sm group-hover:text-indigo-600 dark:group-hover:text-white transition-colors">
                      {element.name}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-500 mt-0.5 block">
                      {element.category || "Development"}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

// Helper function to map skill names to categories
function getCategoryForSkill(name = "") {
  const n = name.toLowerCase();
  if (n.includes("java") || n.includes("spring") || n.includes("rest") || n.includes("express") || n.includes("node") || n.includes("python")) {
    return "Backend & Core";
  }
  if (n.includes("react") || n.includes("js") || n.includes("html") || n.includes("css") || n.includes("tailwind") || n.includes("frontend")) {
    return "Frontend";
  }
  if (n.includes("sql") || n.includes("mysql") || n.includes("mongo") || n.includes("git") || n.includes("postman") || n.includes("docker")) {
    return "Databases & Tools";
  }
  return "Backend & Core";
}

export default Skills;