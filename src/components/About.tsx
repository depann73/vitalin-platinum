import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";
import productBox from "@/assets/product-box.png";

export const About = () => {
  const [showVideo, setShowVideo] = useState(false);
  const youtubeVideoId = "dQw4w9WgXcQ"; // Replace with actual video ID

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image with Play Button */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-3xl shadow-premium">
              <img 
                src={productBox} 
                alt="VITALIN PLATINUM"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              
              {/* Play Button */}
              <button
                onClick={() => setShowVideo(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gold hover:bg-gold-dark transition-smooth flex items-center justify-center shadow-gold group-hover:scale-110"
              >
                <Play className="w-8 h-8 text-gold-foreground ml-1" fill="currentColor" />
              </button>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div>
              <p className="text-gold font-semibold text-lg mb-2">Tentang Kami</p>
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
                VITALIN PLATINUM <br />
                <span className="text-gold">Sejak 2010</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Dengan pengalaman lebih dari 10 tahun, VITALIN PLATINUM telah menjadi pilihan utama keluarga Indonesia untuk kesehatan optimal.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Kualitas Terjamin</h3>
                  <p className="text-muted-foreground">100% susu kambing asli dengan Royal Jelly premium</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Sertifikasi Resmi</h3>
                  <p className="text-muted-foreground">Tersertifikasi BPOM dan Halal MUI</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Dipercaya Ribuan Pelanggan</h3>
                  <p className="text-muted-foreground">Lebih dari 10.000+ keluarga telah merasakan manfaatnya</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-gradient-to-r from-gold-dark to-accent hover:shadow-gold transition-smooth shine-effect"
            >
              Selengkapnya
            </Button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-card border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-smooth"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="relative pt-[56.25%] rounded-2xl overflow-hidden shadow-premium">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                title="VITALIN PLATINUM Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
