"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // To highlight active link
import Image from "next/image";
import logo from "@/app/assets/images/originalLogo.png"; // Adjust path if needed
import { ChevronDownIcon } from "@heroicons/react/24/outline";

// Define a type for Icon components
type IconProps = {
  className?: string;
  "aria-hidden"?: boolean;
};

// Placeholder icons (replace with actual SVGs or an icon library)
const HomeIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);
const ChartBarIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);
const UsersIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 016-6h6a6 6 0 016 6v1h-3M15 21a2 2 0 002-2v-.879a1 1 0 00-.553-.894l-3.447-1.724M15 21a2 2 0 01-2-2v-.879a1 1 0 01.553-.894l3.447-1.724"
    />
  </svg>
);
const CogIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const navigation = [
  {
    name: "Back to Home",
    href: "/",
    icon: HomeIcon as React.ElementType<IconProps>,
  },

  {
    name: "Survey",
    icon: ChartBarIcon as React.ElementType<IconProps>,
    children: [
      {
        name: "Garage Owners",
        href: "/admin/survey/garage-owners",
      },
      {
        name: "Parts Shop Owners",
        href: "/admin/survey/parts-shop-owners",
      },
      {
        name: "Mechanics",
        href: "/admin/survey/mechanics",
      },
    ],
  },
  {
    name: "Analytics",
    href: "/admin/analytics",
    icon: ChartBarIcon as React.ElementType<IconProps>,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>("Survey");

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4">
      <div className="flex flex-shrink-0 items-center px-4">
        <Link href="/admin">
          <Image
            className="h-8 w-auto"
            src={logo}
            alt="HomeGarage Dashboard"
            width={150} // Adjust as needed
            height={40} // Adjust as needed
          />
        </Link>
      </div>
      <div className="mt-5 flex flex-grow flex-col">
        <nav className="flex-1 space-y-1 px-2" aria-label="Sidebar">
          {navigation.map(item => (
            <div key={item.name}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={classNames(
                      "w-full group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                      pathname.includes("/admin/survey")
                        ? "bg-indigo-100 text-indigo-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        pathname.includes("/admin/survey")
                          ? "text-indigo-500"
                          : "text-gray-400 group-hover:text-gray-500",
                        "mr-3 flex-shrink-0 h-6 w-6"
                      )}
                      aria-hidden={true}
                    />
                    {item.name}
                    <ChevronDownIcon
                      className={classNames(
                        "ml-auto h-5 w-5 transform transition-transform duration-200",
                        openDropdown === item.name ? "rotate-180" : ""
                      )}
                    />
                  </button>
                  {openDropdown === item.name && (
                    <div className="ml-8 mt-1 space-y-1">
                      {item.children.map(child => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={classNames(
                            child.href === pathname
                              ? "bg-indigo-100 text-indigo-900"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                            "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                          )}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={classNames(
                    item.href === pathname
                      ? "bg-indigo-100 text-indigo-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.href === pathname
                        ? "text-indigo-500"
                        : "text-gray-400 group-hover:text-gray-500",
                      "mr-3 flex-shrink-0 h-6 w-6"
                    )}
                    aria-hidden={true}
                  />
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
