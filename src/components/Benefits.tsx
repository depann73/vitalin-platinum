import { Card, CardContent } from "@/components/ui/card";
import { Shield, Star, Sparkles } from "lucide-react";
import benefitBones from "@/assets/benefit-bones.jpg";
import benefitJoints from "@/assets/benefit-joints.jpg";
import benefitEnergy from "@/assets/benefit-energy.jpg";
import benefitDigestion from "@/assets/benefit-digestion.jpg";
import benefitBrain from "@/assets/benefit-brain.jpg";
import benefitSkin from "@/assets/benefit-skin.jpg";
import benefitMental from "@/assets/benefit-mental.jpg";
import halalLogo from "@/assets/halal-logo.jpg";

const benefits = [
  {
    image: benefitBones,
    title: "Menjaga Tulang",
    description: "Memperkuat tulang dan sendi dengan kalsium alami",
  },
  {
    image: benefitJoints,
    title: "Menjaga Sendi",
    description: "Meningkatkan fleksibilitas dan kesehatan sendi",
  },
  {
    image: benefitEnergy,
    title: "Meningkatkan Energi",
    description: "Memberikan stamina dan vitalitas sepanjang hari",
  },
  {
    image: benefitDigestion,
    title: "Menyehatkan Pencernaan",
    description: "Mudah dicerna dan menyehatkan sistem pencernaan",
  },
  {
    image: benefitBrain,
    title: "Menjaga Fungsi Otak",
    description: "Meningkatkan daya ingat dan konsentrasi",
  },
  {
    image: benefitSkin,
    title: "Membantu Kecantikan Kulit",
    description: "Mencerahkan dan menjaga elastisitas kulit",
  },
  {
    image: benefitMental,
    title: "Menjaga Konsentrasi Otak",
    description: "Meningkatkan fokus dan kejernihan mental",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background via-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-gold-dark via-primary to-accent bg-clip-text text-transparent">
              Manfaat Luar Biasa
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Raih kesehatan optimal dengan khasiat luar biasa dari susu kambing premium
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group hover:shadow-gold transition-smooth border-2 border-transparent hover:border-gold/50 bg-card/50 backdrop-blur-sm animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={benefit.image} 
                  alt={benefit.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/50 to-transparent" />
              </div>
              <CardContent className="p-6 space-y-3 -mt-6 relative z-10">
                <h3 className="text-lg font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
          <div className="flex items-center gap-3 px-4 py-2 bg-card/50 rounded-lg border border-gold/30">
            <Shield className="w-6 h-6 text-gold" />
            <span className="font-semibold">BPOM Certified</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 bg-card/50 rounded-lg border border-gold/30">
            <img src={halalLogo} alt="Halal Indonesia" className="w-10 h-10 object-contain" />
            <span className="font-semibold">Halal Indonesia</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 bg-card/50 rounded-lg border border-gold/30">
            <Sparkles className="w-6 h-6 text-gold" />
            <span className="font-semibold">Premium Quality</span>
          </div>
        </div>
      </div>
    </section>
  );
};
