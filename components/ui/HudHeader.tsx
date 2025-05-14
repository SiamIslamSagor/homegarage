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
} from "@heroicons/react/24/outline";

gsap.registerPlugin(ScrollTrigger);

const navNodes = [
  { id: "home", label: "Home", icon: HomeIcon, x: -40, y: 10 },
  { id: "features", label: "Features", icon: BeakerIcon, x: -25, y: -15 },
  { id: "products", label: "Products", icon: CubeIcon, x: -10, y: 20 },
  { id: "faq", label: "FAQ", icon: QuestionMarkCircleIcon, x: 10, y: -10 },
  { id: "contact", label: "Contact", icon: PhoneIcon, x: 25, y: 15 },
  {
    id: "download",
    label: "Download",
    icon: SparklesIcon,
    x: 40,
    y: -20,
    isSpecial: true,
  },
];

export default function HudHeader() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [isCompressed, setIsCompressed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial floating animation for nodes
    gsap.to(".hud-node", {
      y: "random(-10, 10)",
      rotation: "random(-5, 5)",
      duration: "random(2, 3)",
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: {
        amount: 1.5,
        from: "center",
      },
    });

    // Logo pulse animation
    gsap.to(logoRef.current, {
      scale: 1.05,
      filter: "brightness(1.2)",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Grid background animation
    gsap.to(".grid-line", {
      backgroundPosition: "0 100%",
      duration: 20,
      repeat: -1,
      ease: "none",
    });

    // Scroll behavior
    ScrollTrigger.create({
      start: "top-=100",
      onUpdate: self => {
        const shouldCompress = self.direction === 1 && self.progress > 0.1;
        if (shouldCompress !== isCompressed) {
          setIsCompressed(shouldCompress);
          gsap.to(nodesRef.current, {
            scale: shouldCompress ? 0.6 : 1,
            y: shouldCompress ? -20 : 0,
            duration: 0.4,
            ease: "power2.inOut",
          });
        }
      },
    });
  }, [isCompressed]);

  const handleNodeHover = (id: string, isEnter: boolean) => {
    if (isEnter) {
      setActiveNode(id);
      gsap.to(`#node-${id}`, {
        scale: 1.15,
        duration: 0.3,
        ease: "power2.out",
      });
      // Ripple effect
      gsap.to(`#ripple-${id}`, {
        scale: 1.5,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    } else {
      setActiveNode(null);
      gsap.to(`#node-${id}`, {
        scale: 1,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  };

  const handleNodeClick = (id: string) => {
    // Light beam animation to section
    const element = document.getElementById(id);
    if (!element) return;

    const beam = document.createElement("div");
    beam.className = "light-beam";
    document.body.appendChild(beam);

    const nodeRect = document
      .getElementById(`node-${id}`)
      ?.getBoundingClientRect();
    const targetRect = element.getBoundingClientRect();

    if (nodeRect) {
      gsap.fromTo(
        beam,
        {
          top: nodeRect.bottom,
          left: nodeRect.left + nodeRect.width / 2,
          height: 0,
        },
        {
          height: targetRect.top - nodeRect.bottom,
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => {
            beam.remove();
            gsap.to(window, {
              scrollTo: element,
              duration: 1,
              ease: "power2.inOut",
            });
          },
        }
      );
    }
  };

  return (
    <>
      {/* Grid Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="grid-line absolute inset-0 opacity-10 bg-gradient-to-b from-blue-500/20 via-transparent to-transparent bg-[length:100%_4px] bg-repeat-y" />
      </div>

      {/* Main HUD Header */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 h-32 z-50 pointer-events-none"
      >
        {/* Logo Core */}
        <div
          ref={logoRef}
          className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-auto"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full" />
            <div className="relative bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-6 py-2 rounded-full border border-blue-400/30 backdrop-blur-sm">
              <h1 className="text-xl font-bold">HomeGarage</h1>
            </div>
          </div>
        </div>

        {/* Floating Nodes */}
        <div
          ref={nodesRef}
          className="relative max-w-7xl mx-auto px-6 h-full flex items-center justify-center"
        >
          {navNodes.map(node => (
            <div
              key={node.id}
              id={`node-${node.id}`}
              className={`hud-node absolute pointer-events-auto transform
                ${node.isSpecial ? "text-cyan-400" : "text-blue-400"}`}
              style={{
                left: `calc(50% + ${node.x}%)`,
                top: `calc(50% + ${node.y}%)`,
              }}
              onMouseEnter={() => handleNodeHover(node.id, true)}
              onMouseLeave={() => handleNodeHover(node.id, false)}
              onClick={() => handleNodeClick(node.id)}
            >
              {/* Hexagon Shape */}
              <div className="relative">
                <div
                  id={`ripple-${node.id}`}
                  className="absolute inset-0 bg-blue-500/20 rounded-lg transform scale-0 opacity-0"
                />
                <div
                  className={`relative p-3 backdrop-blur-sm rounded-lg
                  border border-blue-400/30 transition-colors duration-300
                  ${
                    activeNode === node.id ? "bg-blue-500/20" : "bg-blue-500/10"
                  }
                  hover:bg-blue-500/30`}
                >
                  <node.icon className="w-6 h-6" />
                  <div
                    className={`absolute left-full ml-2 whitespace-nowrap
                    transition-all duration-300 flex items-center
                    ${
                      activeNode === node.id
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2"
                    }`}
                  >
                    <span className="text-sm font-medium">{node.label}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="absolute top-4 right-4 md:hidden pointer-events-auto">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-12 h-12 rounded-full bg-blue-500/10 backdrop-blur-sm
              border border-blue-400/30 flex items-center justify-center"
          >
            <SparklesIcon className="w-6 h-6 text-blue-400" />
          </button>
        </div>
      </header>

      {/* Mobile Radial Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-lg md:hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64">
                {navNodes.map((node, index) => {
                  const angle =
                    index * (360 / navNodes.length) * (Math.PI / 180);
                  const radius = 100;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.div
                      key={node.id}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x,
                        y,
                        transition: { delay: index * 0.1 },
                      }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      onClick={() => {
                        handleNodeClick(node.id);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <div
                        className={`p-4 rounded-lg backdrop-blur-sm
                        border border-blue-400/30 bg-blue-500/10
                        hover:bg-blue-500/30 transition-colors duration-300`}
                      >
                        <node.icon className="w-6 h-6 text-blue-400" />
                        <span className="block text-xs text-center mt-1 text-blue-300">
                          {node.label}
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
