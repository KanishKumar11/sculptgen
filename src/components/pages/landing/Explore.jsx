import { VVDS } from "@/fonts/fonts";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Explore({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center lg:px-20 my-10 lg:my-20 lg:gap-10 gap-2"
    >
      <motion.h2
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          "text-2xl md:text-8xl font-medium italic uppercase",
          VVDS.className
        )}
      >
        {children}
      </motion.h2>
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ x: 10 }}
        className="flex-shrink-0"
      >
        <FaLongArrowAltRight className="text-4xl md:text-9xl text-[#1649FF]" />
      </motion.div>
    </motion.div>
  );
}
