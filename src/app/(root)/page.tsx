// page.tsx or home.tsx

import Navbar from "../../components/Navbar";
import Hero from "../../components/Herobanner";
import AboutBanner from "../../components/Aboutbanner";
import Services from "../../components/Services";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* RELATIVE wrapper for navbar + hero */}
      <div className="relative w-full h-screen">
        <Navbar />
        <Hero />
      </div>

      {/* Now AboutBanner stacks below hero */}
      <AboutBanner />
      <Services />
      <Footer />
    </main>
  );
}
