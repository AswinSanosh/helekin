"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full bg-[url('/images/hero.png')] bg-cover bg-center bg-no-repeat flex items-center justify-left pl-6">
        <div className="absolute inset-0 bg-[#030303]/70 backdrop-blur-sm" />
        <div className="relative z-10 text-left text-white px-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-4xl sm:text-6xl font-light font-poppins mb-4"
          >
            Get in <span className="text-red-700">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false }}
            className="text-white/80 text-base sm:text-lg font-light"
          >
            Have a project in mind or just want to say hello?  
            Fill out the form or reach out through the details below.
          </motion.p>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="bg-[#030303] border-[#F2F2F2]/20 border-t-1 text-white py-16 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {[
            { title: "Email", text: "contact@helekin.in", href: "mailto:contact@helekin.in" },
            { title: "Phone", text: "+91 89439 63650", href: "tel:+918943963650" },
            { title: "Location", text: "Kottayam, Kerala, India", href: "/map" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.2 }}
              viewport={{ once: false }}
            >
              <h2 className="text-red-700 text-2xl font-medium mb-2">
                {item.title}
              </h2>
              <p className="text-white/70">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#030303] text-center py-14">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-2xl sm:text-3xl text-white mb-4 font-poppins"
        >
          Prefer to talk directly?
        </motion.h2>
        <Link href="tel:+918943963650">
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false }}
            className="bg-red-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-red-800 transition-colors duration-300"
          >
            Call Us Now
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
