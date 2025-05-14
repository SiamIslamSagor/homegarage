"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "@/app/assets/images/logo_white.png";

const NewNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/products" },
    { name: "Business", href: "/business" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-blue-600 text-white transition-all duration-300 z-50 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto container max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="HomeGarage Logo" className="max-w-32" />
              {/* <span
                className={`text-xl font-bold transition-all duration-300 ${
                  isScrolled ? "text-lg" : "text-2xl"
                }`}
              >
                Logo
              </span> */}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            {menuItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group px-6 py-3"
              >
                <span
                  className={`relative z-10 transition-all duration-300 ${
                    isScrolled ? "text-sm" : "text-base"
                  }`}
                >
                  {item.name}
                </span>
                <motion.div
                  className="absolute inset-0 border-2 border-dashed border-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            ))}
            <Link href="/admin" className="relative group px-6 py-3">
              <span
                className={`relative z-10 transition-all duration-300 ${
                  isScrolled ? "text-sm" : "text-base"
                }`}
              >
                Admin
              </span>
              <motion.div
                className="absolute inset-0 border-2 border-dashed border-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
            <Link
              href="/sign-up"
              className={`bg-white text-blue-600 ml-4 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 ${
                isScrolled ? "text-sm py-1.5" : "text-base py-2"
              }`}
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-blue-700"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/admin"
                className="block px-3 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Admin
              </Link>
              <Link
                href="/sign-up"
                className="block px-3 py-2 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NewNavbar;
