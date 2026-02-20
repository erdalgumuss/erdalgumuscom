import { ArrowUpRight } from "lucide-react"

const projects = [
    {
        id: "hrai",
        year: "2023",
        title: "HRAI / NQAI",
        category: "İnsan Kaynakları AI",
        description:
            "İnsan kaynaklarında parametrik değerlendirme ve objektif puanlama temelli yapay zekâ sistemi. Aday değerlendirme süreçlerini beklenti-temelli ve akademik parametreler üzerinden analiz eden, yoruma dayalı değil ölçülebilir karar mekanizmaları üreten altyapı.",
        tags: ["Parametrik Değerlendirme", "Karar Sistemleri", "İK Teknolojisi"],
    },
    {
        id: "endustri",
        year: "2024",
        title: "Endüstriyel AI",
        category: "Ağır Sanayi Optimizasyonu",
        description:
            "PET şişirme makinelerinde ısıl optimizasyon ve ağır sanayi ölçeğinde (kupola, taş ergitme) sensör-tabanlı süreç optimizasyonu. Yüzlerce sensörden toplanan gerçek makine verisiyle çalışan modelleme sistemleri.",
        tags: ["PET Optimizasyonu", "Sensör Analizi", "Maliyet Azaltımı"],
    },
    {
        id: "neeko",
        year: "2025",
        title: "NEEKO",
        category: "AI Etkileşim Platformu",
        description:
            "Duyusal etkileşimi yüksek, bağlam zengin ve ebeveyn denetimli yapay zekâ etkileşim platformu. Donanım, yazılım ve bulut altyapısını entegre eden; ürünleşebilir ve yatay ölçeklenebilir mimari üzerine inşa edilmiş proje.",
        tags: ["Donanım + Yazılım", "Ebeveyn Denetimi", "Ölçeklenebilir Mimari"],
    },
]

export function ProjectsSection() {
    return (
        <section id="projeler" className="py-28 bg-muted/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Label */}
                    <div className="lg:col-span-3">
                        <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase sticky top-24">
                            Projeler
                        </p>
                    </div>

                    {/* Projects */}
                    <div className="lg:col-span-9 space-y-0">
                        {projects.map((project, idx) => (
                            <div
                                key={project.id}
                                className={`group py-10 ${idx < projects.length - 1 ? "border-b border-border" : ""
                                    }`}
                            >
                                <div className="flex items-start justify-between gap-6">
                                    <div className="space-y-4 flex-1">
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs text-muted-foreground font-mono">{project.year}</span>
                                            <span className="text-xs font-medium text-muted-foreground px-2 py-0.5 border border-border rounded-sm">
                                                {project.category}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-semibold text-foreground tracking-tight group-hover:opacity-70 transition-opacity">
                                            {project.title}
                                        </h3>
                                        <p className="text-base text-muted-foreground leading-relaxed font-serif max-w-2xl">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 pt-1">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs text-muted-foreground/70 font-medium"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
