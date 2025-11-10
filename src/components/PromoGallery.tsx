import promo1 from "@/assets/promo-1.jpeg";
import promo2 from "@/assets/promo-2.jpeg";
import promo3 from "@/assets/promo-3.jpeg";
import promo4 from "@/assets/promo-4.jpeg";

export const PromoGallery = () => {
  const promos = [
    { id: 1, image: promo1, alt: "Special Promo - Susu Sendi & Tulang VITALIN Platinum" },
    { id: 2, image: promo2, alt: "Spesial Promo - Harga Spesial VITALIN Platinum" },
    { id: 3, image: promo3, alt: "Susu Sendi & Tulang - 7 Manfaat Utama" },
    { id: 4, image: promo4, alt: "VITALIN Platinum - Original 100% dengan COD & Gratis Ongkir" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gold-dark via-primary to-gold bg-clip-text text-transparent">
              SPECIAL PROMO
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Penawaran Terbaik untuk Kesehatan Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promos.map((promo, index) => (
            <div
              key={promo.id}
              className="group relative overflow-hidden rounded-2xl shadow-premium hover:shadow-gold transition-smooth animate-scale-in bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={promo.image}
                  alt={promo.alt}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>

              {/* Border glow */}
              <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/50 rounded-2xl transition-smooth pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-semibold text-foreground mb-4">
            🎁 Dapatkan Penawaran Spesial Hari Ini!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft">
              <span className="text-2xl">✓</span>
              <span>COD Tersedia</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft">
              <span className="text-2xl">🚚</span>
              <span>Gratis Ongkir</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft">
              <span className="text-2xl">🏆</span>
              <span>Original 100%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
