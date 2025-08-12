"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const BuySellSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white" />
        <motion.div
          className="absolute top-1/3 right-1/3 w-[700px] h-[700px] rounded-full bg-orange-500/20 blur-3xl"
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
          className="absolute bottom-1/6 left-1/3 w-[700px] h-[700px] rounded-full bg-amber-500/10 blur-3xl border border-amber-500"
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
          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            // className="text-center lg:text-left order-1 lg:order-2"
            className="text-center lg:text-left order-1"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                Auto bazar
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
              Your trusted marketplace for buying and selling vehicles. List
              your car or find your perfect match with our secure and
              user-friendly platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-white font-medium"
              >
                <Link href="https://play.google.com/store/apps" target="_blank">
                  List Your Vehicle
                </Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white rounded-full text-orange-600 font-medium border border-orange-200 hover:border-orange-300"
              >
                <Link href="https://apps.apple.com/us/app" target="_blank">
                  Browse Listings
                </Link>
              </motion.button>
            </div>
          </motion.div>

          {/* Left Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            // className="relative order-2 lg:order-1"
            className="relative  order-2"
          >
            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Verified Listings",
                  description: "All vehicles are inspected and verified",
                  icon: "✅",
                },
                {
                  title: "Secure Payments",
                  description: "Safe and protected transactions",
                  icon: "🔒",
                },
                {
                  title: "Market Insights",
                  description: "Real-time pricing and trends",
                  icon: "📊",
                },
                {
                  title: "Easy Process",
                  description: "Simple listing and buying process",
                  icon: "🎯",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-orange-500/50 transition-colors"
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
              className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-orange-500/20 blur-2xl"
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
              className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-amber-500/20 blur-2xl"
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
        </div>
      </div>
    </section>
  );
};

export default BuySellSection;
