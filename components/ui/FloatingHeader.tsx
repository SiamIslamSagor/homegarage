"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "benefits", label: "Benefits" },
  { id: "products", label: "Products" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export default function FloatingHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  // Initial animations
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Container slide down
    tl.fromTo(
      containerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );

    // Logo shine effect
    tl.fromTo(
      ".logo-shine",
      { x: -100, opacity: 0 },
      { x: 100, opacity: 0.3, duration: 0.6 },
      "-=0.5"
    );

    // Nav items slide in
    tl.fromTo(
      ".nav-item",
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.1,
      },
      "-=0.3"
    );

    // Download button pop
    tl.fromTo(
      ".download-btn",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4 },
      "-=0.2"
    );

    return () => {
      tl.kill();
    };
  }, []);

  // Scroll behavior
  useEffect(() => {
    const scrollTrigger = ScrollTrigger.create({
      start: "top-=100",
      onUpdate: self => {
        if (self.direction === 1 && self.progress > 0.1) {
          gsap.to(containerRef.current, {
            scale: 0.9,
            backdropFilter: "blur(16px)",
            duration: 0.4,
          });
        } else {
          gsap.to(containerRef.current, {
            scale: 1,
            backdropFilter: "blur(8px)",
            duration: 0.4,
          });
        }
      },
    });

    return () => scrollTrigger.kill();
  }, []);

  // Logo hover animation
  useEffect(() => {
    const logoShine = () => {
      gsap.fromTo(
        ".logo-shine",
        { x: -100, opacity: 0 },
        { x: 100, opacity: 0.3, duration: 0.6 }
      );
    };

    logoRef.current?.addEventListener("mouseenter", logoShine);
    return () => logoRef.current?.removeEventListener("mouseenter", logoShine);
  }, []);

  return (
    <header ref={headerRef} className="fixed top-4 left-0 right-0 z-50 px-4">
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto py-4 px-8 bg-white/70 backdrop-blur-md shadow-xl rounded-2xl flex items-center justify-between transition-all duration-300"
      >
        {/* Logo */}
        <div ref={logoRef} className="relative overflow-hidden">
          <div className="text-xl font-bold text-[#1a1a1a]">HomeGarage</div>
          <div className="logo-shine absolute inset-0 w-20 h-full bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 pointer-events-none" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <button
              key={item.id}
              className="nav-item relative text-[#1a1a1a] hover:text-[#007bff] transition-colors group"
            >
              {item.label}
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#007bff] group-hover:w-full group-hover:left-0 transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* Download Button */}
        <button className="download-btn hidden md:flex px-6 py-2.5 bg-[#007bff] text-white rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
          Download App
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-[#1a1a1a] hover:text-[#007bff] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm md:hidden"
          >
            <div className="flex flex-col items-center justify-center min-h-screen space-y-6 p-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1 },
                  }}
                  exit={{ opacity: 0, y: 20 }}
                  className="text-lg font-medium text-[#1a1a1a] hover:text-[#007bff] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: navItems.length * 0.1 },
                }}
                exit={{ opacity: 0, y: 20 }}
                className="px-8 py-3 bg-[#007bff] text-white rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Download App
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
