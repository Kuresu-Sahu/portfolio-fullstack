import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MouseFollower from "./components/MouseFollower";

const App = () => {
  return (
    <div className="font-sans text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-[#050508] min-h-screen relative overflow-x-hidden selection:bg-indigo-500/20 selection:text-indigo-700 dark:selection:bg-indigo-500/30 dark:selection:text-indigo-200 transition-colors duration-300">
      
      {/* Ambient Mouse Spotlight */}
      <MouseFollower />

      {/* Main Page Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </div>

    </div>
  );
};

export default App;
