import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { PromoGallery } from "@/components/PromoGallery";
import { ProductDetails } from "@/components/ProductDetails";
import { CTA } from "@/components/CTA";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <PromoGallery />
      <ProductDetails />
      <CTA />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © 2025 VITALIN Platinum. All rights reserved. | BPOM RI MD 071211001300105 | Halal MUI
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
