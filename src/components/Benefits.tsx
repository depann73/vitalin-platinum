import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Brain, Sparkles, Bone, Zap, Users, Star } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Menjaga Tulang",
    description: "Memperkuat tulang dan sendi dengan kalsium alami",
  },
  {
    icon: Heart,
    title: "Menjaga Sendi",
    description: "Meningkatkan fleksibilitas dan kesehatan sendi",
  },
  {
    icon: Zap,
    title: "Meningkatkan Energi",
    description: "Memberikan stamina dan vitalitas sepanjang hari",
  },
  {
    icon: Sparkles,
    title: "Menyehatkan Pencernaan",
    description: "Mudah dicerna dan menyehatkan sistem pencernaan",
  },
  {
    icon: Brain,
    title: "Menjaga Fungsi Otak",
    description: "Meningkatkan daya ingat dan konsentrasi",
  },
  {
    icon: Bone,
    title: "Membantu Kecantikan Kulit",
    description: "Mencerahkan dan menjaga elastisitas kulit",
  },
  {
    icon: Users,
    title: "Menjaga Konsentrasi Otak",
    description: "Meningkatkan fokus dan kejernihan mental",
  },
  {
    icon: Star,
    title: "1000++ Manfaat",
    description: "Khasiat lengkap untuk kesehatan keluarga",
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
            Kombinasi sempurna susu kambing Saanen dan Royal Jelly untuk kesehatan optimal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group hover:shadow-gold transition-smooth border-2 border-transparent hover:border-gold/50 bg-card/50 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth">
                    <benefit.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>
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
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-70">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-gold" />
            <span className="font-medium">BPOM Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-gold" />
            <span className="font-medium">Halal Indonesia</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="font-medium">Premium Quality</span>
          </div>
        </div>
      </div>
    </section>
  );
};
