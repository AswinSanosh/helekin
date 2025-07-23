import Link from 'next/link';
import SoftwareServicesCarousel from './elements/SoftwareCar';

export default function Services() {
  return (
    <div className="relative z-0 min-h-auto w-full flex flex-col bg-[url('/images/fafa.png')] bg-cover bg-center bg-no-repeat px-6 pb-30">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0" />

      <div className="relative z-10 w-full max-w-screen px-6 mx-auto mt-20">
        <h1 className="text-3xl font-poppins font-semibold text-red-700 mb-2">
          Explore What We Do Best
        </h1>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-2 gap-4">
          <p className="text-lg font-extralight font-poppins text-white/80">
            From web development to AI, we provide custom digital solutions that scale with you.
          </p>
          <Link
            href="/services"
            className="underline underline-offset-4 hover:text-white/60 transition-colors duration-300 cursor-pointer mr-30"
          >
            View All
          </Link>
        </div>
      </div>

      {/* Software Section */}
      <div className="relative z-10 w-full max-w-screen px-6 mx-auto mt-16">
        <div className="flex justify-between">
          <h1 className="font-poppins text-2xl text-white">Software Services</h1>
        </div>
        <div>
          {/* Add your software service cards or items here */}
          <SoftwareServicesCarousel />
        </div>
      </div>
    </div>
  );
}
