'use client';

import React from 'react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Expertise',
      description: 'We have years of experience delivering top-tier solutions.',
    },
    {
      title: 'Support',
      description: '24/7 customer support ensures you’re never alone.',
    },
    {
      title: 'Customization',
      description: 'We tailor every solution to your exact business needs.',
    },
    {
      title: 'Scalability',
      description: 'Our services grow with your business seamlessly.',
    },
    {
      title: 'Innovation',
      description: 'We use cutting-edge technology for impactful results.',
    },
  ];

  return (
    <section className="w-full py-12">
      <h2 className="text-white text-3xl font-semibold text-center mb-6">Why Choose Us</h2>

      {/* Mobile Carousel */}
      <div className="w-full overflow-x-auto scrollbar-hide px-2 md:hidden">
        <div className="flex gap-4 w-max">
          {reasons.map((reason, index) => (
            <div key={index} className="min-w-[250px] px-2">
              <div className="bg-white/10 rounded-xl p-4 shadow text-white">
                <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                <p className="text-sm">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-3 gap-6 px-10">
        {reasons.map((reason, index) => (
          <div key={index} className="bg-white/10 rounded-xl p-6 shadow text-white">
            <h3 className="font-bold text-xl mb-3">{reason.title}</h3>
            <p className="text-base">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
