import React from "react";

export default function CtaBtn({ children }) {
  return (
    <button className="shadow-[inset_0_0_0_4px_#002094] text-white px-6  md:px-10 py-3 lg:text-base text-sm md:py-4 rounded-full tracking-widest  font-semibold hover:bg-[#4d69cd] hover:text-white dark:text-neutral-200 transition duration-200 bg-[#1649FF] relative w-max mx-auto">
      <div
        className="rounded-full h-full w-full absolute blur-3xl  border shadow-lg"
        style={{
          background: "radial-gradient(circle, #1649FF,#fff)",
          opacity: 0.8,
        }}
      />
      <span className="relative z-10"> {children}</span>
    </button>
  );
}
