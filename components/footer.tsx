import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
          {/* Brand */}
          <div className="space-y-2">
            <Link href="/" className="font-semibold text-foreground hover:opacity-70 transition-opacity">
              Erdal Gümüş
            </Link>
            <p className="text-sm text-muted-foreground font-serif">
              AI & Systems Entrepreneur
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/#projeler" className="hover:text-foreground transition-colors">Projeler</Link>
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <Link href="/#iletisim" className="hover:text-foreground transition-colors">İletişim</Link>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/erdal-gumus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/erdal-gumus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="mailto:erdal@nqai.co"
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="E-posta"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Erdal Gümüş. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
