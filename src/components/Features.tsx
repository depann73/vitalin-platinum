import { Award, Leaf, Zap, Truck } from "lucide-react";
import promo1 from "@/assets/promo-1.jpeg";
import promo2 from "@/assets/promo-2.jpeg";
import promo3 from "@/assets/promo-3.jpeg";
import promo4 from "@/assets/promo-4.jpeg";

const features = [
  {
    icon: Award,
    title: "Kualitas Premium",
    description: "Diproduksi dengan standar tertinggi untuk kesehatan optimal",
  },
  {
    icon: Leaf,
    title: "100% Alami",
    description: "Tanpa bahan pengawet atau pewarna buatan",
  },
  {
    icon: Zap,
    title: "Bergizi Tinggi",
    description: "Kaya akan vitamin, mineral, dan royal jelly",
  },
  {
    icon: Truck,
    title: "Pengiriman Cepat",
    description: "Gratis ongkir untuk area tertentu",
  },
];

const supportImages = [promo1, promo2, promo3, promo4];

export const Features = () => {
  return (
    <section className="py-20 gradient-gold">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            Keunggulan <span className="text-gold">Produk</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Mengapa memilih VITALIN PLATINUM?
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left - Support Images */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-4">
            {supportImages.map((img, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-premium transition-smooth hover:scale-105"
              >
                <img 
                  src={img} 
                  alt={`Feature ${index + 1}`}
                  className="w-full h-40 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right - Feature Cards */}
          <div className="lg:col-span-9 grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-gold/20 hover:border-gold/50 transition-smooth hover:shadow-premium animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-dark to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth shadow-gold">
                  <feature.icon className="w-8 h-8 text-gold-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 font-playfair">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-smooth" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
