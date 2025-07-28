import Hero from "../../components/Herobanner";
import AboutBanner from "../../components/Aboutbanner";
import Services from "../../components/Services";
import Products from "../../components/Products";
import FAQ from "../../components/FAQ";
import ToastClient from "../../components/ToastClient";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <div className="block sm:hidden">
        <ToastClient
          message="Switch to Desktop for better experience"
          type="info"
          toastId="desktop-toast"
          pauseOnFocusLoss={false}
          autoClose={6000}
        />
      </div>
      <Hero />
      <div>
        <AboutBanner />
        <Services />
        <Products />
        <FAQ />
      </div>
    </main>
  );
}
