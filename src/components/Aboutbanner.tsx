import Link from 'next/link';
import Image from 'next/image';
// new comment heere

export default function Aboutbanner() {
  return (
    <div
      className="
        w-full bg-black flex flex-col md:flex-row
        items-center justify-center gap-20
        py-10 md:py-20 px-4 md:px-10

        /* smooth out all changing properties */
        transition-all duration-500 ease-in-out
      "
    >
      {/* Logo */}
      <div className="flex-shrink-0 text-center">
        <Image
          width={60}
          height={100}
          unoptimized
          loading='lazy'
          src="/images/logo.png"
          alt="Helekin Logo"
          className="
            /* responsive heights */
            xl:h-120 h-60 w-auto md:h-48 md:mt-0 mt-10

            /* smooth resizing */
            transition-all duration-200 ease-in-out

            mx-auto
          "
        />
      </div>

      {/* Content */}
      <div className="text-white w-full md:w-3/5 p-5 space-y-6">
        <h2 className="text-red-700 text-3xl md:text-4xl font-poppins font-medium">
          About Us
        </h2>
        <h1 className="text-white text-2xl md:text-4xl font-poppins font-semibold leading-tight">
          Empowering Global Growth Through Smart Digital Solutions
        </h1>
        <p className="text-white/80 specialpara-base">
          At Helekin, we&#39;re passionate about helping businesses thrive in the digital age.
          As a startup driven by innovation and agility, we craft tailored digital solutions
          that solve real problems and unlock new opportunities. From building powerful digital
          experiences to scaling your ideas, we&#39;re here to support your journey every step of
          the way. Our mission is simple - to empower businesses worldwide with the tools,
          technology, and creativity they need to grow.
        </p>

        <Link
          href="/about"
          className="
            inline-block bg-white/20 border border-white rounded-xl
            md:px-6 md:py-3 px-3 py-2 text-base md:text-lg font-poppins
            hover:bg-white hover:text-red-700
            transition-colors duration-300 ease-in-out
          "
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
