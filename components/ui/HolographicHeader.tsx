"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import {
  HomeIcon,
  BeakerIcon,
  CubeIcon,
  QuestionMarkCircleIcon,
  PhoneIcon,
  SparklesIcon,
  EllipsisHorizontalIcon,
  XMarkIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

gsap.registerPlugin(ScrollTrigger);

interface NavItem {
  id: string;
  label: string;
  icon: any;
  path: string;
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: HomeIcon, path: "/" },
  { id: "features", label: "Features", icon: BeakerIcon, path: "/features" },
  { id: "products", label: "Products", icon: CubeIcon, path: "/products" },
  { id: "faq", label: "FAQ", icon: QuestionMarkCircleIcon, path: "/faq" },
  { id: "contact", label: "Contact", icon: PhoneIcon, path: "/contact" },
];

export default function HolographicHeader() {
  const [isBooted, setIsBooted] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const headerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Boot-up sequence
  useEffect(() => {
    const bootTimeline = gsap.timeline({
      delay: 1.5,
      onComplete: () => setIsBooted(true),
    });

    // Panel animations
    bootTimeline
      .fromTo(
        ".panel",
        { yPercent: -100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 0.6,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
        }
      )
      // Logo reveal
      .fromTo(
        ".logo-beam",
        { scaleY: 0, opacity: 0 },
        {
          scaleY: 1,
          opacity: 0.8,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .fromTo(
        ".logo-text",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )
      // Nav links reveal
      .fromTo(
        ".nav-item",
        { z: -100, opacity: 0 },
        {
          z: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.2"
      )
      // Download button
      .fromTo(
        ".download-btn",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );

    return () => {
      bootTimeline.kill();
    };
  }, []);

  // Scroll behavior
  useEffect(() => {
    if (!isBooted) return;

    const scrollTrigger = ScrollTrigger.create({
      start: "top-=100",
      onUpdate: self => {
        const progress = Math.min(self.progress * 2, 1);
        setScrollProgress(progress);

        if (progress > 0) {
          gsap.to(headerRef.current, {
            height: "64px",
            backdropFilter: "blur(10px)",
            duration: 0.4,
          });
          gsap.to(".panel", {
            opacity: 0.3,
            duration: 0.4,
          });
          gsap.to(".nav-item", {
            scale: 0.9,
            y: 0,
            duration: 0.4,
          });
          gsap.to(".logo-text", {
            scale: 0.8,
            duration: 0.4,
          });
        } else {
          gsap.to(headerRef.current, {
            height: "96px",
            backdropFilter: "blur(0px)",
            duration: 0.4,
          });
          gsap.to(".panel", {
            opacity: 0.6,
            duration: 0.4,
          });
          gsap.to(".nav-item", {
            scale: 1,
            y: 0,
            duration: 0.4,
          });
          gsap.to(".logo-text", {
            scale: 1,
            duration: 0.4,
          });
        }
      },
    });

    return () => scrollTrigger.kill();
  }, [isBooted]);

  return (
    <div
      ref={headerRef}
      className="fixed top-0 left-0 w-full h-24 z-50 overflow-hidden transition-all duration-300"
    >
      {/* Background Panels */}
      <div ref={panelsRef} className="absolute inset-0 overflow-hidden">
        {[1, 2, 3].map(i => (
          <div
            key={i}
            className={`panel absolute inset-0 bg-gradient-to-b from-white/80 to-blue-50/50 backdrop-blur-sm transform-gpu border-b border-blue-100/20`}
            style={{
              zIndex: i,
              transform: `translateZ(${i * -10}px)`,
            }}
          />
        ))}

        {/* Animated Grid */}
        <div className="absolute inset-0 hologram-grid opacity-10" />

        {/* Circuit Lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full">
            <pattern
              id="circuit"
              x="0"
              y="0"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 25 0 L 25 25 L 50 25 M 0 25 L 25 25"
                className="circuit-path"
                style={{ stroke: "rgba(59, 130, 246, 0.2)" }}
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
      </div>

      {/* Logo */}
      <div
        ref={logoRef}
        className="absolute top-0 left-8 h-full flex items-center z-20"
      >
        <div className="relative">
          <div className="logo-beam absolute -top-4 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-blue-500 to-transparent opacity-50" />
          <div className="logo-text relative text-2xl font-bold text-blue-600">
            HomeGarage
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div
        ref={navRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 h-full flex items-center space-x-8 z-20"
      >
        {navItems.map(item => (
          <button
            key={item.id}
            className={`nav-item relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
              activeLink === item.id
                ? "text-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => setActiveLink(item.id)}
          >
            <span className="relative z-10">{item.label}</span>
            {/* Neon Underline */}
            <div
              className={`absolute bottom-0 left-0 h-px w-full transform-gpu transition-all duration-300 ${
                activeLink === item.id
                  ? "bg-blue-500 opacity-100 shadow-[0_0_5px_rgba(59,130,246,0.5)]"
                  : "bg-blue-200 opacity-0 scale-x-0"
              }`}
            />
            {/* Loading Bar */}
            {activeLink === item.id && scrollProgress > 0 && (
              <div
                className="absolute bottom-0 left-0 h-px bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.5)]"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Download Button */}
      <div className="absolute top-0 right-8 h-full hidden md:flex items-center z-20">
        <button className="download-btn px-6 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-sm font-medium flex items-center space-x-2 transition-all duration-300 hover:bg-blue-100 hover:border-blue-300 shadow-sm hover:shadow">
          <ArrowDownTrayIcon className="w-4 h-4" />
          <span>Download App</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="absolute top-0 right-4 h-full md:hidden flex items-center z-20">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shadow-sm hover:shadow"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6 text-blue-600" />
          ) : (
            <EllipsisHorizontalIcon className="w-6 h-6 text-blue-600" />
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
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm"
          >
            <div className="absolute inset-0">
              {/* Starfield Background */}
              <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 50 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-px h-px bg-blue-400 rounded-full animate-pulse"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      opacity: 0.3,
                    }}
                  />
                ))}
              </div>

              <div className="flex flex-col items-center justify-center h-full space-y-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: index * 0.1,
                      },
                    }}
                    exit={{ opacity: 0, y: 20 }}
                    className={`px-8 py-4 text-lg font-medium ${
                      activeLink === item.id ? "text-blue-600" : "text-gray-600"
                    }`}
                    onClick={() => {
                      setActiveLink(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-6 h-6" />
                      <span>{item.label}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
