"use client";

import Hero from "@/app/components/Hero";
import NewNavbar from "@/app/components/NewNavbar";
import BookMechanicSection from "@/app/components/sections/BookMechanicSection";
import BuySellSection from "@/app/components/sections/BuySellSection";
import EmergencySOSSection from "@/app/components/sections/EmergencySOSSection";
import HireDriverSection from "@/app/components/sections/HireDriverSection";
import PartsStoreSection from "@/app/components/sections/PartsStoreSection";
import { motion, useScroll, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".bg-element", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white overflow-hidden relative"
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX }}
      />

      <NewNavbar />

      {/* Main Content */}
      <div className="relative min-h-screen bg-white">
        {/* Hero Section */}
        <Hero />

        {/* Book Mechanic Section */}
        <BookMechanicSection />

        {/* Parts Store Section */}
        <PartsStoreSection />

        {/* Buy & Sell Section */}
        <BuySellSection />

        {/* Hire Driver Section */}
        <HireDriverSection />

        {/* Emergency SOS Section */}
        <EmergencySOSSection />
      </div>
    </div>
  );
};

export default Home;
