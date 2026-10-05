import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: 1, text: "Home", to: "home" },
    { id: 2, text: "About", to: "about" },
    { id: 3, text: "Skills", to: "skills" },
    { id: 4, text: "Projects", to: "projects" },
    { id: 5, text: "Experience", to: "timeline" },
    { id: 6, text: "Contact", to: "contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/90 dark:bg-[#050508]/85 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 py-3 shadow-md shadow-slate-200/50 dark:shadow-2xl dark:shadow-black/40" 
        : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-mono font-bold text-sm group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
              KS
            </div>
            <span className="text-lg font-bold font-display tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
              Kuresu Sahu
            </span>
            {/* <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 ml-2 hidden sm:inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse mr-1.5"></span>
              Open for opportunities
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-[#0d0e14]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200/80 dark:border-white/10 shadow-inner">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                activeClass="!text-indigo-600 dark:!text-white bg-indigo-50 dark:bg-indigo-500/20 border-indigo-200 dark:border-indigo-500/30 font-semibold"
                className="cursor-pointer text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border border-transparent hover:border-slate-200 dark:hover:border-white/10"
              >
                {item.text}
              </Link>
            ))}
          </nav>

          {/* Action CTAs + Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />

            <a
              href="/resume.pdf"
              download="Kuresu_Sahu_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-white/10 hover:border-indigo-300 dark:hover:border-indigo-500/40 bg-slate-100/80 dark:bg-white/5 hover:bg-slate-200/80 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs font-medium transition-all duration-300 flex items-center gap-1.5"
            >
              Resume <Download size={14} className="text-indigo-600 dark:text-indigo-400" />
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer px-4 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all duration-300 flex items-center gap-1 hover:shadow-indigo-500/40"
            >
              Hire Me <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 dark:bg-[#090a0f]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  activeClass="bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold border-l-2 border-indigo-600 dark:border-indigo-500 pl-4"
                  className="cursor-pointer text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 block px-3 py-2.5 rounded-lg text-sm font-medium transition-all hover:bg-slate-100 dark:hover:bg-white/5"
                >
                  {item.text}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
                <a
                  href="/resume.pdf"
                  download="Kuresu_Sahu_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 font-medium text-sm text-center flex justify-center items-center gap-2"
                >
                  Download Resume <Download size={16} />
                </a>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2.5 rounded-lg bg-indigo-600 text-white font-semibold text-sm text-center flex justify-center items-center gap-2 shadow-lg shadow-indigo-600/30"
                >
                  Get In Touch <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;