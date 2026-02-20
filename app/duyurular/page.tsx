import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "Duyurular — Erdal Gümüş",
  description: "Projeler ve çalışmalar hakkında güncel haberler ve duyurular.",
}

export default function AnnouncementsPage() {
  return (
    <main className="min-h-screen pt-16">
      <Navigation />

      {/* Placeholder — içerik yakında eklenecek */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <p className="text-xs font-semibold text-muted-foreground tracking-[0.15em] uppercase mb-6">
            Duyurular
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-6">
            Güncel Haberler
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
