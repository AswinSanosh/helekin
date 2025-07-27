

import Link from 'next/link';

export default function Products() {
  return (
    <div className="relative z-0 min-h-auto w-full flex flex-col bg-black bg-cover bg-center bg-no-repeat px-6 pb-30">
      <div className="relative z-10 w-full max-w-screen px-6 mx-auto mt-20">
        <h1 className="text-3xl font-poppins font-semibold text-red-700 mb-2">
          Products
        </h1>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-2 gap-4">
          <div className='flex flex-col items-start md:w-1/2'>
            <p className="text-lg font-extralight font-poppins text-white/80">
              Browse our collection of high-quality, custom-built tech solutions designed for everyday use and professional applications. From software applications to hardware devices, we offer a range of products that enhance productivity and streamline your workflow.
            </p>
          </div>
          <Link
            href="/products"
            className="
            inline-block bg-white/20 border border-white rounded-xl
            px-6 py-3 text-base md:text-lg font-poppins
            hover:bg-white hover:text-red-700
            transition-colors duration-300 ease-in-out text-white
            cursor-pointer
            "
          >
            View All
          </Link>
        </div>
        <div className='mt-20 flex flex-row items-center justify-center'>
          <div className="bg-[url('/images/product2.png')] bg-no-repeat bg-center bg-cover h-[400px] w-[400px] rounded-3xl flex items-center justify-center -right-10 relative z-30"></div>
          <div className="bg-[url('/images/product1.png')] bg-no-repeat bg-center bg-cover h-[500px] w-[500px] rounded-3xl flex items-center justify-center drop-shadow-3xl shadow-black z-40"></div>
          <div className="bg-[url('/images/product4.png')] bg-no-repeat bg-center bg-cover h-[400px] w-[400px] rounded-3xl flex items-center justify-center -left-10 relative z-30"></div>
        </div>
      </div>

    </div>
  );
}
