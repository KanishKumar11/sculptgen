"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { Squircle } from "corner-smoothing";

export default function Hero() {
  const [active, setActive] = useState("Wordpress");
  return (
    <div className="flex flex-row items-center text-left my-10 text-balance">
      <div className="w-1/2">
        <h1 className="text-6xl font-medium">
          Helping you achieve your dreams via{" "}
          <span className="text-[#CC2936]">web-design</span>
        </h1>
        <Button className="bg-[#cc2936] rounded-lg px-7 py-8 text-lg my-7 font-medium">
          Schedule call
        </Button>
      </div>
      <div className="relative drop-shadow-md w-1/2 ">
        <Squircle cornerRadius={20} className="w-full">
          <Image
            src="/images/1.svg"
            alt=""
            width={1000}
            height={1000}
            className="max-h-[70vh] w-full"
          />
        </Squircle>
        <div className="flex items-center justify-around gap-2">
          {["Wordpress", "Shopify Development", "Custom Code"].map(
            (item, idx) => (
              <div
                key={idx}
                className={cn(
                  "px-7 py-3 rounded-3xl cursor-pointer font-medium text-sm my-5",
                  active == item
                    ? "bg-[#CC2936] text-white"
                    : "bg-gray-100 text-black"
                )}
                onClick={() => setActive(item)}
              >
                {item}
              </div>
            )
          )}
        </div>

        <div className="top-10 left-4 absolute rounded-full bg-[#CC2936] -rotate-12 text-white px-7 text-xs  py-3 font-medium">
          Typography 1
        </div>
        <div className="top-28 left-4 absolute rounded-full bg-gray-100 -rotate-12 text-black font-medium px-7  text-xs  py-3">
          Typography 2
        </div>
        <div className="top-28 right-4 absolute rounded-full bg-gray-100 -rotate-12 text-black font-medium px-7  text-xs  py-3 flex items-center gap-2">
          <div className="h-3 w-3 bg-[#F83658] rounded-[2px]" /> #F83658
        </div>
        <div className="top-44 right-4 absolute rounded-full  -rotate-12 text-white font-medium px-7  text-xs  py-3 flex items-center gap-2 bg-[#F83658]">
          <div className="h-[13px] w-[13px] bg-green-400 border-2 border-gray-100 rounded-[2px]" />{" "}
          #F83658
        </div>
      </div>
    </div>
  );
}
