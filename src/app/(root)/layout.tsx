import type { Metadata } from "next";
// Removed unused Poppins font import
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import Contact from "../../components/Contact";
import Forms from "../../components/forms";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        // Add this prop to prevent hydration errors
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}
      >
        <Navbar />
        <div>{children}</div>
        <Contact />
        <Forms />
        <Footer />
      </body>
    </html>
  );
}