import type { Metadata } from "next";
import "../utils/styles/globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Helekin",
  description:
    "Helekin specializes in rapid prototyping, custom 3D printing, and technology solutions. We help innovators and businesses turn ideas into functional products with speed and precision.",
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
      <body>
        <Navbar />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
