import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ShoppingCart, Eye } from "lucide-react";
import productBox from "@/assets/vitalin-front.png";

const slides = [
  {
    title: "Best Quality Ingredients",
    subtitle: "Bahan Berkualitas Terbaik",
    description: "Susu kambing platinum dengan Royal Jelly untuk kesehatan optimal keluarga Anda",
    image: productBox,
  },
  {
    title: "100% Natural & Healthy",
    subtitle: "100% Alami & Sehat",
    description: "Tanpa pengawet, tanpa bahan kimia berbahaya. Murni dari alam untuk kesehatan Anda",
    image: productBox,
  },
  {
    title: "Fastest Order Delivery",
    subtitle: "Pengiriman Cepat",
    description: "Gratis ongkir untuk pembelian tertentu. Pesan hari ini, sampai besok!",
    image: productBox,
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-premium pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[200%] min-h-[200%] object-cover opacity-60 scale-[2]"
        >
          <source src="/milk-video.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/40" />
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in" key={currentSlide}>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight font-playfair">
              <span className="liquid-glass-text">
                {slides[currentSlide].title}
              </span>
            </h1>

            <h2 className="text-3xl md:text-4xl text-gold font-semibold">
              {slides[currentSlide].subtitle}
            </h2>

            <p className="text-xl text-muted-foreground">
              {slides[currentSlide].description}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gold-dark to-accent hover:shadow-gold transition-smooth text-lg px-8 py-6 shine-effect"
                onClick={() => window.open("https://wa.me/6289513980460", "_blank")}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Pesan Sekarang
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-gold-foreground transition-smooth text-lg px-8 py-6"
                onClick={() => document.getElementById('product-info')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Eye className="mr-2 h-5 w-5" />
                Lihat Produk
              </Button>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative flex items-center justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-3xl opacity-30 animate-pulse-gold" />
              <img 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].title}
                className="relative w-full max-w-md mx-auto drop-shadow-premium"
              />
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-smooth"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  currentSlide === index ? "bg-gold w-8" : "bg-card/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-smooth"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
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
