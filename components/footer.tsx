import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-foreground flex items-center justify-center">
              <span className="text-background font-bold text-xs select-none">EG</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground leading-none mb-0.5">Erdal Gümüş</p>
              <p className="text-xs text-muted-foreground">AI & Systems Entrepreneur</p>
            </div>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <Link href="/#projeler" className="hover:text-foreground transition-colors">Projeler</Link>
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <Link href="/#iletisim" className="hover:text-foreground transition-colors">İletişim</Link>
          </div>

          {/* Social */}
          <div className="flex items-center gap-2">
            {[
              { href: "https://www.linkedin.com/in/gumuserdall", Icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com/erdalgumuss", Icon: Github, label: "GitHub" },
              { href: "mailto:erdal@neuroqubitai.com.tr", Icon: Mail, label: "E-posta" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50">
          <p className="text-xs text-muted-foreground/60">
            © {currentYear} Erdal Gümüş. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
