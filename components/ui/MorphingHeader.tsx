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
  { id: "download", label: "Download", isButton: true },
];

export default function MorphingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const headerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Initial animations
    const tl = gsap.timeline();
    timelineRef.current = tl;

    tl.from(logoRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        ".subtitle",
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .from(
        ".menu-button",
        {
          x: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.8"
      );

    // Scroll behavior
    ScrollTrigger.create({
      start: "top-=100",
      onUpdate: self => {
        if (!headerRef.current) return;

        gsap.to(headerRef.current, {
          yPercent: self.direction === 1 ? -100 : 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      },
    });

    return () => {
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, []);

  const handleMenuToggle = () => {
    if (!menuRef.current) return;

    const tl = gsap.timeline();

    if (!isMenuOpen) {
      tl.to(menuRef.current, {
        clipPath: "inset(0 0 0 0)",
        duration: 0.6,
        ease: "power3.inOut",
      }).from(
        ".nav-item",
        {
          y: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
      );
    } else {
      tl.to(".nav-item", {
        y: 50,
        opacity: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.in",
      }).to(menuRef.current, {
        clipPath: "inset(0 100% 0 0)",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }

    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (id: string) => {
    setActiveLink(id);
    const element = document.getElementById(id);
    if (!element) return;

    gsap.to(window, {
      scrollTo: { y: element, autoKill: false },
      duration: 1,
      ease: "power2.inOut",
    });

    if (window.innerWidth < 768) {
      handleMenuToggle();
    }
  };

  return (
    <>
      {/* Main Header */}
      <div
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      >
        {/* Logo Corner */}
        <div
          ref={logoRef}
          className="absolute top-6 left-6 pointer-events-auto"
        >
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
              HomeGarage
            </h1>
            <span className="subtitle text-sm text-blue-300 mt-1">
              Drive the Future
            </span>
          </div>
        </div>

        {/* Menu Button Corner */}
        <div className="absolute top-6 right-6 pointer-events-auto">
          <button
            onClick={handleMenuToggle}
            className="menu-button w-12 h-12 rounded-full bg-blue-500/10 
              backdrop-blur-sm border border-blue-500/20 flex items-center justify-center
              hover:bg-blue-500/20 transition-colors"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-blue-400" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-blue-400" />
            )}
          </button>
        </div>

        {/* Morphing Navigation */}
        <div
          ref={menuRef}
          className="absolute top-0 left-0 right-0 bg-black/50 backdrop-blur-md
            pointer-events-auto clip-hidden border-b border-blue-500/20"
          style={{ clipPath: "inset(0 100% 0 0)" }}
        >
          <nav className="max-w-7xl mx-auto px-6 py-6">
            <ul className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              {navItems.map(item => (
                <li key={item.id} className="nav-item">
                  {item.isButton ? (
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className="px-6 py-2 rounded-full bg-blue-500 text-white
                        hover:bg-blue-600 transition-colors"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`relative text-lg ${
                        activeLink === item.id
                          ? "text-blue-400"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item.label}
                      {activeLink === item.id && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"
                        />
                      )}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && window.innerWidth < 768 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-lg md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
