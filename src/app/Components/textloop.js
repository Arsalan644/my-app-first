"use client";
import React from "react";
import { motion } from "framer-motion";

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

// Helper component for one scrolling line
const ScrollingLine = ({ items, direction = "left", speed = 40 }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-gray-200 py-4">
      <motion.div
        className="flex gap-16 text-xl font-semibold"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {/* Duplicate the array twice for smooth infinite scrolling */}
        {[...items, ...items].map((name, index) => (
          <span
            style={{ color: index % 2 === 0 ? "#18453b" : "#ad9437" }}
            key={index}
          >
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const MovingNames = () => {
  return (
    <>
      <section className="w-ful -top-20 bg-[#fcfdf5] relative z-50 text-gray-500 h-64 pb-8">
        <ScrollingLine items={names1} direction="left" speed={20} />
        <ScrollingLine items={names2} direction="right" speed={20} />
        <ScrollingLine items={names3} direction="left" speed={22} />
      </section>
    </>
  );
};

export default MovingNames;
