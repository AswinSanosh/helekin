import Hero from "../../components/Herobanner";
import AboutBanner from "../../components/Aboutbanner";
import Services from "../../components/Services";
import Products from "../../components/Products";
import FAQ from "../../components/FAQ"; // Assuming you have a FAQ component

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="relative w-full h-screen">
        <Hero />
      </div>
      <div>
        <AboutBanner />
        <Services />
        <Products />
        <FAQ />
      </div>
    </main>
  );
}
