import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import productBox from "@/assets/product-box.png";
import promo1 from "@/assets/promo-1.jpeg";
import promo2 from "@/assets/promo-2.jpeg";
import promo3 from "@/assets/promo-3.jpeg";
import promo4 from "@/assets/promo-4.jpeg";
import { MessageCircle, ShoppingCart, Sparkles } from "lucide-react";

export const Hero = () => {
  const [rotation, setRotation] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setRotation((prev) => (prev + 0.5) % 360);
      }, 16);
      return () => clearInterval(interval);
    }
  }, [isHovering]);

  const handleWhatsApp = () => {
    window.open("https://wa.me/6289513980460", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-premium">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/milk-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/70" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full shadow-soft border border-gold/30">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">Premium Quality</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gold-dark via-primary to-gold bg-clip-text text-transparent">
                VITALIN
              </span>
              <br />
              <span className="text-foreground">PLATINUM</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Susu Kambing Bubuk & Royal Jelly
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <p className="text-lg">Campuran Susu Kambing & Krim Rasa Original</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <p className="text-lg">100% Halal & Tersertifikasi BPOM</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <p className="text-lg">1000++ Manfaat untuk Kesehatan</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gold-dark to-accent hover:shadow-gold transition-smooth text-lg px-8 py-6 shine-effect"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat via WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-gold-foreground transition-smooth text-lg px-8 py-6"
                onClick={() => document.getElementById('product-info')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Lihat Detail
              </Button>
            </div>
          </div>

          {/* Right Content - 3D Product Box */}
          <div className="relative flex items-center justify-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-3xl opacity-30 animate-pulse-gold" />
              
              {/* 3D Product Box rotating 360° */}
              <div 
                className="relative cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setIsHovering(true)}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const centerX = rect.width / 2;
                  const rotateY = ((x - centerX) / centerX) * 45;
                  setRotation(rotateY);
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                }}
                style={{
                  transform: `perspective(1500px) rotateY(${rotation}deg)`,
                  transformStyle: "preserve-3d",
                  transition: isHovering ? "none" : "transform 0.1s linear"
                }}
              >
                {/* Glow layers */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-gold/40 to-accent/40 rounded-3xl blur-3xl"
                  style={{
                    transform: "translateZ(-80px)",
                    transformStyle: "preserve-3d"
                  }}
                />
                
                {/* Main product box */}
                <div
                  className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-card to-card/80 p-2"
                  style={{
                    transform: "translateZ(30px)",
                    transformStyle: "preserve-3d",
                    boxShadow: "0 40px 100px -20px rgba(0,0,0,0.5)"
                  }}
                >
                  <img 
                    src={productBox} 
                    alt="VITALIN Platinum Product Box - 360° Rotatable View"
                    className="w-full max-w-lg rounded-xl"
                  />
                  
                  {/* Premium lighting effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/30 pointer-events-none rounded-xl" />
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-gold to-accent text-accent-foreground px-6 py-3 rounded-full font-bold text-sm shadow-premium animate-float">
                BEST SELLER
              </div>

              {/* Info Card */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-premium border border-gold/30 whitespace-nowrap">
                <p className="text-sm text-muted-foreground">Net Weight</p>
                <p className="text-2xl font-bold text-primary">250g (10 sachet)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};
