'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const fullText = 'business growth.'
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index])
        setIndex((prev) => prev + 1)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [index, fullText])

  const whyChooseUs = [
    {
      title: 'Built for Startups',
      desc: 'We understand the unique challenges startups face and tailor our solutions to help you succeed.',
    },
    {
      title: 'Expert Team',
      desc: 'Our team of experts brings years of experience in digital acceleration.',
    },
    {
      title: 'End-to-End Service',
      desc: 'We provide customized solutions that fit your specific needs and goals.',
    },
  ]

  return (
    <div className="relative h-[90vh] md:h-screen pt-30 w-full bg-[url('/images/hero.png')] bg-cover bg-right sm:bg-center bg-no-repeat z-20 flex items-end justify-start overflow-x-hidden text-justify">
      <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent backdrop-blur-sm opacity-97 -z-10" />

      <div className="text-left p-10 px-5 md:px-10 text-white flex flex-col justify-end items-center sm:items-start w-full md:w-2/3 sm:pl-5 h-full">
        <div className="sm:relative absolute top-10 sm:top-0 pt-10 px-5 sm:px-0">
          <h1 className="text-white heading-light max-heading-light-lg ">
            Digital acceleration services
          </h1>

          <div className="flex sm:gap-3 justify-bottom sm:flex-nowrap max-w-[90vw] sm:max-w-[50vw] max-h-[50vh]">
            <h1 className="text-white heading-light max-heading-light-lg mb-4 flex-shrink-0">
              for&nbsp;
            </h1>
            <h1 className="text-red-700 heading-light max-heading-light-lg mb-4 flex-shrink-0">
              {displayedText}
            </h1>
          </div>
          <h1 className="text-white subheading-extralight max-subheading-extralight-lg mb-4">
            Design. Development. Consulting.
          </h1>
        </div>

        <h1 className="text-white para-bold max-para-bold-md mt-5 px-3 sm:px-0 mx-auto md:mx-0">
          Why Choose Us?
        </h1>

        {/* Desktop Grid */}
        <div className="hidden md:flex flex-col md:flex-row gap-5 mt-3">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#070707]/30 border border-[#F2F2F2]/30 rounded-md h-auto md:h-[140px] w-full md:w-[250px] shadow-lg shadow-[#030303]/30 backdrop-blur-sm p-3"
            >
              <h1 className="text-white para-semibold max-para-semibold-md">{item.title}</h1>
              <p className="text-white subpara-light max-subpara-light-md mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden w-full overflow-x-auto mt-3">
          <div className="flex gap-4 px-2 w-max">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 bg-[#070707]/30 border border-[#F2F2F2]/30 rounded-md h-auto sm:w-[250px] w-[85vw]  shadow-lg shadow-[#030303]/30 backdrop-blur-sm p-3"
              >
                <h1 className="text-white para-semibold max-para-semibold-md">{item.title}</h1>
                <p className="text-white subpara-light max-subpara-light-md mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center md:justify-start w-full items-center text-center">
          <button className="bg-red-900 rounded-md w-[80%] md:w-50 p-4 subheading-light md:text-3xl mt-8 hover:cursor-pointer hover:bg-white hover:text-red-700 duration-300 font-poppins mx-auto md:mx-0">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  )
}
