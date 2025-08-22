import { Metadata } from "next";
import servicesData from "@/components/ServiceList.json"; // ✅ adjust path if needed
import MotionServicePage from "@/components/MotionServicePage";

const polishingService =
  servicesData.servicesList.threed.find(
    (s) => s.link === "/services/3d-printing-polishing"
  ) || null;

export const metadata: Metadata = {
  title: polishingService
    ? `${polishingService.title} | Helekin`
    : "3D Printing & Polishing | Helekin",
  description:
    polishingService?.["about-desc"] ||
    "We provide high-precision 3D printing and polishing services with professional finishing.",
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
    <div>
      <MotionServicePage service={polishingService} />
    </div>
  );
}
