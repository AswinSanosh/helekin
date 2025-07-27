import Link from 'next/link';
import SoftwareServicesCarousel from './SoftwareCar';
import HardwareServicesCarousel from './HardwareCar';
import ThreedServicesCarousel from './ThreedCar';

export default function Services() {
  return (
    <div className="relative z-0 min-h-auto w-full flex flex-col bg-[url('/images/fafa.png')] bg-cover bg-center bg-no-repeat px-6 pb-30">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0" />

      <div className="w-full m-auto">
        <div className="relative z-10 w-full max-w-screen px-6 mx-auto mt-20">
          <h1 className="text-3xl font-poppins font-semibold text-red-700 mb-2">
            Explore What We Do Best
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-center mt-2 gap-4">
            <div className="flex flex-col items-start md:w-1/2">
              <p className="text-lg font-extralight font-poppins text-white/80">
                Browse our collection of high-quality, custom-built tech solutions designed for everyday use and professional applications. From software applications to hardware devices, we offer a range of products that enhance productivity and streamline your workflow.
              </p>
            </div>

            <Link
              href="/services"
              className="md:inline-block bg-white/20 border border-white rounded-xl hidden m-auto
                md:px-6 md:py-3 px-3 py-2 text-base md:text-lg font-poppins
                hover:bg-white hover:text-red-700
                transition-colors duration-300 ease-in-out text-white
                cursor-pointer"
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

          {/* Mobile Description */}
          <div className="block md:hidden mt-2 text-white/80 text-sm font-poppins">
            We craft tailored software solutions including web apps, mobile platforms, and internal tools. Our services focus on performance, scalability, and clean UI/UX to help your business thrive in the digital world.
          </div>

          {/* Desktop Carousel */}
          <div className="hidden md:block">
            <SoftwareServicesCarousel />
          </div>
        </div>

        {/* Hardware Section */}
        <div className="relative z-10 w-full max-w-screen px-6 mx-auto mt-16">
          <div className="flex justify-between">
            <h1 className="font-poppins text-2xl text-white">Electronics and Hardware Services</h1>
          </div>

          {/* Mobile Description */}
          <div className="block md:hidden mt-2 text-white/80 text-sm font-poppins">
            We design and build embedded systems, IoT devices, and smart electronics. From prototyping to final production, our hardware services cover all phases of the product development cycle.
          </div>

          {/* Desktop Carousel */}
          <div className="hidden md:block">
            <HardwareServicesCarousel />
          </div>
        </div>

        {/* 3D Printing Section */}
        <div className="relative z-10 w-full max-w-screen px-6 mx-auto mt-16">
          <div className="flex justify-between">
            <h1 className="font-poppins text-2xl text-white">3D Printing Services</h1>
          </div>

          {/* Mobile Description */}
          <div className="block md:hidden mt-2 text-white/80 text-sm font-poppins">
            Our 3D printing service provides rapid prototyping and custom part fabrication using high-quality materials. Perfect for makers, engineers, and creative professionals needing fast, precise results.
          </div>
          <Link
            href="/services"
            className="inline-block bg-white/20 border border-white rounded-xl md:hidden mt-10
                md:px-6 md:py-3 px-3 py-2 text-base md:text-lg font-poppins
                hover:bg-white hover:text-red-700
                transition-colors duration-300 ease-in-out text-white
                cursor-pointer"
          >
            View All
          </Link>

          {/* Desktop Carousel */}
          <div className="hidden md:block">
            <ThreedServicesCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}
