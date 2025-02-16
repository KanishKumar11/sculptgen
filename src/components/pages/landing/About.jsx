import React from "react";
import { HiSpeakerWave } from "react-icons/hi2";
import { motion } from "motion/react";

const p1 = `We are a collective of seasoned professionals dedicated to delivering excellence across a spectrum of premium services designed to empower and elevate your business. With a relentless commitment to innovation and quality, we specialize in`;

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto py-20 my-20 px-5 font-medium"
    >
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="lg:text-8xl text-5xl font-semibold"
      >
        Sculpt gen
      </motion.h1>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex items-center gap-2 text-gray-600 mt-3"
      >
        <HiSpeakerWave className="bg-[#4000FF] p-2 w-10 h-10 rounded-full text-white text-sm" />
        <span className="text-sm font-medium">Sculpt-gen</span>
      </motion.div>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-gray-800 mt-6 text-lg leading-relaxed"
      >
        {p1}
      </motion.p>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-gray-800 mt-4 text-lg leading-relaxed"
      >
        We are a collective of seasoned professionals dedicated to delivering
        excellence across a spectrum of premium services designed to empower and
        elevate your business. With a relentless commitment to innovation and
        quality.
      </motion.p>
    </motion.div>
  );
}
