import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: -500, y: -500 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-[450px] h-[450px] rounded-full pointer-events-none z-0 blur-[120px] opacity-[0.07] dark:opacity-15 transition-opacity duration-300"
      animate={{
        x: mousePosition.x - 225,
        y: mousePosition.y - 225,
        backgroundColor: [
          "#6366f1", // Indigo
          "#06b6d4", // Cyan
          "#8b5cf6", // Violet
          "#6366f1"  // Indigo
        ],
      }}
      transition={{
        x: { type: "spring", stiffness: 120, damping: 25 },
        y: { type: "spring", stiffness: 120, damping: 25 },
        backgroundColor: { duration: 8, repeat: Infinity, ease: "linear" }
      }}
    />
  );
};

export default MouseFollower;