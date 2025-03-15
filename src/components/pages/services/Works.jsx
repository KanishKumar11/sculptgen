"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { VVDS } from "@/fonts/fonts";
import CtaBtn from "@/components/Buttons/CtaBtn";

// Default projects data moved outside the component
const defaultProjects = [
  {
    id: "jisora",
    title: "Jisora",
    description: "E-commerce website built with Shopify for a fashion brand.",
    image: "/images/projects/jisora.jpg",
    tags: ["Shopify", "E-commerce", "Fashion"],
  },
  {
    id: "onesky",
    title: "OneSky",
    description:
      "E-commerce platform built with custom code for a clothing brand.",
    image: "/images/projects/onesky.jpg",
    tags: ["Custom Code", "E-commerce", "React"],
  },
  {
    id: "inovact",
    title: "Inovact Social",
    description: "Social network platform for students and entrepreneurs.",
    image: "/images/projects/inovact.jpg",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "bezu",
    title: "Bezu AI",
    description: "AI-powered chat platform with real-time video capabilities.",
    image: "/images/projects/bezu.jpg",
    tags: ["Next.js", "AI", "WebRTC"],
  },
  {
    id: "bigbunny",
    title: "Big Bunny",
    description: "Fashion e-commerce store with custom product filtering.",
    image: "/images/projects/bigbunny.jpg",
    tags: ["Shopify", "E-commerce", "Custom Theme"],
  },
  {
    id: "antaratma",
    title: "Antaratma",
    description: "Premium clothing brand with custom shopping experience.",
    image: "/images/projects/antaratma.jpg",
    tags: ["Shopify", "E-commerce", "Fashion"],
  },
  {
    id: "kirana",
    title: "Kirana Pro",
    description: "Neighborhood shopping app for local businesses.",
    image: "/images/projects/kirana.jpg",
    tags: ["React Native", "Mobile App", "E-commerce"],
  },
  {
    id: "devops",
    title: "The Devops Story",
    description: "Educational platform for DevOps professionals.",
    image: "/images/projects/devops.jpg",
    tags: ["WordPress", "LMS", "Custom Theme"],
  },
];

export default function Works({
  projects = defaultProjects,
  title = "Works",
  ctaText = "View all projects",
}) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-lefyt"
        >
          <h2
            className={cn(
              "text-4xl md:text-8xl font-bold mb-4",
              VVDS.className
            )}
          >
            {title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative overflow-hidden group h-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-max h-max  object-contain transition-transform duration-500 group-hover:scale-105"
                />
                {/* <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href="#"
                    className="px-4 py-2 bg-white text-black rounded-md font-medium"
                  >
                    View Project
                  </a>
                </div> */}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                {/* <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <CtaBtn>{ctaText}</CtaBtn>
        </motion.div> */}
      </div>
    </section>
  );
}
