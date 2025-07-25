'use client';

export default function Products() {
  return (
    <div className="relative z-0 min-h-auto w-full flex flex-col bg-black bg-cover bg-center bg-no-repeat px-6 pb-30 items-center justify-center">
      <div className="flex flex-col relative z-10 w-full max-w-screen px-6 mx-auto mt-20 items-center justify-center">
        <h1 className="text-4xl font-poppins font-semibold text-red-700 mb-10">
          FAQs
        </h1>
        <div className="flex flex-col items-center justify-center md:items-center mt-2 gap-8 w-full">
          <div className='flex items-center justify-between bg-white/10 backdrop-blur-lg shadow-lg shadow-black/30 p-6 md:w-3/4 w-full'>
            <h1 className='font-poppins text-2xl font-medium text-white'>What are the security standards you follow for web designing?</h1>
            <h1 className='font-poppins text-3xl font-medium text-white'>+</h1>
          </div>
          <div className='flex items-center justify-between bg-white/10 backdrop-blur-lg shadow-lg shadow-black/30 p-6 md:w-3/4 w-full'>
            <h1 className='font-poppins text-2xl font-medium text-white'>How do you choose the languages for the projects?</h1>
            <h1 className='font-poppins text-3xl font-medium text-white'>+</h1>
          </div>
          <div className='flex items-center justify-between bg-white/10 backdrop-blur-lg shadow-lg shadow-black/30 p-6 md:w-3/4 w-full'>
            <h1 className='font-poppins text-2xl font-medium text-white'>What are the security standards you follow for web designing?</h1>
            <h1 className='font-poppins text-3xl font-medium text-white'>+</h1>
          </div>
          <div className='flex items-center justify-between bg-white/10 backdrop-blur-lg shadow-lg shadow-black/30 p-6 md:w-3/4 w-full'>
            <h1 className='font-poppins text-2xl font-medium text-white'>What are the security standards you follow for web designing?</h1>
            <h1 className='font-poppins text-3xl font-medium text-white'>+</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
