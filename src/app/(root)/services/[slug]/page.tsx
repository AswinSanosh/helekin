import { notFound } from 'next/navigation';
import { getAllServices, getServiceBySlug, Service } from '@/lib/getServiceData';
import type { Metadata } from 'next';
import Link from 'next/link';
import Accordion from '@/components/GenericAccordion';

// ✅ Correctly type params as Promise
type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => {
    const slug = service.link?.split('/').pop();
    return {
      slug: slug || '',
    };
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | Helekin',
    };
  }

  return {
    title: `${service.title} | Helekin`,
    description: service['about-desc'],
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) return notFound();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div
        className="background relative h-[90vh] sm:h-180 w-full bg-cover bg-center bg-no-repeat z-20 flex items-center"
        style={{ backgroundImage: `url(${service.background})` }}
      >
        <div className="absolute inset-0 bg-[#030303]/70 backdrop-blur-sm z-0" />
        <div className="relative z-10 text-white w-full px-6 sm:px-10 max-w-4xl">
          <div className="title mb-4 flex flex-col sm:flex-row gap-3">
            <h1 className="text-4xl sm:text-6xl font-light font-poppins">
              {service.title.split(' ')[0]}
            </h1>
            <h1 className="text-4xl sm:text-6xl text-red-700 font-light font-poppins">
              {service.title.split(' ').slice(1).join(' ')}
            </h1>
          </div>
          <div className="desc w-full sm:w-3/4">
            <p className="text-white/80 text-base sm:text-lg font-light font-poppins mt-4 sm:mt-6">
              {service.desc}
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative z-10 w-full bg-[#030303] py-14 px-6 sm:px-10 flex flex-col items-center justify-center text-white">
        <h2 className="about-title text-red-700 text-3xl sm:text-4xl font-poppins font-medium text-center">
          {service['about-title']}
        </h2>
        <p className="about-desc text-white/80 text-base sm:text-xl font-poppins font-light mt-6 sm:mt-10 text-center">
          {service['about-desc']}
        </p>
      </div>

      {/* What We Offer */}
      <div className="relative z-0 w-full flex flex-col bg-[url('/images/fafa.png')] bg-cover bg-center bg-no-repeat px-6 pb-30">
        <div className="absolute inset-0 bg-[#030303]/50 backdrop-blur-sm z-0" />
        <div className="relative z-10 w-full max-w-screen px-6 mx-auto mt-20">
          <h1 className="text-3xl font-poppins font-semibold text-red-700 mb-2 text-center">
            What We Offer
          </h1>
        </div>
        <div className="mt-12 sm:mt-40 flex flex-col sm:flex-row items-center justify-center gap-5">
          {service['whatweoffer-images'].map((img, i) => (
            <div
              key={i}
              className={`flex flex-col items-start h-[250px] w-full sm:w-[300px] bg-white/10 backdrop-blur-lg shadow-lg shadow-[#030303]/30 p-6 rounded-xl transition-all hover:scale-[1.02] duration-300 ${i === 1 ? 'md:relative md:-top-30' : ''}`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </div>
      </div>

      {/* Featured Projects */}
      <div className="relative z-10 w-full mx-auto text-center bg-[#030303] pt-24 px-6 sm:px-10">
        <h1 className="text-2xl sm:text-3xl font-poppins font-semibold text-red-700 mb-2 text-start">
          Featured Projects
        </h1>
        <p className="text-white/80 text-base sm:text-xl font-poppins font-light mt-5 mb-10 max-w-2xl text-start">
          {service['featured-projects-desc']}
        </p>
        <div className="featured-projects-images mt-5 flex sm:flex-row flex-col items-center justify-center gap-5">
          {service['featured-projects-images'].map((img, i) => (
            <div
              key={i}
              className="flex flex-col items-start h-[300px] w-full bg-white/10 backdrop-blur-lg shadow-xl shadow-[#030303]/30 p-6 rounded-3xl transition-all hover:scale-[1.02] duration-300"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </div>
      </div>

      {/* Our Approach */}
      <div className="relative z-10 w-screen mx-auto bg-[#030303] px-6 sm:px-10 py-20 md:pt-50">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-start justify-between gap-10 sm:gap-20">
          <div className="w-full sm:w-1/3 flex flex-col">
            <h2 className="text-red-700 text-3xl sm:text-4xl font-poppins font-medium text-left">
              {service['approach-title']}
            </h2>
            <p className="text-white/80 text-base sm:text-xl font-poppins font-light mt-6 sm:mt-10 text-left">
              {service['approach-desc']}
            </p>
          </div>

          {/* FAQ */}
          <div className="w-full sm:w-2/3 flex flex-col items-start">
            <div className="flex flex-col items-center sm:items-start mt-2 gap-4 w-full">
              {service['service-FAQ'].map((faq, i) => (
                <Accordion
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 w-full bg-[#030303] py-20 px-6 sm:px-10 text-center">
        <h1 className="font-poppins text-3xl sm:text-4xl text-white mb-4">
          {service.consultQN}
        </h1>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto text-base sm:text-lg">
          {service['consult-answer']}
        </p>
        <Link href="/contact">
          <button className="bg-red-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg hover:bg-red-800 transition-colors duration-300 text-base sm:text-lg cursor-pointer">
            Schedule a Consultation
          </button>
        </Link>
      </div>
    </div>
  );
}
