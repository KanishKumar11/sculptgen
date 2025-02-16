"use client";
import { Squircle } from "corner-smoothing";
import React from "react";

export default function Footer() {
  return (
    <Squircle cornerRadiusTop="250">
      <div className="bg-[#01A5E3] py-40 px-10 rounded-t-[250px] flex items-center justify-center text-white font-medium flex-col gap-10">
        {" "}
        <h3>NEXT STORY</h3>
        <h2 className="text-8xl">App Development</h2>
      </div>
    </Squircle>
  );
}
