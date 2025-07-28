// lib/getServiceData.ts
import serviceData from '@/components/ServiceList.json';

const allServices = [
  ...serviceData.servicesList.software,
  ...serviceData.servicesList.electronics_and_hardware,
  ...serviceData.servicesList.threed,
];

export function getAllServices() {
  return allServices;
}

export function getServiceBySlug(slug: string) {
  return allServices.find((service) => {
    const slugFromLink = service.link?.split('/').pop();
    return slugFromLink === slug;
  });
}
