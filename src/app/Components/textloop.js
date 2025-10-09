"use client";
import React from "react";
import { motion } from "framer-motion";

// ✅ Word arrays
const names1 = [
  "Compatibility Scoring",
  "Science-Backed Psychology",
  "Modern Voice Experience",
  "Compatibility Scoring",
  "Science-Backed Psychology",
  "Modern Voice Experience",
];

const names2 = [
  "Compliments & Genie Advice",
  "No Borders, No Limits",
  "Match Guarantee",
  "Privacy-First Design",
  "Compliments & Genie Advice",
  "No Borders, No Limits",
  "Match Guarantee",
  "Privacy-First Design",
];

const names3 = [
  "Multi-Language Support",
  "Community Impact",
  "Continuous Learning AI",
  "Elevated Profiles",
  "Multi-Language Support",
  "Community Impact",
  "Continuous Learning AI",
  "Elevated Profiles",
];

// ✅ Scrolling component
const ScrollingLine = ({ items, direction = "left", speed = 30 }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-5 border-y border-gray-200 relative group">
      {/* Background shimmer line */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d1ffb8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -top-40px "
        animate={{
          backgroundPositionX: ["0%", "100%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 6,
        }}
      />

      <motion.div
        className="flex gap-16 text-2xl font-bold"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {[...items, ...items].map((name, index) => (
          <motion.span
            key={index}
            className={`px-6 ${
              index % 2 === 0 ? "text-[#18453b]" : "text-[#ad9437]"
            } drop-shadow-[0_0_6px_rgba(173,148,55,0.3)]`}
            whileHover={{
              scale: 1.1,
              rotate: direction === "left" ? -2 : 2,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            {name}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

// ✅ Final animated section
const MovingNames = () => {
  return (
    <section className="relative w-full h-[18rem] flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#fcfdf5] via-[#f9faef] to-[#f5f7e5]">
      {/* Soft animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#e8f9e2] via-[#fff7d6] to-[#e8f9e2] opacity-30 blur-2xl"
        animate={{
          backgroundPositionX: ["0%", "100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      />

      {/* Floating glowing dots */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-[#ad9437] opacity-40 blur-md top-10 left-10"
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-5 h-5 rounded-full bg-[#18453b] opacity-30 blur-md bottom-12 right-12"
        animate={{
          y: [0, -20, 0],
          x: [0, -15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />

      {/* Scrolling lines */}
      <ScrollingLine items={names1} direction="left" speed={20} />
      <ScrollingLine items={names2} direction="right" speed={24} />
      <ScrollingLine items={names3} direction="left" speed={22} />
    </section>
  );
};

export default MovingNames;
