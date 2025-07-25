import Link from 'next/link';
import SoftwareServicesCarousel from './SoftwareCar';
import HardwareServicesCarousel from './HardwareCar';
import ThreedServicesCarousel from './ThreedCar';

export default function Services() {
  return (
    <div className="relative z-0 min-h-auto w-full flex flex-col bg-[url('/images/fafa.png')] bg-cover bg-center bg-no-repeat px-6 pb-30">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

      <div className='w-full m-auto'>
        <div className="relative z-10 w-full max-w-screen px-6 mx-auto mt-20">
        <h1 className="text-3xl font-poppins font-semibold text-red-700 mb-2">
          Explore What We Do Best
        </h1>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-2 gap-4">
          <div className='flex flex-col items-start w-1/2'>
            <p className="text-lg font-extralight font-poppins text-white/80">
            Browse our collection of high-quality, custom-built tech solutions designed for everyday use and professional applications. From software applications to hardware devices, we offer a range of products that enhance productivity and streamline your workflow.
          </p>
          </div>
          
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

      {/* Hardware Section */ }
      <div className="relative z-10 w-full max-w-screen px-6 mx-auto mt-16">
        <div className="flex justify-between">
          <h1 className="font-poppins text-2xl text-white">Electronics and Hardware Services</h1>
        </div>
        <div>
          {/* Add your software service cards or items here */}
          <HardwareServicesCarousel />
        </div>
      </div>

      {/*3D Printing Section */ }
      <div className="relative z-10 w-full max-w-screen px-6 mx-auto mt-16">
        <div className="flex justify-between">
          <h1 className="font-poppins text-2xl text-white">3D Printing Services</h1>
        </div>
        <div>
          {/* Add your software service cards or items here */}
          <ThreedServicesCarousel />
        </div>
      </div>
      </div>
    </div>
  );
}
