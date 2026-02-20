export function AboutSection() {
    const stats = [
        { value: "2023", label: "Kuruluş yılı" },
        { value: "3", label: "Aktif proje" },
        { value: "∞", label: "Öğrenme isteği" },
    ]

    return (
        <section id="hakkimda" className="py-32 relative overflow-hidden bg-background">
            {/* Subtle top gradient */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    {/* Left: section label + stats */}
                    <div className="lg:col-span-4 space-y-12">
                        <div>
                            <p className="text-xs font-semibold text-muted-foreground tracking-[0.15em] uppercase mb-6">
                                Hakkımda
                            </p>
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-tight">
                                Mühendislik,
                                <br />
                                <span className="text-muted-foreground font-normal">ürün ve strateji.</span>
                            </h2>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
                            {stats.map((stat) => (
                                <div
                                    key={stat.value}
                                    className="p-4 rounded-2xl bg-card border border-border/60 hover:border-border transition-colors duration-300"
                                >
                                    <div className="text-2xl font-bold text-foreground tracking-tight mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: content */}
                    <div className="lg:col-span-8 space-y-10">
                        <div className="space-y-5 text-[1.0625rem] text-muted-foreground leading-[1.85] font-serif">
                            <p>
                                Yapay zekâ, sistem mühendisliği ve ürün stratejisi ekseninde çalışıyorum.
                                Akademik arka planımı nörobilim ve fizyoloji araştırmalarıyla güçlendirdim;
                                mühendislik yaklaşımımı gerçek saha verisi, endüstriyel süreçler ve
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
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Yapay Zekâ",
                                "Sistem Mühendisliği",
                                "Ürün Stratejisi",
                                "Endüstriyel Optimizasyon",
                                "Nörobilim",
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1.5 text-xs font-medium text-muted-foreground bg-secondary rounded-full border border-border/60 hover:bg-secondary/70 transition-colors cursor-default"
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
