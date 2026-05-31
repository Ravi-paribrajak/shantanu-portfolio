import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Subtle visual grid column dividers */}
      <div className="absolute inset-y-0 left-1/4 w-px bg-slate-950/20 pointer-events-none hidden lg:block" />             
      <div className="absolute inset-y-0 left-2/4 w-px bg-slate-950/20 pointer-events-none hidden lg:block" />             
      <div className="absolute inset-y-0 left-3/4 w-px bg-slate-950/20 pointer-events-none hidden lg:block" /> 

      {/* Sticky Top Header */}
      <Navbar />

      <main className="flex-grow">
        {/* Cinematic Headline & Showreel */}
        <Hero />

        {/* Dynamic Category Filtering Work Grid */}
        <PortfolioGrid />
      </main>

      {/* Booking Brief Form & Social links */}
      <Footer />
    </div>
  );
}
