import PolishingServiceClient from './PolishingServiceClient';
import servicesData from '@/components/ServiceList.json';
import type { Metadata } from 'next';

// Find the service data
type Service = {
  link: string;
  title: string;
  ['about-desc']?: string;
  // add other properties as needed
};

const polishingService = servicesData.servicesList.threed.find(
  (s: Service) => s.link === '/services/3d-printing-polishing'
);

export const metadata: Metadata = {
  title: polishingService
    ? `${polishingService.title} | Helekin`
    : '3D Printing & Polishing | Helekin',
  description:
    polishingService?.['about-desc'] ||
    'We provide high-precision 3D printing and polishing services with professional finishing.',
};

export default function PolishingServicePage() {
  if (!polishingService) {
    return (
      <div className="p-10 text-center text-red-500">
        Service not found in ServiceList.json
      </div>
    );
  }

  return <PolishingServiceClient service={polishingService} />;
}