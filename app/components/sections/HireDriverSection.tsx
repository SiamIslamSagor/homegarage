"use client";

import React from "react";
import { motion } from "framer-motion";

const HireDriverSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white" />

        {/* SVG Background Elements */}
        <div className="absolute inset-0 opacity-20">
          {/* Chauffeur Cap Pattern */}
          <svg
            className="absolute top-20 left-20 w-24 h-24 text-purple-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>

          {/* Luxury Car Pattern */}
          <svg
            className="absolute bottom-40 right-40 w-32 h-32 text-pink-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <path d="M5 11h14M5 11a2 2 0 01-2-2V6l6-4h6l6 4v3a2 2 0 01-2 2M5 11v6a2 2 0 002 2h14a2 2 0 002-2v-6" />
            <path d="M8 12v4M16 12v4" />
            <path d="M7 19h2m6 0h2" />
          </svg>

          {/* Clock Pattern */}
          <svg
            className="absolute top-1/2 left-1/3 w-28 h-28 text-orange-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>

          {/* Shield Pattern */}
          <svg
            className="absolute bottom-20 left-1/4 w-24 h-24 text-purple-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>

          {/* Star Pattern */}
          <svg
            className="absolute top-1/3 right-1/4 w-20 h-20 text-pink-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>

        <motion.div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-100 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-pink-100 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Professional Drivers",
                  description: "Licensed and experienced drivers",
                  icon: "🚗",
                },
                {
                  title: "Flexible Hours",
                  description: "Book for any duration you need",
                  icon: "⏱️",
                },
                {
                  title: "Safe & Reliable",
                  description: "Fully insured and background checked",
                  icon: "🛡️",
                },
                {
                  title: "Premium Service",
                  description: "Luxury vehicles available",
                  icon: "✨",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-purple-300 transition-colors"
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-purple-100 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-pink-100 blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Hire a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Professional Driver
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
              Experience luxury and convenience with our professional driving
              service. Whether you need a driver for a day or an extended
              period, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium"
              >
                Hire Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white rounded-full text-purple-600 font-medium border border-purple-200 hover:border-purple-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HireDriverSection;
