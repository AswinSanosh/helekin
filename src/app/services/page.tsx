import Link from 'next/link';
import SoftwareServicesCarousel from '../(root)/(components)/elements/SoftwareCar';

export default function Services() {
    const displayedText = "Businesses, Individuals, and Organizations";
    return (
        <div>
            <div className='h-150 w-full bg-black bg-cover bg-center bg-no-repeat z-20'>
                <div className='absolute h-150 bottom-10 left-20 mb-4'>
                    <div className="flex mb-4">
                        <h1 className="text-white text-6xl font-extralight font-poppins">
                            Crafting
                        </h1> <h1 className='text-red-700 text-6xl font-light font-poppins px-4'>Experiences</h1>
                    </div>
                    <h1 className="text-white text-6xl font-extralight font-poppins">That Evoke Emotions.</h1>
                    <div className='w-2/3'>
                        <p className='text-white/60 text-lg font-extralight font-poppins mt-4'>
                            End to end solution for our customers tailored to their needs is what makes us different. Not only it saves cost, but makes it easy for the customers to engage with our solutions.
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative z-0 min-h-auto w-full flex flex-col bg-[url('/images/fafa.png')] bg-cover bg-center bg-no-repeat px-6 pb-30">

                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

                <div className="relative z-10 w-full max-w-screen px-6 mx-auto mt-20">
                    <h1 className="text-3xl font-poppins font-semibold text-red-700 mb-2">
                        Our Services
                    </h1>
                </div>

                {/* Software Section */}
                <div className="relative z-10 w-full max-w-screen px-6 mx-auto mt-16">
                    <div className="flex justify-between">
                        <h1 className="font-poppins text-2xl text-white">Software Services</h1>
                    </div>
                    <div>
                        {/* Add your software service cards or items here */}

                    </div>
                </div>

                {/* Hardware Section */}
                <div className="relative z-10 w-full max-w-screen px-6 mx-auto mt-16">
                    <div className="flex justify-between">
                        <h1 className="font-poppins text-2xl text-white">Electronics and Hardware Services</h1>
                    </div>
                    <div>
                        {/* Add your software service cards or items here */}

                    </div>
                </div>

                {/*3D Printing Section */}
                <div className="relative z-10 w-full max-w-screen px-6 mx-auto mt-16">
                    <div className="flex justify-between">
                        <h1 className="font-poppins text-2xl text-white">3D Printing Services</h1>
                    </div>
                    <div>
                        {/* Add your software service cards or items here */}

                    </div>
                </div>
            </div>
        </div>
    );
}
