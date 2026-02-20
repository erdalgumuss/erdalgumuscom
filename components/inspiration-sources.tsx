import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star, TrendingUp, Users, BookOpen } from "lucide-react"

const inspirationSources = [
  {
    id: 1,
    name: "Hacker News",
    type: "Topluluk",
    description: "Teknoloji dünyasının nabzını tutan topluluk. Güncel gelişmeleri buradan takip ediyorum.",
    icon: Users,
    link: "https://news.ycombinator.com",
    why: "Teknoloji trendleri ve startup haberleri",
  },
  {
    id: 2,
    name: "GitHub Trending",
    type: "Platform",
    description: "Açık kaynak projelerdeki yenilikleri ve popüler repoları keşfetmek için.",
    icon: TrendingUp,
    link: "https://github.com/trending",
    why: "Yeni kütüphaneler ve araçlar",
  },
  {
    id: 3,
    name: "Dev.to",
    type: "Blog Platformu",
    description: "Geliştiricilerin deneyimlerini paylaştığı platform. Çok değerli içerikler var.",
    icon: BookOpen,
    link: "https://dev.to",
    why: "Pratik deneyimler ve öğretici yazılar",
  },
  {
    id: 4,
    name: "Product Hunt",
    type: "Ürün Keşfi",
    description: "Yeni ürünleri ve startup'ları keşfetmek için harika bir kaynak.",
    icon: Star,
    link: "https://producthunt.com",
    why: "Yenilikçi ürünler ve fikirler",
  },
]

export function InspirationSources() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">İlham Kaynaklarım</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-serif">
            Teknoloji dünyasındaki gelişmeleri takip ettiğim platformlar ve kaynaklar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {inspirationSources.map((source) => {
            const IconComponent = source.icon
            return (
              <Card key={source.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{source.type}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{source.name}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{source.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Neden takip ediyorum:</strong> {source.why}
                      </p>
                    </div>
                    <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                      <a href={source.link} target="_blank" rel="noopener noreferrer">
                        Ziyaret Et
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
