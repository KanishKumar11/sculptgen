"use client";
import About from "@/components/pages/landing/About";
import BackToTop from "@/components/pages/landing/BackToTop";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/pages/landing/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-black text-white pb-20 rounded-b-[80px] ">
        <Navbar />
        <Hero />
      </div>
      <div className="bg-white">
        <About />
        <ContactForm />
        <BackToTop />
      </div>
      <Footer />
    </>
  );
}
