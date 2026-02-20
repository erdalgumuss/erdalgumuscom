import { ArrowUpRight } from "lucide-react"

const projects = [
    {
        id: "hrai",
        year: "2023",
        title: "HRAI / NQAI",
        category: "İK × Yapay Zekâ",
        description:
            "İnsan kaynaklarında parametrik değerlendirme ve objektif puanlama temelli yapay zekâ sistemi. Aday değerlendirme süreçlerini beklenti-temelli ve akademik parametreler üzerinden analiz ederek yoruma dayalı değil, ölçülebilir karar mekanizmaları üreten altyapı.",
        tags: ["Parametrik Değerlendirme", "Karar Sistemleri", "İK Teknolojisi"],
        status: "Aktif",
    },
    {
        id: "endustri",
        year: "2024",
        title: "Endüstriyel AI",
        category: "Ağır Sanayi × Optimizasyon",
        description:
            "PET şişirme makinelerinde ısıl optimizasyon ve ağır sanayi ölçeğinde sensör-tabanlı süreç optimizasyonu. Yüzlerce sensörden toplanan gerçek makine verisiyle çalışan modelleme sistemleri.",
        tags: ["PET Optimizasyonu", "Sensör Analizi", "Maliyet Azaltımı"],
        status: "Tamamlandı",
    },
    {
        id: "neeko",
        year: "2025",
        title: "NEEKO",
        category: "AI × Tüketici Ürünü",
        description:
            "Duyusal etkileşimi yüksek, bağlam zengin ve ebeveyn denetimli yapay zekâ etkileşim platformu. Donanım, yazılım ve bulut altyapısını entegre eden; ürünleşebilir ve yatay ölçeklenebilir mimari.",
        tags: ["Donanım + Yazılım", "Ebeveyn Denetimi", "Ölçeklenebilir Mimari"],
        status: "Geliştirme",
    },
]

export function ProjectsSection() {
    return (
        <section id="projeler" className="py-32 relative bg-secondary/30">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                {/* Section Header */}
                <div className="mb-16">
                    <p className="text-xs font-semibold text-muted-foreground tracking-[0.15em] uppercase mb-4">
                        Projeler
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                        Üzerinde çalıştıklarım.
                    </h2>
                </div>

                {/* Project Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative flex flex-col p-7 rounded-3xl bg-card border border-border/60 card-hover overflow-hidden"
                        >
                            {/* Background shine on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                            {/* Top row: year + arrow */}
                            <div className="flex items-center justify-between mb-6">
                                <span className="font-mono text-xs text-muted-foreground/60">{project.year}</span>
                                <ArrowUpRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-foreground tracking-tight mb-1.5 group-hover:text-primary transition-colors duration-300">
                                {project.title}
                            </h3>

                            {/* Category */}
                            <p className="text-xs font-medium text-muted-foreground/70 mb-4">{project.category}</p>

                            {/* Description */}
                            <p className="text-sm text-muted-foreground leading-relaxed font-serif flex-1 mb-6">
                                {project.description}
                            </p>

                            {/* Footer: tags + status */}
                            <div className="space-y-3">
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-0.5 text-[10px] font-medium text-muted-foreground/60 bg-secondary rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span
                                        className={`w-1.5 h-1.5 rounded-full ${project.status === "Aktif"
                                                ? "bg-green-500 animate-pulse"
                                                : project.status === "Geliştirme"
                                                    ? "bg-amber-400"
                                                    : "bg-muted-foreground/40"
                                            }`}
                                    />
                                    <span className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-wider">
                                        {project.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
