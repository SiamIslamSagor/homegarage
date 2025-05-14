"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/app/assets/images/originalLogo.png";
import GarageOwnerSignUpForm from "@/components/auth/GarageOwnerSignUpForm";
import PartsShopOwnerSignUpForm from "@/components/auth/PartsShopOwnerSignUpForm";
import MechanicSignUpForm from "@/components/auth/MechanicSignUpForm";

type Category = "garageOwner" | "partsShopOwner" | "mechanic";

const SignUpPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const renderForm = () => {
    if (!selectedCategory) return null;

    switch (selectedCategory) {
      case "garageOwner":
        return <GarageOwnerSignUpForm />;
      case "partsShopOwner":
        return <PartsShopOwnerSignUpForm />;
      case "mechanic":
        return <MechanicSignUpForm />;
      default:
        return null;
    }
  };

  return (
    <div className="*:text-black flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 font-sans">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-6 flex justify-center">
          <Image
            src={logo}
            alt="HomeGarage Logo"
            width={160}
            height={40}
            priority
          />
        </div>

        <h2 className="mb-2 text-center text-2xl font-bold text-gray-800">
          Join HomeGarage
        </h2>
        <p className="mb-6 text-center text-sm text-gray-500">
          {selectedCategory
            ? `Tell us more about your ${
                selectedCategory === "garageOwner"
                  ? "garage"
                  : selectedCategory === "partsShopOwner"
                  ? "parts shop"
                  : "services"
              }`
            : "First, tell us who you are:"}
        </p>

        {!selectedCategory ? (
          <div className="space-y-4">
            <button
              onClick={() => setSelectedCategory("garageOwner")}
              className="w-full rounded-lg bg-indigo-600 py-3 px-4 text-white font-semibold hover:bg-indigo-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              I am a Garage Owner
            </button>
            <button
              onClick={() => setSelectedCategory("partsShopOwner")}
              className="w-full rounded-lg bg-teal-600 py-3 px-4 text-white font-semibold hover:bg-teal-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              I am a Parts Shop Owner
            </button>
            <button
              onClick={() => setSelectedCategory("mechanic")}
              className="w-full rounded-lg bg-amber-600 py-3 px-4 text-white font-semibold hover:bg-amber-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              I am a Mechanic
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={() => setSelectedCategory(null)}
              className="mb-4 text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              &larr; Back to category selection
            </button>
            {renderForm()}
          </div>
        )}

        {/* <div className="mt-8">
          <p className="my-1.5 text-center text-sm text-gray-700 relative">
            <span className="absolute left-0 top-1/2 w-[calc(50%-3.5rem)] h-px bg-gray-300"></span>
            <span className="absolute right-0 top-1/2 w-[calc(50%-3.5rem)] h-px bg-gray-300"></span>
            Or With
          </p>

          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/sign-in"
              className="font-medium text-indigo-600 hover:text-indigo-700"
            >
              Sign In
            </a>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default SignUpPage;
