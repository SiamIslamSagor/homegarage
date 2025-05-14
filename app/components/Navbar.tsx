"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaBox,
  FaInfoCircle,
  FaPhone,
  FaDownload,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
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
    { name: "Home", href: "#home", icon: FaHome },
    { name: "Products", href: "#products", icon: FaBox },
    { name: "About Us", href: "#about", icon: FaInfoCircle },
    { name: "Contact", href: "#contact", icon: FaPhone },
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
      <div className="relative">
        {/* Main Dock */}
        <motion.div
          className=" bg-white/60 backdrop-filter backdrop-blur-sm rounded-full borrrder border-[#E5D9C0] shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] p-4 px-6 flex items-center space-x-8"
          // className="bg-[#F5F0E6]/95 backdrop-blur-2xl rounded-2xl border border-[#E5D9C0] shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] p-2 px-6 flex items-center space-x-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo */}
          <motion.div
            className="relative"
            onHoverStart={() => setHoveredItem("logo")}
            onHoverEnd={() => setHoveredItem(null)}
          >
            <Link href="/">
              <motion.div
                className="w-32 h-12 rounded-xl overflow-hidden flex items-center justify-center"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="/app-logo.png"
                  alt="HomeGarage"
                  width={120}
                  height={68}
                  className="object-contain"
                  priority
                />
              </motion.div>
            </Link>
            <AnimatePresence>
              {hoveredItem === "logo" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-[#231F20] rounded-lg text-white text-sm whitespace-nowrap"
                >
                  HomeGarage
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Separator */}
          <div className="w-px h-8 bg-[#E5D9C0]" />

          {/* Navigation Items */}
          {navItems.map(item => (
            <motion.div
              key={item.name}
              className="relative"
              onHoverStart={() => setHoveredItem(item.name)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <Link href={item.href}>
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    activeSection === item.name.toLowerCase()
                      ? "bg-white *:!text-blue-700"
                      : "hover:bg-white/50"
                  }`}
                  // whileHover={{ scale: 1.2, y: -10 }}
                  whileHover={{
                    scale: 1.2,
                    y: -10,
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                  }}
                  whileTap={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  onClick={() => setActiveSection(item.name.toLowerCase())}
                >
                  <item.icon className="text-3xl text-[#231F20]" />
                </motion.div>
              </Link>
              <AnimatePresence>
                {hoveredItem === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-[#231F20] rounded-lg text-white text-sm whitespace-nowrap"
                  >
                    {item.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          {/* Separator */}
          <div className="w-px h-8 bg-[#E5D9C0]" />

          {/* Download App Button */}
          <motion.div
            className="relative"
            onHoverStart={() => setHoveredItem("download")}
            onHoverEnd={() => setHoveredItem(null)}
          >
            <Link href="#download">
              <motion.div
                className="w-12 h-12 rounded-xl bg-[#231F20] flex items-center justify-center shadow-lg shadow-black/10"
                whileHover={{ scale: 1.2, y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <FaDownload className="text-xl text-white" />
              </motion.div>
            </Link>
            <AnimatePresence>
              {hoveredItem === "download" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-[#231F20] rounded-lg text-white text-sm whitespace-nowrap"
                >
                  Download App
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
