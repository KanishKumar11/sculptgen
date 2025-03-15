"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { footerSections, links } from "@/lib/constants";
import Logo from "./Logo";

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    },
  };

  const renderLinks = (section) => (
    <ul className="space-y-2">
      {footerSections[section].map((linkKey, index) => (
        <motion.li 
          key={linkKey} 
          variants={itemVariants}
          custom={index}
          transition={{
            delay: index * 0.05,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Link 
            href={links[linkKey].href} 
            className="hover:text-gray-300 transition-colors duration-300"
          >
            {links[linkKey].name}
          </Link>
        </motion.li>
      ))}
    </ul>
  );

  return (
    <div className="bg-[#1649FF]">
      <motion.footer
        className="text-white py-24 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={footerVariants}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo Section */}
            <motion.div 
              className="col-span-1" 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Logo className="text-white" />
            </motion.div>
            <div></div>
            {/* The Boring Section */}
            <motion.div 
              className="col-span-1" 
              variants={itemVariants}
            >
              <motion.h3 
                className="text-lg font-medium mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                The Boring
              </motion.h3>
              {renderLinks("boring")}
            </motion.div>

            {/* The Good Section */}
            <motion.div 
              className="col-span-1" 
              variants={itemVariants}
            >
              <motion.h3 
                className="text-lg font-medium mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                The Good
              </motion.h3>
              {renderLinks("good")}
            </motion.div>

            {/* The Cool Section */}
            <motion.div 
              className="col-span-1" 
              variants={itemVariants}
            >
              <motion.h3 
                className="text-lg font-medium mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                The Cool
              </motion.h3>
              {renderLinks("cool")}
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
