import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-[92vh] flex items-center justify-center relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/5" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-10 animate-fade-in-up">
          {/* Eyebrow */}
          <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
            Teknoloji Girişimcisi
          </p>

          {/* Name */}
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-8xl lg:text-[7rem] font-bold text-foreground leading-[0.9] tracking-tighter">
              Erdal
              <br />
              Gümüş
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-light max-w-2xl">
              Yapay zekâyı fiziksel dünyaya entegre eden, ölçeklenebilir ürün altyapıları
              inşa eden sistem mühendisi.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="text-base px-10 py-6 h-auto font-medium rounded-none bg-foreground text-background hover:bg-foreground/85 transition-all duration-300"
            >
              <Link href="/#projeler">Projeleri Gör</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-10 py-6 h-auto font-medium border border-border bg-transparent hover:bg-muted transition-all duration-300 rounded-none"
            >
              <Link href="/#iletisim">İletişime Geç</Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
