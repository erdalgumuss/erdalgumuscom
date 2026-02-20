export function AboutSection() {
    return (
        <section id="hakkimda" className="py-28 bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Label */}
                    <div className="lg:col-span-3">
                        <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase sticky top-24">
                            Hakkımda
                        </p>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-9 space-y-8">
                        <div className="space-y-6 text-lg text-muted-foreground leading-[1.8] font-serif">
                            <p>
                                Yapay zekâ, sistem mühendisliği ve ürün stratejisi ekseninde çalışıyorum.
                                Akademik arka planımı nörobilim ve fizyoloji temelli araştırmalarla güçlendirdim;
                                mühendislik yaklaşımımı ise gerçek saha verisi, endüstriyel süreçler ve
                                ölçeklenebilir yazılım sistemleri üzerinde inşa ettim.
                            </p>
                            <p>
                                Yapay zekâyı soyut bir teknoloji olarak değil, fiziksel dünyaya entegre ve
                                ölçülebilir değer üreten bir mühendislik disiplini olarak ele alıyorum.
                                Çalışmalarımı yalnızca model geliştirme seviyesinde değil, uçtan uca çalışan
                                karar sistemleri ve ürünleşebilir teknoloji altyapıları kurma odağında
                                sürdürüyorum.
                            </p>
                            <p>
                                Hedefim yalnızca bir şirket kurmak değil; sürdürülebilir, ürün odaklı ve
                                küresel ölçekte rekabet edebilecek teknoloji yapıları inşa etmek.
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {[
                                "Yapay Zekâ",
                                "Sistem Mühendisliği",
                                "Ürün Stratejisi",
                                "Endüstriyel Optimizasyon",
                                "Nörobilim",
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs font-medium px-3 py-1.5 border border-border text-muted-foreground rounded-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
