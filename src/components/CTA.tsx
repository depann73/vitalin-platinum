import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import bankEkspedisiImg from "@/assets/bank-ekspedisi.jpg";

const whatsappNumbers = [
  { number: "6289513980460", label: "WA 1" },
  { number: "6282242007345", label: "WA 2" },
  { number: "6285729409426", label: "WA 3" },
];

export const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-gold opacity-90" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/95 backdrop-blur-md border-2 border-gold shadow-premium p-8 md:p-12 animate-scale-in">
            <div className="text-center space-y-6 mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-full text-accent-foreground font-medium">
                <Clock className="w-4 h-4" />
                <span>Promo Terbatas!</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold">
                Pesan Sekarang & Dapatkan
                <span className="block bg-gradient-to-r from-gold-dark via-primary to-accent bg-clip-text text-transparent mt-2">
                  Harga Spesial!
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Gratis ongkir ke seluruh Indonesia. COD tersedia. Jaminan uang kembali 100% jika produk tidak original.
              </p>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">Hubungi kami via WhatsApp:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {whatsappNumbers.map((wa) => (
                    <Button
                      key={wa.number}
                      size="lg"
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-premium transition-smooth px-8 py-6 text-lg shine-effect"
                      onClick={() => window.open(`https://wa.me/${wa.number}`, "_blank")}
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      {wa.label}: {wa.number.slice(-4)}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 pt-6">
                <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Konsultasi Gratis</p>
                    <p className="text-xs text-muted-foreground">24/7 Available</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Gratis Ongkir</p>
                    <p className="text-xs text-muted-foreground">Seluruh Indonesia</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">COD Tersedia</p>
                    <p className="text-xs text-muted-foreground">Bayar di tempat</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-accent-foreground">
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <p className="text-3xl md:text-4xl font-bold">100%</p>
              <p className="text-sm opacity-90">Original</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-3xl md:text-4xl font-bold">1000+</p>
              <p className="text-sm opacity-90">Manfaat</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <p className="text-3xl md:text-4xl font-bold">HALAL</p>
              <p className="text-sm opacity-90">Certified</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <p className="text-3xl md:text-4xl font-bold">BPOM</p>
              <p className="text-sm opacity-90">Registered</p>
            </div>
          </div>

          {/* Bank & Ekspedisi Logos */}
          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <Card className="bg-card/80 backdrop-blur-sm p-6 border border-gold/30">
              <img 
                src={bankEkspedisiImg} 
                alt="Bank dan Ekspedisi - Kami bekerja sama dengan jasa ekspedisi JNT, POS Indonesia, Ninja Express, JNE. Transaksi transfer dapat menggunakan BCA, BNI, BRI, Mandiri, ATM Bersama" 
                className="w-full h-auto rounded-lg"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
