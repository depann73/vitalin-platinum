import { Navbar } from "@/components/Navbar";
import { EnhancedFooter } from "@/components/EnhancedFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nama lengkap wajib diisi").max(100, "Nama terlalu panjang"),
  email: z.string().trim().email("Email tidak valid").max(255, "Email terlalu panjang"),
  whatsapp: z.string().trim().min(10, "Nomor WhatsApp tidak valid").max(15, "Nomor WhatsApp terlalu panjang"),
  subject: z.string().trim().min(1, "Subjek wajib diisi").max(200, "Subjek terlalu panjang"),
  message: z.string().trim().min(10, "Pesan minimal 10 karakter").max(1000, "Pesan terlalu panjang")
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactFormData) => {
    // Send to WhatsApp with proper encoding
    const message = encodeURIComponent(
      `*Pesan dari Website*\n\nNama: ${data.name}\nEmail: ${data.email}\nWhatsApp: ${data.whatsapp}\nSubjek: ${data.subject}\n\nPesan:\n${data.message}`
    );
    const whatsappUrl = `https://wa.me/6281234567890?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("Pesan dikirim! Kami akan menghubungi Anda segera.");
    reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-premium py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair liquid-glass-text mb-4">
            Hubungi Kami
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kontak untuk Pertanyaan dan Pemesanan
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-gold/20 shadow-premium">
                <CardContent className="p-8 space-y-6">
                  <h2 className="text-2xl font-bold font-playfair liquid-glass-text mb-6">
                    Informasi Kontak
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-gold-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Alamat</h3>
                        <p className="text-sm text-muted-foreground">
                          Jl. Contoh Alamat No. 123<br />
                          Jakarta, Indonesia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-gold-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Telepon/WhatsApp</h3>
                        <a 
                          href="tel:+6281234567890"
                          className="text-sm text-gold hover:text-gold-dark transition-smooth"
                        >
                          +62 812 3456 7890
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-gold-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a 
                          href="mailto:info@vitalinplatinum.com"
                          className="text-sm text-gold hover:text-gold-dark transition-smooth"
                        >
                          info@vitalinplatinum.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="pt-6 border-t border-border">
                    <h3 className="font-semibold mb-4">Follow Kami</h3>
                    <div className="flex items-center gap-3">
                      <a 
                        href="#" 
                        className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center hover:scale-110 transition-smooth"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-5 h-5 text-gold-foreground" />
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center hover:scale-110 transition-smooth"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-5 h-5 text-gold-foreground" />
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center hover:scale-110 transition-smooth"
                        aria-label="TikTok"
                      >
                        <svg className="w-5 h-5 text-gold-foreground" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                        </svg>
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center hover:scale-110 transition-smooth"
                        aria-label="YouTube"
                      >
                        <Youtube className="w-5 h-5 text-gold-foreground" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-gold/20 shadow-premium">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold font-playfair liquid-glass-text mb-6">
                  Kirim Pesan
                </h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="Masukkan nama lengkap Anda"
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="email@example.com"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="whatsapp">No. WhatsApp</Label>
                    <Input
                      id="whatsapp"
                      {...register("whatsapp")}
                      placeholder="081234567890"
                      className={errors.whatsapp ? "border-destructive" : ""}
                    />
                    {errors.whatsapp && (
                      <p className="text-sm text-destructive mt-1">{errors.whatsapp.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="subject">Subjek</Label>
                    <Input
                      id="subject"
                      {...register("subject")}
                      placeholder="Subjek pesan Anda"
                      className={errors.subject ? "border-destructive" : ""}
                    />
                    {errors.subject && (
                      <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">Pesan</Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Tulis pesan Anda di sini..."
                      rows={5}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-gold text-gold-foreground hover:opacity-90"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-playfair liquid-glass-text text-center mb-4">
              Pertanyaan Umum
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              FAQ - VITALIN PLATINUM
            </p>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card border border-gold/20 rounded-lg px-6 shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline">
                  Bagaimana cara memesan produk VITALIN PLATINUM?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Anda bisa memesan langsung melalui website dengan klik 'Pesan Sekarang' atau melalui WhatsApp kami. Pembayaran bisa transfer bank atau COD.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-gold/20 rounded-lg px-6 shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline">
                  Apakah VITALIN PLATINUM aman untuk dikonsumsi?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ya, VITALIN PLATINUM sudah terdaftar BPOM RI dan bersertifikat Halal MUI. Produk kami 100% alami tanpa bahan pengawet berbahaya.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-gold/20 rounded-lg px-6 shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline">
                  Berapa lama pengiriman produk?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Pengiriman biasanya 2-3 hari kerja untuk area Jakarta dan sekitarnya. Untuk luar kota, estimasi 3-7 hari kerja tergantung lokasi.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border border-gold/20 rounded-lg px-6 shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline">
                  Apakah ada garansi uang kembali?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ya, kami memberikan garansi 100% uang kembali jika produk yang diterima rusak atau tidak sesuai pesanan.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
};

export default Contact;
