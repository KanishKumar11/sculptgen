import React, { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
import { FaCaretDown } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import CtaBtn from "./Buttons/CtaBtn";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { VVDS } from "@/fonts/fonts";
import Image from "next/image";

const services = [
  {
    name: "UI/UX Design",
    icon: "./icons/1.svg",
    hasSubmenu: false,
  },
  {
    name: "Web design",
    icon: "./icons/2.svg",
    hasSubmenu: true,
    submenu: [
      "Wordpress",
      "Online e-commerce (Shopify)",
      "Framer",
      "Web-flow development",
    ],
  },
  {
    name: "Mobile App Development",
    icon: "./icons/3.svg",
    hasSubmenu: true,
    submenu: ["Android", "iOS"],
  },
  {
    name: "Product Development",
    icon: "./icons/4.svg",
    hasSubmenu: false,
  },
  {
    name: "Logo Design",
    icon: "./icons/5.svg",
    hasSubmenu: false,
  },
  {
    name: "Pitch Deck Design",
    icon: "./icons/6.svg",
    hasSubmenu: false,
  },
  {
    name: "Video Editing",
    icon: "./icons/7.svg",
    hasSubmenu: true,
    submenu: [
      "Short Video Editing (Reels, TikToks, and Shorts)",
      "Long-Form Video Editing (YouTube, Webinars, Documentaries)",
    ],
  },
  {
    name: "Online Procurement & Sales Management",
    icon: "./icons/8.svg",
    hasSubmenu: false,
  },
  {
    name: "Online Sales Boost",
    icon: "./icons/9.svg",
    hasSubmenu: false,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveSubmenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex shadow-sm md:gap-20 gap-4 items-center mx-auto justify-center my-4 rounded-[80px] md:w-max md:px-10 px-6 p-3 relative"
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-full h-full w-full absolute blur-3xl border shadow-lg"
          style={{
            background: "radial-gradient(circle, #1649FF,#fff)",
          }}
        />
        <Logo />
      </motion.div>
      <div className="flex items-center gap-5 font-medium text-lg">
        <motion.div
          className="relative z-50"
          ref={dropdownRef}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setIsOpen(true)}
          onClick={() => setIsOpen((prev) => !prev)}
          // onMouseLeave={() => {
          //   setTimeout(() => {
          //     setIsOpen(false);
          //     setActiveSubmenu(null);
          //   }, 1000);
          // }}
        >
          <motion.div className="hidden md:flex items-center cursor-pointer py-2">
            Our services{" "}
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <FaCaretDown className="text-3xl text-[#1649FF]" />
            </motion.div>
          </motion.div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-1/3 -translate-x-1/2 top-full mt-2 min-w-[500px] font-medium"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => {
                  setTimeout(() => {
                    setIsOpen(false);
                    setActiveSubmenu(null);
                  }, 300);
                }}
              >
                <motion.div
                  className="backdrop-blur-2xl bg-white/60 rounded-xl shadow-lg p-8"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.h3
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="text-blue-600 font-semibold mb-4 text-2xl"
                  >
                    Sculptgen offers
                  </motion.h3>
                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.1 + index * 0.05,
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{ x: 5 }}
                        className="relative"
                        onMouseEnter={() =>
                          service.hasSubmenu && setActiveSubmenu(index)
                        }
                        onMouseLeave={() =>
                          service.hasSubmenu &&
                          setTimeout(() => {
                            if (activeSubmenu === index) setActiveSubmenu(null);
                          }, 300)
                        }
                      >
                        <div className="flex items-center justify-between cursor-pointer hover:text-blue-600 transition-colors">
                          <div className="flex items-center gap-2">
                            <motion.span
                              initial={{ scale: 0.8 }}
                              animate={{ scale: 1 }}
                              transition={{
                                delay: 0.2 + index * 0.05,
                                duration: 0.3,
                              }}
                            >
                              <Image
                                src={service.icon}
                                alt=""
                                width={40}
                                height={40}
                              />
                            </motion.span>
                            <span>{service.name}</span>
                          </div>
                          {service.hasSubmenu && (
                            <motion.div
                              animate={{
                                x: activeSubmenu === index ? 5 : 0,
                                rotate: activeSubmenu === index ? 90 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <IoIosArrowForward className="text-gray-500" />
                            </motion.div>
                          )}
                        </div>

                        <AnimatePresence>
                          {service.hasSubmenu && activeSubmenu === index && (
                            <motion.div
                              initial={{ opacity: 0, x: 10, scale: 0.95 }}
                              animate={{ opacity: 1, x: 0, scale: 1 }}
                              exit={{ opacity: 0, x: 10, scale: 0.95 }}
                              transition={{
                                duration: 0.3,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="absolute left-full top-0 ml-2 min-w-[300px] !backdrop-blur-xl z-20"
                            >
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{
                                  opacity: [0, 0.5, 0.3],
                                  scale: [0.9, 1.1, 1],
                                }}
                                transition={{
                                  duration: 0.8,
                                  times: [0, 0.5, 1],
                                }}
                                className="absolute inset-0 blur-2xl z-0 w-full h-full"
                              ></motion.div>
                              <motion.div
                                className="rounded-xl shadow-lg p-4 !backdrop-blur-3xl backdrop:blur-xl z-10 bg-white/90"
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                              >
                                <ul className="space-y-2">
                                  {service.submenu.map((item, idx) => (
                                    <motion.li
                                      key={idx}
                                      initial={{ opacity: 0, x: -5 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{
                                        delay: 0.2 + idx * 0.05,
                                        duration: 0.3,
                                        ease: [0.22, 1, 0.36, 1],
                                      }}
                                      whileHover={{ x: 5, color: "#1649FF" }}
                                      className="cursor-pointer transition-colors"
                                    >
                                      {item}
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          className="cursor-pointer hidden md:block"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Works
        </motion.div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <CtaBtn>Schedule call</CtaBtn>
        </motion.div>
      </div>
    </motion.div>
  );
}
