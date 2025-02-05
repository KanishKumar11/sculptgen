"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { footerSections, links } from "@/lib/constants";

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const renderLinks = (section) => (
    <ul className="space-y-2">
      {footerSections[section].map((linkKey) => (
        <motion.li key={linkKey} variants={itemVariants}>
          <Link href={links[linkKey].href} className="hover:text-gray-300">
            {links[linkKey].name}
          </Link>
        </motion.li>
      ))}
    </ul>
  );

  return (
    <div className="bg-black">
      <motion.footer
        className="bg-black text-white py-16 max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={footerVariants}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo Section */}
            <motion.div className="col-span-1" variants={itemVariants}>
              <Link href="/" className="text-4xl font-light">
                Sculpt
              </Link>
            </motion.div>
            <div></div>
            {/* The Boring Section */}
            <motion.div className="col-span-1" variants={itemVariants}>
              <h3 className="text-lg font-medium mb-4">The Boring</h3>
              {renderLinks("boring")}
            </motion.div>

            {/* The Good Section */}
            <motion.div className="col-span-1" variants={itemVariants}>
              <h3 className="text-lg font-medium mb-4">The Good</h3>
              {renderLinks("good")}
            </motion.div>

            {/* The Cool Section */}
            <motion.div className="col-span-1" variants={itemVariants}>
              <h3 className="text-lg font-medium mb-4">The Cool</h3>
              {renderLinks("cool")}
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
