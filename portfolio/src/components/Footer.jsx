import React from "react";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-white/5 relative z-10 bg-slate-900 dark:bg-[#050508] text-slate-300 dark:text-slate-400 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800 dark:border-white/5">
          
          {/* Logo & Pitch */}
          <div className="text-center md:text-left">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer text-lg font-bold font-display tracking-tight text-white hover:text-indigo-400 transition-colors"
            >
              Kuresu Sahu
            </Link>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
              Java Full Stack Developer • Building scalable web applications
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 dark:text-slate-400 font-medium">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-white transition-colors">Home</Link>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-white transition-colors">About</Link>
            <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-white transition-colors">Skills</Link>
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-white transition-colors">Projects</Link>
            <Link to="timeline" smooth={true} duration={500} className="cursor-pointer hover:text-white transition-colors">Experience</Link>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a href="https://github.com/Kuresu-Sahu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-lg bg-white/10 dark:bg-white/5 text-slate-300 dark:text-slate-400 hover:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-colors">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/kuresu-sahu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/10 dark:bg-white/5 text-slate-300 dark:text-slate-400 hover:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="https://x.com/Kuresu_Sahu" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 rounded-lg bg-white/10 dark:bg-white/5 text-slate-300 dark:text-slate-400 hover:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-colors">
                <Twitter size={16} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-indigo-500/20 dark:bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600 hover:text-white border border-indigo-500/30 transition-all duration-300"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} Kuresu Sahu. All rights reserved.</p>
          <p className="flex items-center gap-1 font-mono">
            Crafted with React, Tailwind CSS & Java Full Stack Architecture.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;