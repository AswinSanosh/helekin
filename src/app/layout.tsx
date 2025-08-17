import type { Metadata } from "next";
import "../utils/styles/globals.css";
import Navbar from "../components/Navbar";

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
      <body>
        <Navbar />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
