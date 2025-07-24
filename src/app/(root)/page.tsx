import Hero from "./(components)/Herobanner";
import AboutBanner from "./(components)/Aboutbanner";
import Services from "./(components)/Services";
import Products from "./(components)/Products";
import Enquiry from "./(components)/Enquiry"; // Assuming you have an enquiry component

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="relative w-full h-screen">
        <Hero />
      </div>
      <AboutBanner />
      <Services />
      <Products />
      <Enquiry />
    </main>
  );
}
