// app/services/[slug]/page.tsx
import React from "react";
import serviceData from "../../../../components/ServiceList.json";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Service {
  title: string;
  desc: string;
  icon: string;
  background: string;
  link?: string;
  tools?: string[];
  tags?: string[];
  ["tools-icons"]?: string[];
}

function getAllServices(): Service[] {
  const { software, electronics_and_hardware, threed } = serviceData.servicesList;
  return [...software, ...electronics_and_hardware, ...threed];
}

function getServiceBySlug(slug: string): Service | null {
  const allServices = getAllServices();
  return allServices.find((s) => s.link?.split("/services/")[1] === slug) || null;
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) return notFound();

  return (
    <div className="bg-black text-white min-h-screen py-10 px-6 sm:px-12">
      <div
        className="w-full h-72 rounded-xl mb-8 relative overflow-hidden shadow-xl"
        style={{
          backgroundImage: `url(${service.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex items-center h-full px-6">
          <div className="flex items-center gap-4">
            <Image src={service.icon} alt={service.title} width={60} height={60} />
            <h1 className="text-4xl font-poppins font-semibold text-white">{service.title}</h1>
          </div>
        </div>
      </div>

      <p className="text-white/80 text-lg sm:text-xl font-light font-poppins mb-10">{service.desc}</p>

      {service.tools && (
        <>
          <h2 className="text-red-700 text-2xl font-medium font-poppins mb-4">Tools We Use</h2>
          <div className="flex flex-wrap gap-4 mb-10">
            {service.tools.map((tool, i) => (
              <div key={i} className="bg-white/10 px-4 py-2 rounded-lg text-white text-sm font-poppins">
                {tool}
              </div>
            ))}
          </div>
        </>
      )}

      {service["tools-icons"] && (
        <div className="flex flex-wrap gap-6 mb-10">
          {service["tools-icons"].map((icon, i) => (
            <div key={i} className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-full">
              <Image src={icon} alt={`tool-${i}`} width={30} height={30} />
            </div>
          ))}
        </div>
      )}

      {service.tags && (
        <>
          <h2 className="text-red-700 text-2xl font-medium font-poppins mb-4">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag, i) => (
              <span key={i} className="bg-white/10 text-white px-3 py-1 text-sm rounded-lg font-poppins">
                #{tag}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
