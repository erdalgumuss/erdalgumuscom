import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"

const links = [
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/erdal-gumus",
        icon: Linkedin,
        description: "Profesyonel profil & bağlantılar",
    },
    {
        label: "GitHub",
        href: "https://github.com/erdalgumuss",
        icon: Github,
        description: "Kod, projeler & katkılar",
    },
    {
        label: "E-posta",
        href: "mailto:erdal@nqai.co",
        icon: Mail,
        description: "erdal@nqai.co",
    },
]

export function ContactSection() {
    return (
        <section id="iletisim" className="py-32 relative bg-background">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Left */}
                    <div className="lg:col-span-4 space-y-5">
                        <p className="text-xs font-semibold text-muted-foreground tracking-[0.15em] uppercase">
                            İletişim
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-tight">
                            Birlikte
                            <br />
                            <span className="text-muted-foreground font-normal">bir şeyler yapalım.</span>
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed font-serif">
                            Endüstriyel yapay zekâ, ürün geliştirme veya teknik
                            konsültasyon konularında iş birliği için aşağıdan
                            ulaşabilirsiniz.
                        </p>
                    </div>

                    {/* Right: contact cards */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {links.map((link) => {
                                const Icon = link.icon
                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                                        rel="noopener noreferrer"
                                        className="group flex flex-col gap-4 p-6 rounded-3xl bg-card border border-border/60 card-hover"
                                    >
                                        {/* Icon + Arrow row */}
                                        <div className="flex items-center justify-between">
                                            <div className="w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                                                <Icon className="h-4 w-4" />
                                            </div>
                                            <ArrowUpRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                                        </div>

                                        {/* Label + desc */}
                                        <div>
                                            <p className="font-semibold text-sm text-foreground mb-1">{link.label}</p>
                                            <p className="text-xs text-muted-foreground leading-relaxed">{link.description}</p>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
