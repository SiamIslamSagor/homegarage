"use client";
import logo from "@/app/assets/images/logo_white.png";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { Pivot as Hamburger } from "hamburger-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import fixmate from "@/app/assets/images/services_img/fixmate.png";
import partsHub from "@/app/assets/images/services_img/partshub.png";
import proDriver from "@/app/assets/images/services_img/prodiver.png";
import autoBazar from "@/app/assets/images/services_img/autobazar.png";
import garageSOS from "@/app/assets/images/services_img/garagesos.png";


interface ProductSubItem {
  title: string;
  href: string;
  description: string;
  src: StaticImageData;
}

interface SimpleSubItem {
  title: string;
  href: string;
}

interface MenuItem {
  name: string;
  href: string;
  subItems?: (ProductSubItem | SimpleSubItem)[];
}

export function NavbarDemo() {
  const pathname = usePathname();

  const isAuthPage =
    pathname.includes("/sign-in") || pathname.includes("/sign-up");

  if (isAuthPage) {
    return null;
  }

  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileExpand = (itemName: string) => {
    setExpandedMobileItem(prev => (prev === itemName ? null : itemName));
  };

  const menuItems: MenuItem[] = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "#",
      subItems: [
        {
          title: "Parts-Hub",
          href: "#",
          description:
            "Order vehicle parts and accessories with home delivery.",
          src: partsHub,
        },
        {
          title: "Fix-mate",
          href: "#",
          description: "Get a professional mechanic at your doorstep.",
          src: fixmate,
        },
        {
          title: "Pro Driver",
          href: "#",
          description: "Book reliable drivers anytime you need.",
          src: proDriver,
        },
        {
          title: "Auto bazar",
          href: "#",
          description: "Buy or sell vehicles and auto gear easily.",
          src: autoBazar,
        },
        {
          title: "Garage SOS",
          href: "#",
          description: "Quick help for roadside emergencies anytime.",
          src: garageSOS,
        },
      ],
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isProductSubItem = (
    item: ProductSubItem | SimpleSubItem
  ): item is ProductSubItem => {
    return "src" in item && "description" in item;
  };

  return (
    <>
      <div
        className={cn(
          "fixed top-10 inset-x-0 xl:w-7xl mx-auto z-50 ",
          className
        )}
      >
        {/* Desktop Menu */}
        <div className="max-lg:hidden">
          <Menu setActive={setActive} isScrolled={isScrolled}>
            {menuItems.map(item => (
              <MenuItem
                key={item.name}
                setActive={setActive}
                active={active}
                isScrolled={isScrolled}
                item={item.name}
                href={item.href}
              >
                {item.name === "Services" && (
                  <div className="text-sm grid grid-cols-2 gap-10 p-4">
                    {item.subItems?.map(
                      subItem =>
                        isProductSubItem(subItem) && (
                          <ProductItem
                            key={subItem.title}
                            title={subItem.title}
                            href={subItem.href}
                            src={subItem.src.src}
                            description={subItem.description}
                          />
                        )
                    )}
                  </div>
                )}       
              </MenuItem>
            ))}
          </Menu>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden fixed top-1 z-50 w-full mx-auto">
          <div className="w-[90%] mx-auto rounded-full  bg-blue-800 ">
            <div
              className={cn(
                "flex justify-between duration-300 items-center px-4 py-2",
                isScrolled ? "px-4 py-2" : "px-8 py-4"
              )}
            >
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <Image
                    src={logo}
                    alt="HomeGarage Logo"
                    className={cn(
                      "max-w-24 duration-300",
                      isScrolled ? "max-w-20" : "max-w-24"
                    )}
                  />
                </Link>
              </div>

              <Hamburger
                color="white"
                toggled={isMobileMenuOpen}
                toggle={setIsMobileMenuOpen}
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden fixed inset-0 bg-blue-700 z-40 pt-20 overflow-y-auto pb-20"
            >
              <div className="container mx-auto px-4">
                <div className="flex flex-col space-y-4 mt-10">
                  {menuItems.map(item => (
                    <div key={item.name} className="flex flex-col">
                      <div
                        className="flex items-center justify-between text-white text-lg py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors cursor-pointer"
                        onClick={() =>
                          item.subItems ? toggleMobileExpand(item.name) : null
                        }
                      >
                        <a
                          href={item.href}
                          className="flex-1"
                          onClick={e => {
                            if (item.subItems) {
                              e.preventDefault();
                            } else {
                              setIsMobileMenuOpen(false);
                            }
                          }}
                        >
                          {item.name}
                        </a>
                        {item.subItems && (
                          <ChevronDownIcon
                            className={`h-5 w-5 transition-transform ${
                              expandedMobileItem === item.name
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        )}
                      </div>

                      {/* Nested Menu Items */}
                      <AnimatePresence>
                        {item.subItems && expandedMobileItem === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mt-2 space-y-2"
                          >
                            {item.subItems.map(subItem => (
                              <a
                                key={subItem.title}
                                href={subItem.href}
                                className="block text-white/90 hover:text-white text-base py-2 px-4 rounded-lg hover:bg-blue-800/50 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <div className="flex items-start space-x-3">
                                  {isProductSubItem(subItem) && (
                                    <img
                                      src={subItem.src.src}
                                      alt={subItem.title}
                                      className="w-12 h-12 rounded-md object-cover"
                                    />
                                  )}
                                  <div>
                                    <div className="font-medium">
                                      {subItem.title}
                                    </div>
                                    {isProductSubItem(subItem) && (
                                      <p className="text-sm text-white/70 mt-1">
                                        {subItem.description}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
