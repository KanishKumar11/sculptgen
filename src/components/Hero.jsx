"use client";
import React from "react";
import { motion } from "motion/react";

const services = [
  { name: "Website Design", color: "bg-red-500" },
  { name: "Mobile App Development", color: "bg-blue-500" },
  { name: "Web & Product Development", color: "bg-yellow-600" },
  { name: "Application Development", color: "bg-blue-700" },
  { name: "Logo & Graphic Design", color: "bg-pink-500" },
  { name: "Pitch Deck Design", color: "bg-green-500" },
  { name: "Video Editing", color: "bg-orange-500" },
  { name: "Online Procurement & Sales Management", color: "bg-teal-600" },
  { name: "Online Sales Boost", color: "bg-purple-600" },
];

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl rounded-b-xl mx-auto flex flex-col gap-10 text-white text-center py-20 p-2"
    >
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl md:text-8xl font-semibold text-balance"
      >
        One home for your digital world.
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="lg:text-lg max-w-6xl mx-auto"
      >
        We are a collective of seasoned professionals dedicated to delivering
        excellence across a spectrum of premium services designed to empower and
        elevate your business. With a relentless commitment to innovation and
        quality, we specialize in
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 lg:gap-4 gap-2 px-4 mt-10"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-5 rounded-xl text-center text-white lg:font-light text-sm lg:text-xs min-h-[160px] flex items-center justify-center lg:items-end lg:justify-end ${service.color}`}
          >
            {service.name}
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-lg font-semibold mt-6"
      >
        CLICK ANY SECTION TO KNOW MORE
      </motion.p>
    </motion.div>
  );
}
