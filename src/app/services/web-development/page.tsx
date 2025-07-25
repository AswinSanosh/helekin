"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const servicesOffered = [
  {
    title: "Frontend Development",
    description:
      "We build beautiful, responsive, and intuitive user interfaces with modern frameworks like React, Next.js, and Vue.",
    icon: "/images/logo.png",
  },
  {
    title: "Backend Development",
    description:
      "Our robust backend solutions using Node.js, Python, and Go ensure your application is scalable, secure, and fast.",
    icon: "/images/logo.png",
  }
];

const techStack = [
  { name: "React", icon: "/images/logo.png" },
  { name: "Next.js", icon: "/images/logo.png" }
];


export default function WebDevelopmentPage() {
  return (
    <div>
      <div className="h-[70vh] w-full bg-black bg-cover bg-center bg-no-repeat flex items-center justify-start">
        <div className="absolute inset-0 bg-[url('/images/web-dev-hero.jpg')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6">
          <div className="flex mb-4">
            <h1 className="text-white text-6xl font-extralight font-poppins">
              Building
            </h1>
            <h1 className="text-red-700 text-6xl font-light font-poppins px-4">
              Digital
            </h1>
          </div>
          <h1 className="text-white text-6xl font-extralight font-poppins">
            Masterpieces.
          </h1>
          <div className="w-2/3 md:w-1/2 mt-4">
            <p className="text-white/70 text-lg font-extralight font-poppins">
              We create fast, secure, and scalable web applications tailored to
              your business needs, from stunning landing pages to complex
              enterprise platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative w-full flex flex-col bg-[url('/images/fafa.png')] bg-cover bg-center bg-no-repeat px-6 py-20">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

        {/* What We Offer Section */}
        <div className="relative z-10 w-full max-w-screen-xl mx-auto">
          <h1 className="text-3xl font-poppins font-semibold text-red-700 mb-2">
            What We Offer
          </h1>
          <p className="text-white/80 mb-10 max-w-3xl">
            Our web development services cover the entire spectrum of creation,
            ensuring you have a complete, end-to-end solution.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicesOffered.map((service, i) => (
              <div
                key={i}
                className="flex flex-col items-start h-full bg-white/5 backdrop-blur-lg shadow-lg shadow-black/30 p-6 rounded-xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
              >
                <div className="rounded-full bg-white/20 w-16 h-16 flex justify-center items-center p-2 mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                  />
                </div>
                <h2 className="text-white text-xl font-semibold mb-2">
                  {service.title}
                </h2>
                <p className="text-white/80 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Section */}
        <div className="relative z-10 w-full max-w-screen-xl mx-auto mt-24">
          <h1 className="text-3xl font-poppins font-semibold text-red-700 mb-2">
            Our Technology Stack
          </h1>
          <p className="text-white/80 mb-10 max-w-3xl">
            We use cutting-edge technologies to build modern, high-performance
            applications.
          </p>
          <div className="flex flex-wrap gap-8 items-center">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-2"
                title={tech.name}
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={50}
                  height={50}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
                <span className="text-white/70 text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative z-10 w-full max-w-screen-xl mx-auto mt-24 text-center">
          <h1 className="font-poppins text-4xl text-white mb-4">
            Have a project in mind?
          </h1>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Contact us for a
            free consultation and quote.
          </p>
          <Link href="/contact">
            <button className="bg-red-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-red-800 transition-colors duration-300 text-lg">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
