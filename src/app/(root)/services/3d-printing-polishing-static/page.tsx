import PolishingServiceClient from './PolishingServiceClient';
import servicesData from '@/components/ServiceList.json';
import type { Metadata } from 'next';
import Script from 'next/script';

// ---------------------------
// Find the service data
// ---------------------------
type Service = {
  link: string;
  title: string;
  ['about-desc']?: string;
};

const polishingService = servicesData.servicesList.threed.find(
  (s: Service) => s.link === '/services/3d-printing-polishing'
);

// ---------------------------
// SEO Metadata
// ---------------------------
export const metadata: Metadata = {
  title: polishingService
    ? `${polishingService.title} | Helekin`
    : 'Online 3D Slicing, Printing & Polishing | Helekin',
  description:
    polishingService?.['about-desc'] ||
    'Upload, slice, and preview your 3D models online. Download G-code instantly, order professional 3D printing with polishing, and get high-quality prototypes delivered fast.',
  keywords: [
    '3D printing services',
    'online 3D slicer',
    '3D model viewer',
    'STL to G-code online',
    'download G-code',
    '3D printing and polishing',
    'prototype manufacturing',
    'rapid prototyping',
    'high precision 3D printing',
  ],
  openGraph: {
    title: 'Online 3D Slicing, Printing & Polishing | Helekin',
    description:
      'Slice your 3D models online, view them in 3D, download G-code instantly, and order professional 3D printing & polishing services.',
    url: 'https://helekin.com/services/3d-printing-polishing',
    type: 'website',
    images: [
      {
        url: '/og-image.png', // replace with actual preview image
        width: 1200,
        height: 630,
        alt: 'Online 3D Slicing & Printing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Helekin | Online 3D Slicing & Printing',
    description:
      'Upload, slice, and view your 3D models online. Download G-code or order high-quality 3D printing with professional polishing.',
    images: ['/og-image.png'],
  },
};

// ---------------------------
// JSON-LD Structured Data
// ---------------------------
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: '3D Printing & Polishing',
  provider: {
    '@type': 'Organization',
    name: 'Helekin',
    url: 'https://helekin.com',
    logo: 'https://helekin.com/logo.png',
  },
  description:
    'Online slicing, 3D model viewing, instant G-code downloads, professional 3D printing, and high-quality polishing services.',
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: 'Request Quote',
    url: 'https://helekin.com/services/3d-printing-polishing',
    eligibleRegion: {
      '@type': 'Country',
      name: 'India',
    },
  },
};

export default function PolishingServicePage() {
  if (!polishingService) {
    return (
      <div className="p-10 text-center text-red-500">
        Service not found in ServiceList.json
      </div>
    );
  }

  return (
    <>
      {/* Inject JSON-LD for SEO */}
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PolishingServiceClient service={polishingService} />
    </>
  );
}
