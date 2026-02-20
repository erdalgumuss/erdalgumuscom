import { Navigation } from "@/components/navigation"
import { AnnouncementsHero } from "@/components/announcements-hero"
import { AnnouncementsList } from "@/components/announcements-list"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function AnnouncementsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AnnouncementsHero />
      <AnnouncementsList />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
