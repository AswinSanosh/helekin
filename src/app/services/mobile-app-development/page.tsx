"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const servicesOffered = [
  {
    title: "iOS Development",
    description:
      "Native iOS apps built with Swift and SwiftUI for flawless performance and a premium user experience on Apple devices.",
    icon: "/images/logo.png",
  },
  {
    title: "Android Development",
    description:
      "Powerful and scalable Android apps using Kotlin and Jetpack Compose, designed to reach a broad audience on the world's most popular OS.",
    icon: "/images/logo.png",
  },
  {
    title: "Cross-Platform Apps",
    description:
      "Save time and cost with a single codebase. We use React Native and Flutter to build apps that run smoothly on both iOS and Android.",
    icon: "/images/logo.png",
  },
  {
    title: "Mobile UI/UX Design",
    description:
      "We design intuitive, engaging, and beautiful mobile interfaces that keep your users coming back for more.",
    icon: "/images/logo.png",
  },
];

const techStack = [
  { name: "Swift", icon: "/images/logo.png" },
  { name: "Kotlin", icon: "/images/logo.png" },
];

export default function MobileAppDevelopmentPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="h-[70vh] w-full bg-black bg-cover bg-center bg-no-repeat flex items-center justify-start">
        <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6">
          <div className="flex mb-4">
            <h1 className="text-white text-6xl font-extralight font-poppins">
              Crafting Seamless
            </h1>
            <h1 className="text-red-700 text-6xl font-light font-poppins px-4">
              Mobile
            </h1>
          </div>
          <h1 className="text-white text-6xl font-extralight font-poppins">
            Experiences.
          </h1>
          <div className="w-2/3 md:w-1/2 mt-4">
            <p className="text-white/70 text-lg font-extralight font-poppins">
              We build responsive mobile apps with powerful backends and smooth
              user experiences, optimized for performance and scalability.
            </p>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="relative w-full flex flex-col bg-[url('/images/fafa.png')] bg-cover bg-center bg-no-repeat px-6 py-20">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

        {/* What We Offer Section */}
        <div className="relative z-10 w-full max-w-screen-xl mx-auto">
          <h1 className="text-3xl font-poppins font-semibold text-red-700 mb-2">
            Our Mobile Expertise
          </h1>
          <p className="text-white/80 mb-10 max-w-3xl">
            From native to cross-platform, our mobile development services
            provide a comprehensive solution to bring your app idea to life.
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

        {/* Our Technology Stack Section */}
        <div className="relative z-10 w-full max-w-screen-xl mx-auto mt-24">
          <h1 className="text-3xl font-poppins font-semibold text-red-700 mb-2">
            Our Technology Stack
          </h1>
          <p className="text-white/80 mb-10 max-w-3xl">
            We leverage modern frameworks and platforms to build robust and
            efficient mobile applications.
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

        {/* Call to Action Section */}
        <div className="relative z-10 w-full max-w-screen-xl mx-auto mt-24 text-center">
          <h1 className="font-poppins text-4xl text-white mb-4">
            Ready to build your app?
          </h1>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project. Contact us today for a free consultation
            and see how we can help you succeed.
          </p>
          <Link href="/contact">
            <button className="bg-red-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-red-800 transition-colors duration-300 text-lg">
              Get a Free Quote
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
