import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Details from "@/components/pages/services/Details";
import Hero from "@/components/pages/services/web/Hero";
import React from "react";
import Footer from "../../../components/pages/services/web/Footer";
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
    id: "custom",
    title: "Custom Code",
    description:
      "We provide customized, responsive, and SEO-friendly custom code solutions tailored to your brand. Whether for a web application, mobile app, or a unique software solution, we ensure a seamless user experience with modern designs and fast performance.",
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

export default function page() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="">
        <Navbar isBlackBg={false} />
      </div>
      <Hero />
      <Details sections={sections} color="#CC2936" />
      <ContactForm />
      <Footer />
    </div>
  );
}
