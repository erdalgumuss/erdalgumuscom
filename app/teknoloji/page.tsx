import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "Teknoloji — Erdal Gümüş",
  description: "Kullandığım ve takip ettiğim teknolojiler, araçlar ve yaklaşımlar.",
}

export default function TechnologyPage() {
  return (
    <main className="min-h-screen pt-16">
      <Navigation />

      {/* Placeholder — içerik yakında eklenecek */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <p className="text-xs font-semibold text-muted-foreground tracking-[0.15em] uppercase mb-6">
            Teknoloji
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-6">
            Stack & Araçlar
          </h1>
          <p className="text-lg text-muted-foreground font-serif leading-relaxed max-w-2xl">
            Bu bölüm yakında güncellenecek.
          </p>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
