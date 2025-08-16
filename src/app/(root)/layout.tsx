import type { Metadata } from "next";
import "../../utils/styles/globals.css";

import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import Contact from "../../components/Contact";
import Forms from "../../components/forms";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Helekin",
  description: "Grow your business with Helekin",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EFC5PVB5DW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EFC5PVB5DW');
          `}
        </Script>
      </head>
      <body>
        <div className="overflow-x-hidden">
          <Navbar />
          {children}
          <Analytics />
          <Contact />
          <Forms />
          <Footer />
        </div>
      </body>
    </html>
  );
}
