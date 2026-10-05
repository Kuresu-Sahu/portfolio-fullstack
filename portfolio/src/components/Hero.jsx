import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Instagram, Twitter, Download, ArrowRight, Code2, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";

const Hero = () => {
  const [_user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000'}/api/v1/user/portfolio/me`
        );
        setUser(data.user);
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen pt-28 pb-16 flex items-center justify-center relative overflow-hidden bg-grid-pattern transition-colors duration-300"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/15 dark:bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/15 dark:bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* LEFT SIDE: Hero Info */}
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-mono mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
            <span>Open to Software Developer Opportunities</span>
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-3">
              KURESU SAHU
            </h1>
            
            <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6 h-10 flex items-center justify-center lg:justify-start gap-2">
              <Terminal size={22} className="text-indigo-600 dark:text-indigo-400 hidden sm:inline" />
              <TypeAnimation
                sequence={[
                  "Java Full Stack Developer", 2500,
                  "Software Engineer", 2500,
                  "Spring Boot & React Specialist", 2500,
                  "Backend Architecture & APIs", 2500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-800 dark:from-indigo-300 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent"
              />
            </div>
          </motion.div>

          {/* Core Pitch */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 mb-8 text-base sm:text-lg leading-relaxed font-normal"
          >
            Building modern web applications with <span className="text-indigo-600 dark:text-indigo-300 font-semibold">Java</span>, <span className="text-indigo-600 dark:text-indigo-300 font-semibold">Spring Boot</span>, <span className="text-cyan-600 dark:text-cyan-300 font-semibold">React</span>, and <span className="text-indigo-600 dark:text-indigo-300 font-semibold">SQL</span>. Engineering robust backend services and seamless user interfaces.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
          >
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-300 shadow-md shadow-indigo-600/20 hover:shadow-indigo-500/40 flex items-center gap-2 group"
            >
              View Projects 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href="/resume.pdf"
              download="Kuresu_Sahu_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-white/10 hover:border-indigo-400 dark:hover:border-indigo-500/40 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all duration-300 flex items-center gap-2 shadow-sm"
            >
              Download Resume <Download size={16} className="text-indigo-600 dark:text-indigo-400" />
            </a>

            <a 
              href="#contact" 
              className="px-6 py-3 rounded-xl border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 font-semibold text-sm transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-3 justify-center lg:justify-start"
          >
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500 mr-2">CONNECT //</span>
            <SocialButton href="https://github.com/Kuresu-Sahu" icon={<Github size={18} />} label="GitHub" />
            <SocialButton href="https://www.linkedin.com/in/kuresu-sahu/" icon={<Linkedin size={18} />} label="LinkedIn" />
            <SocialButton href="https://x.com/Kuresu_Sahu" icon={<Twitter size={18} />} label="Twitter" />
            <SocialButton href="https://www.instagram.com/innocent._.chandan/" icon={<Instagram size={18} />} label="Instagram" />
          </motion.div>

        </div>

        {/* RIGHT SIDE: Developer Profile Showcase */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end relative">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-[280px] h-[330px] sm:w-[340px] sm:h-[400px] lg:w-[380px] lg:h-[440px]"
          >
            {/* Outer Subtle Halo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-cyan-500/20 rounded-3xl blur-2xl opacity-60"></div>
            
            {/* Glass Container */}
            <div className="relative w-full h-full rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-[#0d0e14]/80 backdrop-blur-xl p-3 shadow-xl dark:shadow-2xl overflow-hidden group">
              
              {/* Top Bar Details */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 dark:border-white/5 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">developer_profile.java</span>
              </div>

              {/* Profile Image with subtle zoom */}
              <div className="relative w-full h-[calc(100%-48px)] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950">
                <img 
                  src="/profile.png" 
                  alt="Kuresu Sahu" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 dark:from-[#0d0e14] via-transparent to-transparent opacity-80"></div>
                
                {/* Floating Tech Badges */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-white/80 dark:bg-black/60 backdrop-blur-md border border-slate-200 dark:border-white/10 text-[11px] font-mono text-indigo-700 dark:text-indigo-300 shadow-sm">
                    Java & Spring Boot
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/80 dark:bg-black/60 backdrop-blur-md border border-slate-200 dark:border-white/10 text-[11px] font-mono text-cyan-700 dark:text-cyan-300 shadow-sm">
                    React & SQL
                  </span>
                </div>
              </div>

            </div>

            {/* Bottom Status Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-4 -left-6 bg-white/95 dark:bg-[#13141c]/90 backdrop-blur-md border border-slate-200/80 dark:border-white/10 px-4 py-2.5 rounded-xl shadow-lg dark:shadow-xl hidden sm:flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <Code2 size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">Full Stack Architecture</p>
                <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">REST APIs & Modern UIs</p>
              </div>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

// Social Icon Button
const SocialButton = ({ href, icon, label }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
    >
      {icon}
    </a>
  );
};

export default Hero;