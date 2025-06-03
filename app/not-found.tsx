"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "@/app/assets/images/originalLogo.png";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-6 flex justify-center">
          <Image
            src={logo}
            alt="HomeGarage Logo"
            width={160}
            height={40}
            priority
          />
        </div>

        <div className="mb-8">
          <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => router.back()}
            className="w-full py-3 px-4 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Go Back
          </button>
          <button
            onClick={() => router.push("/")}
            className="w-full py-3 px-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
}
