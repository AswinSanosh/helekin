import type { Metadata } from "next";
import "../utils/styles/globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Helekin | Rapid Prototyping & 3D Printing Company",
  description:
    "Helekin specializes in rapid prototyping, custom 3D printing, additive manufacturing, and product development solutions. We help innovators, startups, and businesses transform ideas into functional products with speed, precision, and scalability.",
  keywords: [
    "Helekin",
    "rapid prototyping",
    "prototyping company",
    "3D printing services",
    "custom 3D printing",
    "additive manufacturing",
    "product development",
    "CNC machining",
    "industrial design",
    "prototype manufacturing",
    "functional prototypes",
    "3D printing for startups",
    "low volume production",
    "engineering solutions",
    "manufacturing services",
    "concept to product",
    "innovation partner",
  ],
  authors: [{ name: "Helekin" }],
  openGraph: {
    title: "Helekin | Rapid Prototyping & 3D Printing Company",
    description:
      "Helekin helps businesses and innovators create prototypes, custom 3D prints, and manufacturing-ready solutions with precision and speed.",
    url: "https://helekin.com", // replace with your actual domain
    siteName: "Helekin",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Helekin Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Helekin | Rapid Prototyping & 3D Printing Company",
    description:
      "Turn your ideas into functional prototypes with Helekin’s 3D printing, product design, and rapid prototyping services.",
    images: ["/images/logo.png"],
    creator: "@helekin", // replace if you have Twitter
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  metadataBase: new URL("https://helekin.com"), // replace with your domain
  alternates: {
    canonical: "https://helekin.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>

        {/* ✅ Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Helekin",
              url: "https://helekin.com",
              logo: "https://helekin.com/images/logo.png",
              sameAs: [
                "https://www.facebook.com/helekin",
                "https://www.instagram.com/helekin",
                "https://www.linkedin.com/company/helekin",
              ],
              description:
                "Helekin provides rapid prototyping, custom 3D printing, and product development services for businesses, startups, and innovators.",
            }),
          }}
        />
      </body>
    </html>
  );
}
