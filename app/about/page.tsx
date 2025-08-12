"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
// import aboutImage from "@/app/assets/images/about-hero.jpg";
import ashiqur from "@/app/assets/images/team/ashik.jpg";
import tushar from "@/app/assets/images/team/tushar.jpg";
import moushumi from "@/app/assets/images/team/mousumi.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutPage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "10k+", label: "Cars Serviced" },
    { number: "50+", label: "Expert Technicians" },
    { number: "99%", label: "Customer Satisfaction" },
  ];

  const services = [
    {
      title: "Diagnostic Excellence",
      description:
        "State-of-the-art diagnostic equipment and expert analysis for precise problem identification.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Preventive Maintenance",
      description:
        "Regular maintenance programs to keep your vehicle running at peak performance.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
    },
    {
      title: "Performance Upgrades",
      description:
        "Custom performance enhancements and upgrades for optimal vehicle performance.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      question: "What is HomeGarage?",
      answer:
        "HomeGarage is a digital marketplace that connects car owners with verified mechanics, drivers, and auto parts sellers. We offer on-demand car services, emergency roadside assistance, and a platform to buy/sell new or used car parts.",
    },
    {
      question: "How do I register as a customer?",
      answer:
        "Download the HomeGarage Customer App, sign up with your mobile number, and complete your profile.",
    },
    {
      question: "How can I join as a service provider?",
      answer:
        "Download the HomeGarage Provider App. Select your category (Mechanic/Driver/Garage/Store). Submit required documents (NID, license, trade license). Get verified within 24 hours.",
    },
    {
      question: "What documents do I need to register?",
      answer:
        "Mechanics: NID, experience certificate (if any). Drivers: NID, valid driving license. Garages/Stores: Trade license, TIN, bank account details.",
    },
    {
      question: "How do I get paid?",
      answer:
        "Payments are transferred weekly to your bKash/bank account after a 15% platform fee deduction.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white max-w-7xl container mx-auto">
      {/* Hero Section */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden"
      >
        <motion.div variants={fadeIn} className="container mx-auto px-4">
          <div className="text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              About HomeGarage
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto"
            >
              Your trusted partner in automotive excellence. We're dedicated to
              providing top-notch car maintenance and repair services with
              transparency and integrity.
            </motion.p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={staggerContainer}
          className="mt-20 bg-blue-700 py-12 rounded-3xl mx-4 md:mx-8"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="text-center text-white"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl md:text-5xl font-bold">
                    {stat.number}
                  </div>
                  <div className="mt-2 text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 sm:py-24"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="rounded-lg bg-blue-600 p-3 w-12 h-12 flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 sm:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the specialists who make excellence possible
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Ashiqur Rahman",
                role: "Founder & CEO",
                image:
                  ashiqur,  
              },
              {
                name: "Md. Tusar Molla",
                role: "Project Manager",
                image:
                  tushar,
              },
              {
                name: "Mousumi Ferdouse",
                role: "Graphic Designer",
                image:
                  moushumi,
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-6 group">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover transition-transform group-hover:scale-105 absolute bottom-4"
                  />
                  {/* <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 rounded-full transition-all duration-300" /> */}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                {/* <p className="text-gray-600 text-sm">{member.expertise}</p> */}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 sm:py-24"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our services
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActiveAccordion(activeAccordion === index ? null : index)
                  }
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${
                      activeAccordion === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: activeAccordion === index ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
