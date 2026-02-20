import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Radial gradient spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.92_0.003_264/0.6),transparent)]" />

      {/* Soft orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-[120px] opacity-30 animate-float"
        style={{ background: "oklch(0.85 0.01 264 / 0.5)", animationDelay: "0s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-[100px] opacity-20 animate-float"
        style={{ background: "oklch(0.80 0.015 220 / 0.4)", animationDelay: "2.5s" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 pt-20 pb-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-muted-foreground border border-border rounded-full bg-card/80 backdrop-blur-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Açık İş Birlikleri
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] text-foreground mb-8 animate-fade-up"
            style={{ animationDelay: "60ms" }}
          >
            Erdal
            <br />
            <span className="shimmer-text">Gümüş.</span>
          </h1>

          {/* Description */}
          <p
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12 animate-fade-up font-serif"
            style={{ animationDelay: "120ms" }}
          >
            Yapay zekâyı fiziksel dünyaya entegre eden sistem mühendisi.
            Ölçeklenebilir ürün altyapıları kuruyor; endüstriyel AI'dan
            tüketici ürünlerine uzanan bir portföy inşa ediyorum.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-3 animate-fade-up"
            style={{ animationDelay: "180ms" }}
          >
            <Link
              href="/#projeler"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-semibold rounded-full hover:bg-foreground/85 transition-all duration-300 active:scale-[0.97]"
            >
              Projeleri Gör
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/#iletisim"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground text-sm font-semibold rounded-full hover:bg-secondary/70 border border-border/60 transition-all duration-300 active:scale-[0.97]"
            >
              İletişime Geç
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-foreground/40" />
        </div>
      </div>
    </section>
  )
}
