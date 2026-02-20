import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { BlogHero } from "@/components/blog-hero"
import { BlogList } from "@/components/blog-list"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "Blog — Erdal Gümüş",
  description:
    "Yapay zekâ, sistem mühendisliği ve teknoloji üzerine düşünceler, araştırmalar ve yazılar.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-16">
      <Navigation />
      <BlogHero />
      <BlogList />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
