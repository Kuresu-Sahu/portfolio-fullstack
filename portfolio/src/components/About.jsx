import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, Layers, MapPin, Sparkles } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Server className="text-indigo-600 dark:text-indigo-400" size={22} />,
      title: "Backend Architecture",
      description: "Engineering resilient RESTful services and microservices using Java & Spring Boot."
    },
    {
      icon: <Code2 className="text-cyan-600 dark:text-cyan-400" size={22} />,
      title: "Frontend Engineering",
      description: "Crafting fluid, high-performance web applications with React, Tailwind, and JavaScript."
    },
    {
      icon: <Database className="text-purple-600 dark:text-purple-400" size={22} />,
      title: "Data & Systems Design",
      description: "Designing optimized SQL schemas, managing relational databases, and writing clean queries."
    },
    {
      icon: <Layers className="text-emerald-600 dark:text-emerald-400" size={22} />,
      title: "Full Stack Integration",
      description: "Connecting complex server APIs with intuitive user interfaces for end-to-end applications."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-100/70 dark:bg-[#090a0f]/60 transition-colors duration-300">
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
            About Me
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
            Developer Identity & Philosophy
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-base sm:text-lg leading-relaxed">
            Passionate software engineer focused on building clean, performant web applications and robust backend architectures.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Narrative Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white/90 dark:bg-[#0d0e14]/90 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 p-8 rounded-3xl flex flex-col justify-between shadow-xl shadow-slate-200/50 dark:shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">Full Stack Software Engineer</h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin size={12} className="text-indigo-600 dark:text-indigo-400" /> Bangalore, India
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                <p>
                  As a <strong className="text-slate-900 dark:text-white font-semibold">Java Full Stack Developer</strong>, I bridge the gap between complex server logic and modern web interfaces. My focus is on writing scalable code, clean APIs, and maintaining strong software design principles.
                </p>
                <p>
                  I enjoy solving technical challenges in database performance, state management, and application security. Whether architecting backend microservices or building interactive web components, I prioritize user experience and application reliability.
                </p>
              </div>
            </div>

            {/* Quick Metrics / Focus Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-8 mt-8 border-t border-slate-200 dark:border-white/10">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
                <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400">CORE FOCUS</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white mt-1">Java & Spring</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
                <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400">UI STACK</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white mt-1">React & Tailwind</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 col-span-2 sm:col-span-1">
                <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400">DATABASES</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white mt-1">SQL & Relational</div>
              </div>
            </div>

          </motion.div>

          {/* Highlights 2x2 Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/90 dark:bg-[#0d0e14]/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 p-5 rounded-2xl hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all duration-300 shadow-sm group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
