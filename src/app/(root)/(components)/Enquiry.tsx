import Link from 'next/link';

export default function Enquiry() {
  return (
    <div className="relative z-20 min-h-auto h-[600px] w-full flex flex-col bg-[url('/svg/hero.svg')] bg-cover bg-center bg-no-repeat px-6 pb-30">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />
      <div className="relative z-10 w-full max-w-screen px-6 mx-auto mt-20">
        <h1 className="text-3xl font-poppins font-semibold text-red-700 mb-2">
          Enquiry
        </h1>
        <h1 className="text-xl font-poppins font-semibold text-white mb-2">
          Let's Get in Touch
        </h1>
        <div className="absolute right-20 -top-30 h-[500px] w-[500px] flex flex-col md:flex-row items-start md:items-center justify-between mt-2 gap-4 bg-white/10 backdrop-blur-lg shadow-lg shadow-black/30 p-6 rounded-xl">

        </div>
      </div>

    </div>

  );
}
