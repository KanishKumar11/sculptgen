"use client";
import React, { useEffect, useState } from "react";
import { IoExit, IoMenu } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "motion/react";

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const services = [
  "Web development",
  "Mobile App Development",
  "Web & Product Development",
  "Application Development",
  "Logo Design",
  "UI/UX Design",
  "Video Editing",
  "Online Procurement & Sales Management",
  "Online Sales Boost",
  "Carriers",
];

export default function Navbar() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timezone, setTimezone] = useState("Asia/Kolkata");
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeFormats = {
    Mumbai: new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(currentTime),
    NYC: new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(currentTime),
    London: new Intl.DateTimeFormat("en-US", {
      timeZone: "Europe/London",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(currentTime),
  };

  let activeCity = "London";
  if (timezone.includes("Asia")) activeCity = "Mumbai";
  else if (timezone.includes("America")) activeCity = "NYC";

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-7xl p-5 flex items-center justify-between flex-wrap gap-5"
    >
      <div className="lg:min-w-[200px] order-1">
        <div className="lg:text-4xl text-2xl font-medium">
          {currentTime.getDate()}/{currentTime.getMonth() + 1}
        </div>
        <div className="uppercase lg:text-xs text-[10px] font-medium">
          {weekday[currentTime.getDay()]}
        </div>
      </div>

      <div className="bg-[#DD0000] text-xl font-medium flex items-center w-full md:min-w-[430px] justify-between p-5 py-3 relative ">
        <div
          className="cursor-pointer"
          onClick={() => setIsMenuActive(!isMenuActive)}
        >
          {isMenuActive ? <RxCross2 /> : <IoMenu />}
        </div>
        <div>Sculpt</div>
        <div>
          <FaPhone />
        </div>
        <AnimatePresence>
          {isMenuActive && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="min-w-[430px] absolute top-12 text-center bg-white/80 backdrop-blur-2xl left-0 space-y-4 pt-4"
            >
              {services.map((item) => (
                <div key={item} className="text-red-600 font-normal text-sm">
                  {item}
                </div>
              ))}
              <div className="bg-red-600 font-normal text-xl py-2">
                Contact us
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex space-x-4 lg:text-2xl text-xl order-1 ">
        <div
          className={activeCity === "Mumbai" ? "text-red-500" : "text-white"}
        >
          {timeFormats.Mumbai}
          <div className="md:text-sm text-xs uppercase">MUMBAI</div>
        </div>
        <div className={activeCity === "NYC" ? "text-red-500" : "text-white"}>
          {timeFormats.NYC}
          <div className="md:text-sm text-xs uppercase">NYC</div>
        </div>
        <div
          className={activeCity === "London" ? "text-red-500" : "text-white"}
        >
          {timeFormats.London}
          <div className="md:text-sm text-xs uppercase">LONDON</div>
        </div>
      </div>
    </motion.div>
  );
}
