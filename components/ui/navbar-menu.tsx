"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/images/logo_white.png";
import { cn } from "@/lib/utils";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  isScrolled = false,
  href = "/",
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  isScrolled: boolean;
  href?: string;
}) => {
  // console.log(children ? "true" : "false");
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className={cn(
          "cursor-pointer duration-300 text-white hover:opacity-[0.9] border border-dashed border-transparent hover:border-white px-4 py-2 mx-2 rounded-full",
          isScrolled ? "text-sm" : "text-base"
        )}
      >
        <Link href={href}>{item}</Link>
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && children && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white  backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2]   shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  isScrolled = false,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  isScrolled: boolean;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className={cn(
        "relative rounded-full border border-transparent duration-300 bg-blue-700 shadow-input flex justify-between items-center space-x-4 px-10 py-6 max-xl:mx-10",
        isScrolled ? " py-4 px-8" : " py-6 px-10"
      )}
    >
      {/* Logo */}
      <div className="flex-shrink---0">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="HomeGarage Logo"
            className={cn(
              "max-w-32 duration-300",
              isScrolled ? "max-w-28" : "max-w-32"
            )}
          />
        </Link>
      </div>
      <div className="flex justify-center">{children}</div>
      <div>
        <Link
          href="/sign-up"
          className={`bg-white text-blue-600 ml-4 font-medium hover:bg-blue-50 transition-all duration-300 text-base rounded-full ${
            isScrolled ? "px-5 py-3 text-sm" : "px-8 py-4 text-base"
          }`}
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black ">{title}</h4>
        <p className="text-neutral-700 text-sm max-w-[10rem]  ">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a {...rest} className="text-neutral-700  hover:text-black ">
      {children}
    </a>
  );
};
