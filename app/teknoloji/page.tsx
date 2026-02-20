import { Navigation } from "@/components/navigation"
import { TechnologyHero } from "@/components/technology-hero"
import { TechnologyGrid } from "@/components/technology-grid"
import { InspirationSources } from "@/components/inspiration-sources"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function TechnologyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <TechnologyHero />
      <TechnologyGrid />
      <InspirationSources />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
