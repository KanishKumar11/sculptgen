"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { VVDS } from "@/fonts/fonts";

const sections = [
  {
    id: "android",
    title: "Android",
    description:
      "We create customized, responsive, and SEO-friendly WordPress websites tailored to your brand...",
    features: [
      "Fully responsive designs for all devices.",
      "SEO optimization for better search engine rankings.",
      "Integration of eCommerce solutions and payment gateways.",
      "Custom themes and plugins to meet unique requirements.",
      "User-friendly content management system (CMS).",
      "Security and regular updates for safe operations.",
      "Fast-loading websites optimized for performance.",
      "Multi-language site capabilities.",
      "Analytics integration for tracking performance.",
      "Post-launch support and maintenance services.",
    ],
  },
  {
    id: "ios",
    title: "iOS",
    description:
      "We create customized, responsive, and SEO-friendly WordPress websites tailored to your brand...",
    features: [
      "Fully responsive designs for all devices.",
      "SEO optimization for better search engine rankings.",
      "Integration of eCommerce solutions and payment gateways.",
      "Custom themes and plugins to meet unique requirements.",
      "User-friendly content management system (CMS).",
      "Security and regular updates for safe operations.",
      "Fast-loading websites optimized for performance.",
      "Multi-language site capabilities.",
      "Analytics integration for tracking performance.",
      "Post-launch support and maintenance services.",
    ],
  },
  {
    id: "ios2",
    title: "iOS2",
    description:
      "We create customized, responsive, and SEO-friendly WordPress websites tailored to your brand...",
    features: [
      "Fully responsive designs for all devices.",
      "SEO optimization for better search engine rankings.",
      "Integration of eCommerce solutions and payment gateways.",
      "Custom themes and plugins to meet unique requirements.",
      "User-friendly content management system (CMS).",
      "Security and regular updates for safe operations.",
      "Fast-loading websites optimized for performance.",
      "Multi-language site capabilities.",
      "Analytics integration for tracking performance.",
      "Post-launch support and maintenance services.",
    ],
  },
];

export default function Details({ sections, color }) {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = sectionRefs.current[section.id];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="flex max-w-5xl mx-auto p-4 my-40 font-medium">
      <aside className="w-1/4 sticky top-4 h-fit">
        <nav className="space-y-2">
          {sections.map(({ id, title }) => (
            <Link key={id} href={`#${id}`}>
              <p
                className={cn(
                  " text-xl lg:text-4xl cursor-pointer capitalize",
                  VVDS.className,
                  activeSection === id ? ` font-bold` : ""
                )}
                style={{
                  color: activeSection == id ? `${color}` : "#4b5563",
                }}
              >
                {id}
              </p>
            </Link>
          ))}
        </nav>
      </aside>

      <main className="w-3/4 space-y-10">
        {sections.map(({ id, title, description, features }) => (
          <section
            key={id}
            id={id}
            ref={(el) => (sectionRefs.current[id] = el)}
            className="py-10"
          >
            <h2 className={cn("text-8xl font-medium", VVDS.className)}>
              {title}
            </h2>
            <p className="mt-4 text-gray-800 font-medium">{description}</p>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              {features.map((feature, index) => (
                <li key={index} className="text-gray-700">
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </div>
  );
}
