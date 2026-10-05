import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap, Award } from "lucide-react";

// Default fallback timeline items
const DEFAULT_TIMELINE = [
  {
    _id: "t1",
    title: "Java Full Stack Developer",
    description: "Architecting backend microservices with Java and Spring Boot, building scalable REST endpoints, and crafting modern client applications with React.",
    timeline: { from: "2024", to: "Present" }
  },
  {
    _id: "t2",
    title: "Software Engineering & Full Stack Projects",
    description: "Developed production-ready web applications, integrated SQL database schemas, optimized API endpoints, and implemented authentication flows.",
    timeline: { from: "2023", to: "2024" }
  },
  {
    _id: "t3",
    title: "Degree in Computer Applications",
    description: "Gained strong foundational principles in computer science, software engineering, algorithms, database management systems, and object-oriented programming.",
    timeline: { from: "2020", to: "2023" }
  }
];

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const fetchTimeline = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/timeline/getall",
          { withCredentials: true }
        );
        if (data && data.timelines && data.timelines.length > 0) {
          setTimeline(data.timelines);
        }
      } catch (error) {
        console.log("Timeline fetch error:", error);
      }
    };
    fetchTimeline();
  }, []);

  const displayTimeline = (timeline && timeline.length > 0) ? timeline : DEFAULT_TIMELINE;

  return (
    <section id="timeline" className="py-24 relative overflow-hidden bg-slate-100/60 dark:bg-[#090a0f]/40 transition-colors duration-300">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-indigo-700 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/20 inline-block mb-3 shadow-sm">
            CAREER & MILESTONES
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
            Experience & Journey
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-base sm:text-lg">
            Milestones, roles, and educational foundation in software development.
          </p>
        </motion.div>

        {/* Timeline Axis Container */}
        <div className="relative border-l border-indigo-300 dark:border-indigo-500/20 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {displayTimeline.map((element, index) => (
            <motion.div 
              key={element._id || index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-slate-50 dark:bg-[#050508] border-2 border-indigo-600 dark:border-indigo-500 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 group-hover:scale-125 transition-all duration-300 shadow-sm shadow-indigo-500/50"></div>
              
              {/* Timeline Surface Card */}
              <div className="bg-white/90 dark:bg-[#0d0e14]/80 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-lg shadow-slate-200/50 dark:shadow-xl group-hover:border-indigo-300 dark:group-hover:border-indigo-500/40 group-hover:bg-slate-50 dark:group-hover:bg-[#13141c] transition-all duration-300">
                
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                    {element.title}
                  </h3>
                  
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/20">
                    <Calendar size={12} />
                    {element.timeline?.from} — {element.timeline?.to ? element.timeline.to : "Present"}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {element.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Timeline;