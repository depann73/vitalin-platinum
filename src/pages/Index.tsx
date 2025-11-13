import { Navbar } from "@/components/Navbar";
import { HeroCarousel } from "@/components/HeroCarousel";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { PromoGallery } from "@/components/PromoGallery";
import { ProductDetails } from "@/components/ProductDetails";
import { CTA } from "@/components/CTA";
import { EnhancedFooter } from "@/components/EnhancedFooter";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <About />
      <Features />
      <Benefits />
      <PromoGallery />
      <ProductDetails />
      <CTA />
      <EnhancedFooter />
    </main>
  );
};

export default Index;
