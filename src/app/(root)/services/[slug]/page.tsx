import { notFound } from "next/navigation";
import { getAllServices, getServiceBySlug } from "@/lib/getServiceData";
import type { Metadata } from "next";
import MotionServicePage from "../../../../components/MotionServicePage"; // ✅ client component

type Props = {
  params: { slug: string };
};

export const dynamicParams = true;

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => {
    const slug = service.link?.split("/").pop();
    return {
      slug: slug || "3d-printing-polishing",
    };
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params; // ✅ no need for await
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
  const { slug } = params; // ✅ no need for await
  const service = await getServiceBySlug(slug);

  if (!service) return notFound();

  // ✅ Pass service data to client component
  return (
    <div>
      <MotionServicePage service={service} />
    </div>
  );
}
