"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaTools,
  FaInfoCircle,
  FaPhone,
  FaCar,
  FaWrench,
  FaShoppingCart,
  FaExchangeAlt,
  FaExclamationTriangle,
} from "react-icons/fa";
import Link from "next/link";

const FloatingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Home",
      href: "#home",
      icon: FaHome,
      color: "from-blue-500 to-cyan-500",
      description: "Welcome to HomeGarage",
    },
    {
      name: "Services",
      href: "#services",
      icon: FaTools,
      color: "from-purple-500 to-pink-500",
      description: "Our Premium Services",
    },
    {
      name: "About",
      href: "#about",
      icon: FaInfoCircle,
      color: "from-green-500 to-emerald-500",
      description: "Learn About Us",
    },
    {
      name: "Contact",
      href: "#contact",
      icon: FaPhone,
      color: "from-orange-500 to-red-500",
      description: "Get in Touch",
    },
  ];

  const serviceItems = [
    {
      name: "Book Mechanic",
      href: "#book-mechanic",
      icon: FaWrench,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Hire Driver",
      href: "#hire-driver",
      icon: FaCar,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Parts Store",
      href: "#parts-store",
      icon: FaShoppingCart,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Buy & Sell",
      href: "#buy-sell",
      icon: FaExchangeAlt,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Emergency SOS",
      href: "#emergency",
      icon: FaExclamationTriangle,
      color: "from-red-500 to-rose-500",
    },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 ${
        isScrolled ? "scale-90" : "scale-100"
      } transition-transform duration-300`}
    >
      {/* Main Navigation Circle */}
      <div className="relative">
        <motion.div
          className="w-16 h-16 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          animate={{
            rotate: isScrolled ? 360 : 0,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <FaCar className="text-2xl text-white" />
        </motion.div>

        {/* Floating Navigation Items */}
        {navItems.map((item, index) => {
          const angle = (index * 360) / navItems.length;
          const radius = 100; // Distance from center
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={item.name}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                x: x,
                y: y,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                rotate: isScrolled ? 360 : 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              <motion.div
                className="relative"
                onHoverStart={() => setHoveredItem(item.name)}
                onHoverEnd={() => setHoveredItem(null)}
                whileHover={{ scale: 1.2 }}
              >
                <Link href={item.href}>
                  <motion.div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <item.icon className="text-xl text-white" />
                  </motion.div>
                </Link>

                {/* Hover Text */}
                <AnimatePresence>
                  {hoveredItem === item.name && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, x: -20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.8, x: -20 }}
                      className="absolute left-full ml-4 top-1/2 -translate-y-1/2 whitespace-nowrap"
                    >
                      <div className="bg-black/90 backdrop-blur-xl px-4 py-2 rounded-lg border border-white/10">
                        <p className="text-white font-medium">{item.name}</p>
                        <p className="text-white/60 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}

        {/* Service Items (Inner Circle) */}
        {serviceItems.map((item, index) => {
          const angle = (index * 360) / serviceItems.length;
          const radius = 60; // Smaller radius for inner circle
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={item.name}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                x: x,
                y: y,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                rotate: isScrolled ? -360 : 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1 + 0.5,
                rotate: {
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              <motion.div
                className="relative"
                onHoverStart={() => setHoveredItem(item.name)}
                onHoverEnd={() => setHoveredItem(null)}
                whileHover={{ scale: 1.2 }}
              >
                <Link href={item.href}>
                  <motion.div
                    className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <item.icon className="text-sm text-white" />
                  </motion.div>
                </Link>

                {/* Hover Text */}
                <AnimatePresence>
                  {hoveredItem === item.name && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, x: -20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.8, x: -20 }}
                      className="absolute left-full ml-4 top-1/2 -translate-y-1/2 whitespace-nowrap"
                    >
                      <div className="bg-black/90 backdrop-blur-xl px-4 py-2 rounded-lg border border-white/10">
                        <p className="text-white font-medium">{item.name}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default FloatingNavbar;
