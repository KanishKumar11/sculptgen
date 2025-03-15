"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import { VVDS } from "@/fonts/fonts";
import CtaBtn from "@/components/Buttons/CtaBtn";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import Explore from "./Explore";

// Portfolio items data
const portfolioItems = [
  {
    id: 1,
    title: "Bezu ai",
    category: "Webdevlopment",
    image: "/images/portfolio/1.svg",
    description: "AI-powered chat application with personalized conversations",
  },
  {
    id: 2,
    title: "Kirana pro ",
    category: "Webdevlopment",
    image: "/images/portfolio/2.svg",
    description: "Financial management application with advanced analytics",
  },
  {
    id: 3,
    title: "Jisora",
    category: "Shopify Development",
    image: "/images/portfolio/3.svg",
    description: "Sustainability tracking platform for businesses",
  },
  {
    id: 4,
    title: "Profuel ",
    category: "Product Development",
    image: "/images/portfolio/4.svg",
    description: "Sustainability tracking platform for businesses",
  },
  {
    id: 3,
    title: "Skate",
    category: "Product Development",
    image: "/images/portfolio/5.svg",
    description: "Sustainability tracking platform for businesses",
  },
];

// Portfolio Slider Component with enhanced animations
function PortfolioSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) =>
      prev === portfolioItems.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) =>
      prev === 0 ? portfolioItems.length - 1 : prev - 1
    );
  };

  const currentItem = portfolioItems[currentIndex];

  return (
    <div className="flex flex-col md:flex-row gap-10 items-start my-20">
      <div className="w-full md:w-1/3">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${currentItem.id}`}
            initial={{ opacity: 0, x: direction === "right" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === "right" ? -50 : 50 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-4"
          >
            <h3
              className={cn("text-5xl md:text-6xl font-bold", VVDS.className)}
            >
              {currentItem.title}
            </h3>
            <p className={cn("text-2xl text-gray-700", VVDS.className)}>
              {currentItem.category}
            </p>
            <div className="flex gap-2 mt-4 items-center justify-center">
              <motion.button
                onClick={handlePrev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 19l-7-7 7-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="w-full md:w-2/3 justify-start items-start flex h-[500px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={`image-${currentItem.id}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full h-[500px] relative"
          >
            <Image
              src={currentItem.image}
              alt={currentItem.title}
              width={500}
              height={500}
              className="max-h-[600px]"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// Update the services array to match the screenshot
const services = [
  { name: "UI/UX DESIGN", color: "bg-[#128A4494]/[58%]" },
  { name: "WEBSITE DESIGN", color: "bg-[#C8AFE6]" },
  { name: "MOBILE APP DEVELOPMENT", color: "bg-[#FD7066]" },
  { name: "PRODUCT DEVELOPMENT", color: "bg-[#4998E7]" },
  { name: "APPLICATION DEVELOPMENT", color: "bg-[#F6CB0178]/[47%]" },
  { name: "LOGO DESIGN", color: "bg-[#F47E208F]/[56%]" },
  { name: "PITCH DECK DESIGN", color: "bg-[#FCB0BE]" },
  { name: "SALES MANAGEMENT", color: "bg-[#00FFEA]" },
  { name: "ONLINE SALES BOOST", color: "bg-[#C8AFE6]" },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0.2]);
  const y = useTransform(scrollY, [0, 200], [0, -50]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-b-xl mx-auto flex flex-col gap-10 text-center lg:py-20 p-2"
    >
      <motion.div
        style={{ opacity, y }}
        className="flex gap-10 flex-col my-10 z-10 "
      >
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "text-3xl md:text-6xl uppercase font-semibold text-balance",
            VVDS.className
          )}
        >
          Where Ideas Get Built & Brands Get Noticed
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:text-xl max-w-6xl mx-auto uppercase font-semibold"
        >
          From design to development, video to marketing—We craft, you conquer.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <CtaBtn>Book a free consultation</CtaBtn>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="lg:text-xl text-xs max-w-6xl mx-auto uppercase font-semibold flex items-center gap-2"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="h-2 w-2 bg-rose-500 rounded-full"
        />
        FEW SPOTS LEFT, HURRY LADIES & GENTLEMEN !!
      </motion.p>

      {/* Client logos with staggered animation */}
      <div className="max-w-[100vw] overflow-hidden flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex md:grid grid-cols-3 place-items-center min-w-[600px] gap-10 -translate-x-1/4  lg:translate-x-0"
        >
          {[2, 3, 4].map((num, i) => (
            <motion.div
              key={num}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
            >
              <Image
                src={`./images/${num}.svg`}
                alt=""
                width={500}
                height={500}
                className="min-w-[200px]"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex md:grid grid-cols-4 place-items-center gap-10 -translate-x-1/5 min-w-[600px]"
        >
          {[5, 6, 7, 8].map((num, i) => (
            <motion.div
              key={num}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
            >
              <Image
                src={`./images/${num}.svg`}
                alt=""
                width={500}
                height={500}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Features section with scroll-triggered animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mt-16 mb-10"
      >
        <div className="flex justify-between items-center mx-auto lg:px-20">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:text-2xl text-xs font-medium"
          >
            All in one solution
          </motion.div>
          <div className=" h-6 md:h-12 w-0.5 bg-gray-500"></div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:text-2xl text-xs font-medium"
          >
            quick service
          </motion.div>
          <div className=" h-6 md:h-12 w-0.5 bg-gray-500"></div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:text-2xl text-xs font-medium"
          >
            No more bank visits
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mt-14 mx-auto px-10"
      >
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={cn(
            "text-xl md:text-6xl text-left leading-tight text-[#4E4E4E]",
            VVDS.className
          )}
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-9xl text-black inline-block"
          >
            W
          </motion.span>
          e are a collective of seasoned professionals dedicated to delivering
          excellence across a spectrum of premium services designed to empower
          and elevate your business. With a relentless commitment to innovation
          and quality, we specialize in
        </motion.p>
      </motion.div>

      {/* Services section with staggered animations */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mt-16"
      >
        <motion.div className="flex flex-col md:gap-16 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center w-full relative md:pl-20 pl-4 overflow-clip"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "md:h-6 h-3 bottom-1 absolute min-w-12 md:bottom-6",
                  service.color
                )}
              ></motion.div>
              <h3
                className={cn(
                  "text-3xl md:text-8xl font-bold md:ml-4 ml-2 uppercase relative z-10",
                  VVDS.className,
                  service.name == "APPLICATION DEVELOPMENT"
                    ? "text-[1.8rem]"
                    : ""
                )}
              >
                {service.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Explore>EXPLORE OUR SERVICES SECTION</Explore>
      </motion.div>
      <div className="w-full lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16"
        >
          <p
            className={cn(
              "text-xl md:text-6xl text-left leading-tight text-[#4E4E4E]",
              VVDS.className
            )}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-9xl text-black inline-block"
            >
              W
            </motion.span>
            e are committed to delivering our best in every project, turning
            your dreams into reality. Our core values—passion, innovation, and
            speed—drive everything we do.
          </p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={cn(
              "text-4xl md:text-6xl text-left leading-tight mt-8 text-[#4E4E4E]",
              VVDS.className
            )}
          >
            Here are some of our finest works:
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <PortfolioSlider />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Explore>EXPLORE OUR WORK SECTION</Explore>
      </motion.div>
    </motion.div>
  );
}
