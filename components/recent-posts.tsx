import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const recentPosts = [
  {
    id: 1,
    title: "Yapay Zeka ile İlk Karşılaşmam",
    description: "Üniversite yıllarımda yapay zeka ile tanışma hikayem ve bu alandaki ilk adımlarım.",
    date: "2024-01-15",
    readTime: "5 dk",
    category: "Anılar",
  },
  {
    id: 2,
    title: "Modern Web Geliştirme Süreçleri",
    description: "Next.js, React ve modern araçlarla geliştirme süreçlerindeki deneyimlerim.",
    date: "2024-01-10",
    readTime: "8 dk",
    category: "Süreçler",
  },
  {
    id: 3,
    title: "Teknoloji ve İnsan İlişkisi",
    description: "Teknolojinin hayatımızdaki yeri ve gelecekte nasıl şekilleneceği üzerine düşünceler.",
    date: "2024-01-05",
    readTime: "6 dk",
    category: "Düşünceler",
  },
]

export function RecentPosts() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Son Yazılarım</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-serif">
            Anılarım, süreçlerim ve teknoloji dünyasındaki gözlemlerim
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString("tr-TR")}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.readTime} okuma</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/blog/${post.id}`}>
                      Devamını Oku
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/blog">
              Tüm Yazıları Görüntüle
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
