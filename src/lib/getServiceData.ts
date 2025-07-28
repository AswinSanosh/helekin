// lib/getServiceData.ts

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  title: string;
  desc: string;
  background: string;
  icon: string;
  link: string;
  tools: string[];
  tags: string[];
  'tools-icons': string[];
  'about-title': string;
  'about-desc': string;
  'whatweoffer-images': string[];
  'featured-projects': string[];
  'featured-projects-desc': string;
  'featured-projects-images': string[];
  'approach-title': string;
  'approach-desc': string;
  'service-FAQ': ServiceFAQ[];
  consultQN: string;
  'consult-answer': string;
}

export interface ServicesList {
  software: Service[];
  electronics_and_hardware: Service[];
  threed: Service[];
}

export interface ServiceListData {
  servicesList: ServicesList;
}

// Import the JSON statically
import serviceDataJson from '@/components/ServiceList.json';

let serviceData: ServiceListData = serviceDataJson as ServiceListData;

// Validate structure
if (!serviceData || typeof serviceData !== 'object' || !serviceData.servicesList) {
  console.error('❌ Invalid JSON structure: Missing "servicesList"');
  serviceData = createEmptyServiceData();
}

const { servicesList } = serviceData;

/**
 * Safely returns an array, or an empty array if the input is not an array.
 * Preserves the generic type of the expected array.
 */
function safeArray<T>(arr: T | undefined | null): T extends Array<infer U> ? U[] : never[] {
  return (Array.isArray(arr) ? arr : []) as T extends Array<infer U> ? U[] : never[];
}

/**
 * Creates a fallback empty data structure
 */
function createEmptyServiceData(): ServiceListData {
  return {
    servicesList: {
      software: [],
      electronics_and_hardware: [],
      threed: [],
    },
  };
}

/**
 * Returns a flat list of all services from all categories
 */
export function getAllServices(): Service[] {
  const software = safeArray<Service[]>(servicesList.software);
  const electronics = safeArray<Service[]>(servicesList.electronics_and_hardware);
  const threed = safeArray<Service[]>(servicesList.threed);

  return [...software, ...electronics, ...threed];
}

/**
 * Finds a service by exact slug match (last part of the `link` field)
 * @param slug The slug to search for (e.g., 'web-development')
 * @returns Service object if found, otherwise undefined
 */
export function getServiceBySlug(slug: string): Service | undefined {
  const allServices = getAllServices();
  const normalizedSlug = slug.trim().toLowerCase();

  return allServices.find((service) => {
    const link = service.link?.trim();
    if (!link) return false;

    const parts = link.split('/').filter(Boolean);
    const lastSegment = parts[parts.length - 1]?.toLowerCase();

    return lastSegment === normalizedSlug;
  });
}