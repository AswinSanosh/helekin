import { notFound } from "next/navigation";
import { getAllServices, getServiceBySlug } from "@/lib/getServiceData";
import type { Metadata } from "next";
import MotionServicePage from "../../../../components/MotionServicePage"; // ✅ client component

type Props = {
  params: { slug: string };
};

export const dynamicParams = true; // other slugs can still be dynamic

// 👇 Pre-render `3d-printing-polishing` statically
export async function generateStaticParams() {
  const services = getAllServices();

  // ensure `3d-printing-polishing` is always generated
  const predefined = [{ slug: "3d-printing-polishing" }];

  const dynamicServices = services
    .map((service) => {
      const slug = service.link?.split("/").pop();
      return slug ? { slug } : null;
    })
    .filter(Boolean) as { slug: string }[];

  return [...predefined, ...dynamicServices];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Helekin",
    };
  }

  return {
    title: `${service.title} | Helekin`,
    description: service["about-desc"],
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = params;
  const service = await getServiceBySlug(slug);

  if (!service) return notFound();

  // ✅ Pass service data to client component
  return (
    <div>
      <MotionServicePage service={service} />
    </div>
  );
}
