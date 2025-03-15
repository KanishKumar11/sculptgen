"use client";
import Navbar from "@/components/Navbar";
import Details from "@/components/pages/services/Details";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { VVDS } from "@/fonts/fonts";
import CtaBtn from "@/components/Buttons/CtaBtn";
import Footer from "@/components/Footer";
import Works from "@/components/pages/services/Works";
import { webDesignProjects } from "@/data/portfolioData";

const sections = [
  {
    id: "wordpress",
    title: "WordPress",
    description:
      "We create customized, responsive, and SEO-friendly WordPress websites tailored to your brand. Whether for a blog, business, or eCommerce, we ensure a seamless user experience with modern designs and fast performance.",
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
    id: "shopify",
    title: "Shopify Design & Dev",
    description:
      "We create customized, responsive, and SEO-friendly Shopify stores tailored to your brand. Whether for a small business or a large eCommerce platform, we ensure a seamless user experience with modern designs and fast performance.",
    features: [
      "Fully responsive designs for all devices.",
      "SEO optimization for better search engine rankings.",
      "Integration of multiple payment gateways and shipping methods.",
      "Custom theme development and app integration.",
      "Product catalog management and inventory tracking.",
      "Abandoned cart recovery and email marketing setup.",
      "Fast-loading storefronts optimized for conversions.",
      "Multi-currency and multi-language capabilities.",
      "Analytics and sales reporting dashboards.",
      "Post-launch support and store maintenance services.",
    ],
  },
  {
    id: "webflow",
    title: "Web flow",
    description:
      "We design and develop fully customized, responsive, and SEO-optimized Webflow websites that seamlessly align with your brand identity. Our websites are crafted for exceptional performance, user engagement, and scalability, ensuring a stunning digital presence that drives results.",
    features: [
      "Custom Animations & Interactions – Bring websites to life with smooth, engaging animations.",
      "Scalable & Future-Proof Development – Easily adaptable sites that grow with businesses.",
      "No-Code & Low-Code Solutions – Empower clients to make updates without technical knowledge.",
      "API & Third-Party Integrations – Connect with CRM, automation tools, and more.",
      "Mobile-First Design Approach – Ensuring top-tier performance on all devices.",
      "Conversion-Optimized UI/UX – Designs that maximize user engagement and conversions.",
      "Advanced Webflow CMS Features – Dynamic content structures tailored for blogs, portfolios, and eCommerce.",
      "Membership & Subscription Features – Monetize content with gated access.",
      "Accessibility-Optimized Websites – ADA/WCAG-compliant designs for inclusivity.",
      "Migration & Redesign Services – Seamless transition from outdated platforms to Webflow.",
    ],
  },
  {
    id: "framer",
    title: "Framer",
    description:
      "We design and develop fully customized, responsive, and SEO-optimized Framer websites that seamlessly align with your brand identity. Our websites are crafted for exceptional performance, user engagement, and scalability, ensuring a stunning digital presence that drives results.",
    features: [
      "High-Performance & Blazing-Fast Websites – Optimized for speed and smooth user experience.",
      "Fully Responsive & Adaptive Designs – Pixel-perfect layouts across all devices.",
      "Advanced Animations & Interactions – Seamless motion effects for an engaging UI.",
      "SEO & Performance Optimization – Ensuring better rankings and faster load times.",
      "No-Code & Low-Code Flexibility – Easy edits and updates without technical knowledge.",
      "Seamless Integrations – Connect APIs, analytics, and marketing tools effortlessly.",
      "Secure Hosting & Post-Launch Support – Reliable maintenance and updates for smooth operations.",
      "Interactive Prototypes – Test and refine user experiences before final development.",
      "Component-Based Architecture – Modular design for consistency and easy updates.",
      "Custom JavaScript Extensions – Enhanced functionality beyond standard features.",
    ],
  },
  {
    id: "custom",
    title: "Custom Code",
    description:
      "We provide bespoke, hand-coded solutions using modern frameworks and technologies tailored specifically to your unique business requirements. Our custom development approach ensures maximum flexibility, scalability, and performance without the constraints of template-based platforms.",
    features: [
      "Full-stack development using React, Next.js, Vue, or Angular.",
      "Custom backend solutions with Node.js, Python, or PHP.",
      "Database design and implementation (SQL or NoSQL).",
      "Progressive Web App (PWA) development for offline capabilities.",
      "API development and third-party service integration.",
      "Performance optimization and server-side rendering.",
      "Comprehensive testing and quality assurance.",
      "DevOps setup with CI/CD pipelines.",
      "Scalable cloud infrastructure configuration.",
      "Ongoing maintenance, support, and feature development.",
    ],
  },
];

export default function page() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="">
          <Navbar isBlackBg={false} />
        </div>

        {/* Hero Section */}
        <div className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center  mx-auto"
            >
              <h1
                className={cn(
                  "text-5xl md:text-7xl font-bold mb-8",
                  VVDS.className
                )}
              >
                HELPING YOU ACHIEVE YOUR DREAMS VIA{"  "}
                <span className="text-[#0D9F4F] "> WEB-DESIGN</span>
              </h1>

              <CtaBtn>book a free consultation</CtaBtn>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-16 md:mt-24 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/9.svg"
                alt="Web Design Showcase"
                className="w-full h-auto"
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/1200x600/1649FF/FFFFFF?text=Web+Design+Showcase";
                }}
              />
            </motion.div>
          </div>
        </div>

        <Details sections={sections} color="#128A44" />
        <Works
          projects={webDesignProjects}
          title="Works"
          ctaText="See more web projects"
        />
      </div>
      <Footer />
    </>
  );
}
