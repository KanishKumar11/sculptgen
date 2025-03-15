import { VVDS } from "@/fonts/fonts";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

export default function Logo({ className }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05 }}
      className={cn(
        " text-xl md:text-4xl font-semibold tracking-[0] relative z-10 p-4 text-[#1649FF]",
        VVDS.className,
        className
      )}
    >
      SCULPT GEN{" "}
    </motion.div>
  );
}
