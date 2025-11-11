import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Package, Info, Award } from "lucide-react";

export const ProductDetails = () => {
  return (
    <section id="product-info" className="py-20 gradient-premium">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gold-dark via-primary to-accent bg-clip-text text-transparent">
                Informasi Produk
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Detail lengkap VITALIN Platinum Royal Jelly
            </p>
          </div>

          <Tabs defaultValue="composition" className="w-full animate-scale-in">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-card/50 backdrop-blur-sm p-2">
              <TabsTrigger value="composition" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-accent-foreground">
                <Package className="w-4 h-4 mr-2" />
                Komposisi
              </TabsTrigger>
              <TabsTrigger value="benefits" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-accent-foreground">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Manfaat
              </TabsTrigger>
              <TabsTrigger value="usage" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-accent-foreground">
                <Info className="w-4 h-4 mr-2" />
                Cara Pakai
              </TabsTrigger>
              <TabsTrigger value="certification" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-accent-foreground">
                <Award className="w-4 h-4 mr-2" />
                Sertifikasi
              </TabsTrigger>
            </TabsList>

            <TabsContent value="composition">
              <Card className="border-2 border-gold/30 bg-card/80 backdrop-blur-sm shadow-premium">
                <CardHeader>
                  <CardTitle className="text-2xl">Komposisi Premium</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-primary">Susu Kambing Murni (50%)</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                          <span>Kalsium 250mg per gelas untuk tulang kuat</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                          <span>Protein mudah diserap tubuh</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                          <span>Rendah laktosa untuk pencernaan sensitif</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                          <span>Antioksidan alami untuk regenerasi sel</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-accent">Royal Jelly (10%)</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                          <span>Vitamin B kompleks lengkap</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                          <span>Asam lemak 10-HDA eksklusif</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                          <span>Mineral esensial (Kalsium, Zat Besi, Seng)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                          <span>Senyawa bioaktif anti-penuaan</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg border border-gold/30">
                    <p className="text-sm">
                      <strong>Komposisi Lainnya:</strong> Krimer Nabati 20%, Gula 20%
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="benefits">
              <Card className="border-2 border-gold/30 bg-card/80 backdrop-blur-sm shadow-premium">
                <CardHeader>
                  <CardTitle className="text-2xl">Manfaat Kesehatan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-primary mb-3">Kesehatan Tubuh</h3>
                      <ul className="space-y-3">
                        {[
                          "Meningkatkan daya tahan tubuh",
                          "Memperkuat tulang dan sendi",
                          "Meningkatkan energi dan vitalitas",
                          "Menyehatkan pencernaan",
                          "Menjaga fungsi hati dan ginjal"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-accent mb-3">Kecantikan & Mental</h3>
                      <ul className="space-y-3">
                        {[
                          "Mencerahkan dan melembapkan kulit",
                          "Meningkatkan daya ingat dan konsentrasi",
                          "Mengurangi stres dan kecemasan",
                          "Menyeimbangkan hormon tubuh",
                          "Memperlambat proses penuaan"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="usage">
              <Card className="border-2 border-gold/30 bg-card/80 backdrop-blur-sm shadow-premium">
                <CardHeader>
                  <CardTitle className="text-2xl">Cara Penyajian</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-gold/30">
                      <h3 className="text-xl font-bold mb-4 text-primary">Pagi Hari</h3>
                      <ol className="space-y-3 text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="font-bold text-primary">1.</span>
                          <span>Tuangkan 1 sachet (25g) ke dalam gelas</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold text-primary">2.</span>
                          <span>Tambahkan 150ml air hangat (bukan mendidih)</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold text-primary">3.</span>
                          <span>Aduk hingga rata dan larut sempurna</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold text-primary">4.</span>
                          <span>Konsumsi sebelum sarapan</span>
                        </li>
                      </ol>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-accent/10 to-gold/10 rounded-xl border border-gold/30">
                      <h3 className="text-xl font-bold mb-4 text-accent">Malam Hari</h3>
                      <ol className="space-y-3 text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="font-bold text-accent">1.</span>
                          <span>Tuangkan 1 sachet ke dalam gelas</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold text-accent">2.</span>
                          <span>Seduh dengan air hangat 150ml</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold text-accent">3.</span>
                          <span>Aduk rata dan nikmat rasanya</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold text-accent">4.</span>
                          <span>Minum sebelum tidur untuk pemulihan optimal</span>
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div className="p-4 bg-gold/10 border border-gold/30 rounded-lg">
                    <p className="text-sm">
                      <strong className="text-gold">Tips:</strong> Untuk rasa lebih nikmat, tambahkan madu alami atau kurma. Konsumsi rutin 2x sehari untuk hasil maksimal.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="certification">
              <Card className="border-2 border-gold/30 bg-card/80 backdrop-blur-sm shadow-premium">
                <CardHeader>
                  <CardTitle className="text-2xl">Sertifikasi & Keamanan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-gold/30">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <Award className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">BPOM RI</h3>
                          <p className="text-sm text-muted-foreground">Badan Pengawas Obat dan Makanan</p>
                        </div>
                      </div>
                      <p className="font-mono text-sm bg-card/50 p-3 rounded">MD 07121101300105</p>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-accent/10 to-gold/10 rounded-xl border border-gold/30">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                          <Award className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Halal MUI</h3>
                          <p className="text-sm text-muted-foreground">Majelis Ulama Indonesia</p>
                        </div>
                      </div>
                      <p className="font-mono text-sm bg-card/50 p-3 rounded">ID 34110000753490522</p>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-secondary/50 rounded-lg border border-gold/30">
                    <h3 className="font-bold text-lg mb-4">Detail Produk</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Berat Bersih:</span>
                        <span className="font-medium">250g (10 sachet @ 25g)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Produsen:</span>
                        <span className="font-medium">SAHABAT TERNAK</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Kode Produksi:</span>
                        <span className="font-medium">140125</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Lokasi:</span>
                        <span className="font-medium">Sleman, Indonesia</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gold/10 border border-gold/30 rounded-lg">
                    <p className="text-sm">
                      <strong className="text-gold">Perhatian:</strong> Tidak untuk menggantikan air susu ibu. Tidak cocok untuk bayi sampai usia 12 bulan. Simpan di ruang sejuk dan kering.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
