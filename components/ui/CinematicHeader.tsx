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
  XMarkIcon,
} from "@heroicons/react/24/outline";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "features", label: "Features", icon: BeakerIcon },
  { id: "products", label: "Products", icon: CubeIcon },
  { id: "faq", label: "FAQ", icon: QuestionMarkCircleIcon },
  { id: "contact", label: "Contact", icon: PhoneIcon },
  { id: "download", label: "Download", icon: SparklesIcon, isSpecial: true },
];

export default function CinematicHeader() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const leftBarRef = useRef<HTMLDivElement>(null);
  const rightBarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const circuitRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // Initial animation timeline
    const tl = gsap.timeline();

    // Left bar animation
    tl.from(leftBarRef.current, {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.8)",
    })
      // Right bar animation
      .from(
        rightBarRef.current,
        {
          x: 100,
          opacity: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.8)",
        },
        "<"
      )
      // Logo animation
      .from(".logo-text", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      })
      // Nav items stagger
      .from(
        ".nav-item",
        {
          x: 50,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.5"
      );

    // Scroll behavior
    ScrollTrigger.create({
      start: "top-=100",
      onUpdate: self => {
        const shouldCompress = self.direction === 1 && self.progress > 0.1;
        setIsScrolled(shouldCompress);

        if (shouldCompress) {
          gsap.to(".header-bars", {
            height: "64px",
            duration: 0.4,
            ease: "power2.inOut",
          });
          gsap.to(".nav-item", {
            margin: "0 1rem",
            duration: 0.4,
          });
          gsap.to(".logo-full", {
            opacity: 0,
            display: "none",
            duration: 0.2,
          });
          gsap.to(".logo-minimal", {
            opacity: 1,
            display: "block",
            duration: 0.2,
            delay: 0.2,
          });
        } else {
          gsap.to(".header-bars", {
            height: "100vh",
            duration: 0.4,
            ease: "power2.inOut",
          });
          gsap.to(".nav-item", {
            margin: "1rem 0",
            duration: 0.4,
          });
          gsap.to(".logo-full", {
            opacity: 1,
            display: "block",
            duration: 0.2,
            delay: 0.2,
          });
          gsap.to(".logo-minimal", {
            opacity: 0,
            display: "none",
            duration: 0.2,
          });
        }
      },
    });

    // Circuit animation
    const circuit = circuitRef.current;
    if (circuit) {
      gsap.set(circuit, { strokeDasharray: circuit.getTotalLength() });
      gsap.fromTo(
        circuit,
        { strokeDashoffset: circuit.getTotalLength() },
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.inOut",
          repeat: -1,
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const handleItemHover = (id: string, isEnter: boolean) => {
    if (isEnter) {
      setActiveItem(id);
      gsap.to(`#item-${id}`, {
        scale: 1.1,
        filter: "brightness(1.3)",
        duration: 0.3,
      });
      // Circuit trail effect
      gsap.to(`#trail-${id}`, {
        width: "100%",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      setActiveItem(null);
      gsap.to(`#item-${id}`, {
        scale: 1,
        filter: "brightness(1)",
        duration: 0.3,
      });
      gsap.to(`#trail-${id}`, {
        width: "0%",
        opacity: 0,
        duration: 0.3,
      });
    }
  };

  return (
    <>
      {/* Circuit SVG */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none z-40">
        <path
          ref={circuitRef}
          d="M0,50 Q50,0 100,50 T200,50"
          className="circuit-path"
        />
      </svg>

      {/* Left Vertical Bar */}
      <div
        ref={leftBarRef}
        className={`header-bars fixed left-0 top-0 w-24 h-screen 
          bg-black/30 backdrop-blur-md border-r border-blue-500/20
          transition-all duration-300 z-50
          ${isScrolled ? "flex-row" : "flex-col"}`}
      >
        <div ref={logoRef} className="p-4">
          <div className="logo-full">
            <div
              className="writing-vertical-lr text-2xl font-bold 
              bg-clip-text text-transparent bg-gradient-to-b 
              from-blue-400 to-cyan-300"
            >
              <span className="logo-text">Home</span>
              <span className="logo-text ml-2">Garage</span>
            </div>
          </div>
          <div className="logo-minimal hidden">
            <div className="text-2xl font-bold text-blue-400">HG</div>
          </div>
        </div>
      </div>

      {/* Right Vertical Bar */}
      <div
        ref={rightBarRef}
        className={`header-bars fixed right-0 top-0 w-24 h-screen
          bg-black/30 backdrop-blur-md border-l border-blue-500/20
          flex ${
            isScrolled ? "flex-row justify-end" : "flex-col justify-center"
          }
          items-center transition-all duration-300 z-50`}
      >
        {navItems.map(item => (
          <div
            key={item.id}
            id={`item-${item.id}`}
            className={`nav-item relative ${isScrolled ? "mx-4" : "my-4"}`}
            onMouseEnter={() => handleItemHover(item.id, true)}
            onMouseLeave={() => handleItemHover(item.id, false)}
          >
            {/* Circuit Trail */}
            <div
              id={`trail-${item.id}`}
              className="absolute inset-0 w-0 h-full bg-blue-500/20
                rounded-full blur-sm transition-all duration-300"
            />

            {/* Icon Button */}
            <button
              className={`relative p-3 rounded-full transition-all duration-300
                ${item.isSpecial ? "bg-blue-500/20" : "bg-black/50"}
                border border-blue-400/30 group`}
            >
              <item.icon
                className={`w-6 h-6 transition-all duration-300
                ${item.isSpecial ? "text-cyan-400" : "text-blue-400"}`}
              />

              {/* Label */}
              <div
                className={`absolute left-full ml-3 px-3 py-1
                bg-blue-500/10 backdrop-blur-sm rounded-full
                transition-all duration-300 whitespace-nowrap
                ${
                  activeItem === item.id
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
              >
                <span className="text-sm font-medium text-blue-300">
                  {item.label}
                </span>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-12 h-12 rounded-full bg-blue-500/10 backdrop-blur-sm
            border border-blue-400/30 flex items-center justify-center"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6 text-blue-400" />
          ) : (
            <HomeIcon className="w-6 h-6 text-blue-400" />
          )}
        </button>
      </div>

      {/* Mobile Radial Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl md:hidden"
          >
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)]" />
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="border border-blue-500/10" />
                ))}
              </div>
            </div>

            {/* Radial Menu Items */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-72 h-72">
                {navItems.map((item, index) => {
                  const angle =
                    index * (360 / navItems.length) * (Math.PI / 180);
                  const radius = 120;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x,
                        y,
                        transition: {
                          type: "spring",
                          stiffness: 100,
                          damping: 15,
                          delay: index * 0.1,
                        },
                      }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                      <div
                        className={`p-4 rounded-lg backdrop-blur-sm
                        ${item.isSpecial ? "bg-blue-500/20" : "bg-black/50"}
                        border border-blue-400/30 hover:bg-blue-500/30
                        transition-colors duration-300`}
                      >
                        <item.icon
                          className={`w-6 h-6
                          ${
                            item.isSpecial ? "text-cyan-400" : "text-blue-400"
                          }`}
                        />
                        <span className="block text-xs text-center mt-1 text-blue-300">
                          {item.label}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
