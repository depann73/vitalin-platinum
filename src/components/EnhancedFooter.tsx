import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";

export const EnhancedFooter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Alamat Kami */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-playfair liquid-glass-text-light mb-6">
              Alamat Kami
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <p className="text-sm opacity-90">
                  Jl. Contoh Alamat No. 123<br />
                  Jakarta, Indonesia 12345
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+6289513980460" className="text-sm opacity-90 hover:text-gold transition-smooth">
                  +62 895-1398-0460
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:info@vitalinplatinum.com" className="text-sm opacity-90 hover:text-gold transition-smooth">
                  info@vitalinplatinum.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3 pt-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-smooth"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-smooth"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-smooth"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-smooth"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link Cepat */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-playfair liquid-glass-text-light mb-6">
              Link Cepat
            </h3>
            
            <div className="space-y-3">
              <Link to="/products" className="block text-sm opacity-90 hover:text-gold hover:translate-x-2 transition-smooth">
                → Produk
              </Link>
              <Link to="/about" className="block text-sm opacity-90 hover:text-gold hover:translate-x-2 transition-smooth">
                → Tentang Kami
              </Link>
              <Link to="/blog" className="block text-sm opacity-90 hover:text-gold hover:translate-x-2 transition-smooth">
                → Blog
              </Link>
              <Link to="/contact" className="block text-sm opacity-90 hover:text-gold hover:translate-x-2 transition-smooth">
                → Kontak
              </Link>
              <Link to="/privacy" className="block text-sm opacity-90 hover:text-gold hover:translate-x-2 transition-smooth">
                → Kebijakan Privasi
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-playfair liquid-glass-text-light mb-6">
              Newsletter
            </h3>
            
            <p className="text-sm opacity-90 mb-4">
              Dapatkan informasi terbaru tentang produk dan promo spesial kami
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="Email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                required
              />
              <Button 
                type="submit"
                className="w-full bg-gold hover:bg-gold-dark text-gold-foreground"
              >
                Berlangganan
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-sm opacity-80">
            © 2025 VITALIN PLATINUM – Susu Kambing Premium untuk Kesehatan Optimal
          </p>
          <p className="text-xs opacity-60 mt-2">
            BPOM RI MD 071211001300105 | Halal MUI
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gold hover:bg-gold-dark text-gold-foreground shadow-premium flex items-center justify-center transition-smooth hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};
