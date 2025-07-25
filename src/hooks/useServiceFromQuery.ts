'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import data from '../components/ServiceList.json';

type Service = {
  title: string;
  desc: string;
  background: string;
  icon: string;
  link: string;
};

export default function useServiceFromQuery(): Service | null {
  const params = useSearchParams();
  const serviceSlug = params.get('service');
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    if (!serviceSlug) return setService(null);
    const allServices: Service[] = Object.values(data.servicesList).flat();
    const matched = allServices.find((s) => s.link.split('/').pop() === serviceSlug);
    setService(matched || null);
  }, [serviceSlug]);

  return service;
}
