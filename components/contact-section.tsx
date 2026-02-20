import { Github, Linkedin, Mail } from "lucide-react"

const links = [
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/erdal-gumus",
        icon: Linkedin,
        description: "Profesyonel profil",
    },
    {
        label: "GitHub",
        href: "https://github.com/erdal-gumus",
        icon: Github,
        description: "Kod & projeler",
    },
    {
        label: "E-posta",
        href: "mailto:erdal@nqai.co",
        icon: Mail,
        description: "Doğrudan iletişim",
    },
]

export function ContactSection() {
    return (
        <section id="iletisim" className="py-28 bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Label */}
                    <div className="lg:col-span-3">
                        <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase sticky top-24">
                            İletişim
                        </p>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-9 space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-tight">
                                Bir proje mi
                                <br />
                                konuşalım.
                            </h2>
                            <p className="text-lg text-muted-foreground font-serif leading-relaxed max-w-xl">
                                Endüstriyel yapay zekâ, ürün geliştirme veya teknik konsültasyon konularında
                                iş birliği için aşağıdan ulaşabilirsiniz.
                            </p>
                        </div>

                        <div className="space-y-2">
                            {links.map((link) => {
                                const Icon = link.icon
                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between py-5 border-b border-border hover:border-foreground transition-colors duration-200"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-200">
                                                <Icon className="h-4 w-4" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-foreground">{link.label}</p>
                                                <p className="text-sm text-muted-foreground">{link.description}</p>
                                            </div>
                                        </div>
                                        <span className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200">
                                            →
                                        </span>
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
