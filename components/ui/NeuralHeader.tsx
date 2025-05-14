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
  ChartBarIcon,
} from "@heroicons/react/24/outline";

gsap.registerPlugin(ScrollTrigger);

interface NavNode {
  id: string;
  label: string;
  icon: any;
  description: string;
  angle?: number;
  radius?: number;
}

const navNodes: NavNode[] = [
  {
    id: "home",
    label: "Home",
    icon: HomeIcon,
    description: "Return to main dashboard",
  },
  {
    id: "features",
    label: "Features",
    icon: BeakerIcon,
    description: "Explore smart garage features",
  },
  {
    id: "benefits",
    label: "Benefits",
    icon: ChartBarIcon,
    description: "See how we improve your garage",
  },
  {
    id: "products",
    label: "Products",
    icon: CubeIcon,
    description: "Browse our product lineup",
  },
  {
    id: "faq",
    label: "FAQ",
    icon: QuestionMarkCircleIcon,
    description: "Get quick answers",
  },
  {
    id: "contact",
    label: "Contact",
    icon: PhoneIcon,
    description: "Reach our support team",
  },
  {
    id: "download",
    label: "Download",
    icon: SparklesIcon,
    description: "Get the mobile app",
  },
];

export default function NeuralHeader() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [focusedNode, setFocusedNode] = useState<string | null>(null);

  const coreRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Calculate node positions for mobile menu
  useEffect(() => {
    navNodes.forEach((node, index) => {
      const angle = (index * (2 * Math.PI)) / navNodes.length;
      node.angle = angle;
      node.radius = 120;
    });
  }, []);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    // Set initial scroll state
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNodeClick = (id: string) => {
    console.log(`Navigating to ${id}`);
    setIsMobileMenuOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleNodeClick(id);
    }
  };

  const handleMobileMenuKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className="fixed top-0 left-0 w-full h-16 bg-white/30 z-[100] shadow-sm"
      role="banner"
    >
      <nav
        className="relative h-full px-4 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo/Home Button */}
        <button
          ref={coreRef}
          className="w-10 h-10 rounded-full bg-white shadow-md border border-blue-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={() => handleNodeClick("home")}
          aria-label="Go to home"
        >
          <SparklesIcon className="w-5 h-5 text-blue-500" />
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-10 h-10 rounded-full bg-white shadow-md border border-blue-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-5 h-5 text-blue-500" />
          ) : (
            <HomeIcon className="w-5 h-5 text-blue-500" />
          )}
        </button>

        {/* Mobile Radial Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-1000 bg-white/20 backdrop-blur-sm"
              onKeyDown={handleMobileMenuKeyPress}
              role="dialog"
              aria-label="Mobile navigation menu"
            >
              {/* Close button in top-right corner */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-md border border-blue-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-500"
                aria-label="Close menu"
              >
                <XMarkIcon className="w-5 h-5 text-blue-500" />
              </button>

              {/* Circular Menu */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[280px] h-[280px]">
                  {/* Center Circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center">
                    <SparklesIcon className="w-8 h-8 text-blue-500" />
                  </div>

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    {navNodes.map(node => (
                      <line
                        key={`connection-${node.id}`}
                        className="node-connection"
                        x1="50%"
                        y1="50%"
                        x2={`${50 + Math.cos(node.angle!) * 50}%`}
                        y2={`${50 + Math.sin(node.angle!) * 50}%`}
                        stroke="rgba(59,130,246,0.2)"
                        strokeWidth="1"
                      />
                    ))}
                  </svg>

                  {/* Menu Items */}
                  {navNodes.map((node, index) => {
                    const x = Math.cos(node.angle!) * node.radius!;
                    const y = Math.sin(node.angle!) * node.radius!;

                    return (
                      <motion.div
                        key={node.id}
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
                        <div className="flex flex-col items-center relative">
                          <button
                            onClick={() => handleNodeClick(node.id)}
                            onKeyPress={e => handleKeyPress(e, node.id)}
                            className="w-12 h-12 rounded-full bg-white shadow-md border border-blue-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:border-blue-400 transition-colors duration-300"
                            aria-label={node.description}
                          >
                            <node.icon className="w-6 h-6 text-blue-500" />
                          </button>
                          {/* Label */}
                          <div className="mt-2 text-center absolute top-10">
                            <span className="text-xs text-white font-medium whitespace-nowrap">
                              {node.label}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
