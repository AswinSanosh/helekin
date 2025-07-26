import type { Metadata } from "next";
import "../../utils/styles/globals.css";

import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import Contact from "../../components/Contact";
import Forms from "../../components/forms";

export const metadata: Metadata = {
  title: 'Helekin',
  description: 'Grow your business with Helekin',
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="overflow-x-hidden ">
          <Navbar />
          {children}
          <Contact />
          <Forms />
          <Footer />
        </div>
      </body>
    </html>
  );
}
