import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Brain, Video, Zap, Globe, Database, Smartphone } from "lucide-react"

const technologies = [
  {
    id: 1,
    name: "DeepMind",
    category: "AI Research",
    description: "Yapay zeka araştırmalarında öncü. AlphaGo'dan Gemini'ye kadar etkileyici projeler.",
    icon: Brain,
    color: "bg-blue-500/10 text-blue-600",
    link: "https://deepmind.google",
    highlights: ["AlphaFold", "Gemini", "AlphaGo"],
    status: "Aktif Takip",
  },
  {
    id: 2,
    name: "Runway ML",
    category: "Creative AI",
    description: "Yaratıcı yapay zeka araçları. Video üretiminden görsel efektlere kadar.",
    icon: Video,
    color: "bg-purple-500/10 text-purple-600",
    link: "https://runwayml.com",
    highlights: ["Gen-2", "Video AI", "Creative Tools"],
    status: "İlham Kaynağı",
  },
  {
    id: 3,
    name: "Vercel",
    category: "Web Platform",
    description: "Modern web geliştirme platformu. Next.js'in arkasındaki güç.",
    icon: Globe,
    color: "bg-black/10 text-black dark:bg-white/10 dark:text-white",
    link: "https://vercel.com",
    highlights: ["Next.js", "Edge Functions", "AI SDK"],
    status: "Günlük Kullanım",
  },
  {
    id: 4,
    name: "OpenAI",
    category: "AI Platform",
    description: "ChatGPT ve GPT modelleriyle AI'ı herkese ulaştıran platform.",
    icon: Zap,
    color: "bg-green-500/10 text-green-600",
    link: "https://openai.com",
    highlights: ["GPT-4", "ChatGPT", "API"],
    status: "Aktif Kullanım",
  },
  {
    id: 5,
    name: "Supabase",
    category: "Backend Platform",
    description: "Açık kaynak Firebase alternatifi. Hızlı backend geliştirme.",
    icon: Database,
    color: "bg-emerald-500/10 text-emerald-600",
    link: "https://supabase.com",
    highlights: ["PostgreSQL", "Real-time", "Auth"],
    status: "Proje Kullanımı",
  },
  {
    id: 6,
    name: "React Native",
    category: "Mobile Framework",
    description: "Cross-platform mobil uygulama geliştirme framework'ü.",
    icon: Smartphone,
    color: "bg-cyan-500/10 text-cyan-600",
    link: "https://reactnative.dev",
    highlights: ["Cross-platform", "Native Performance", "Hot Reload"],
    status: "Öğrenme Aşaması",
  },
]

export function TechnologyGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Teknoloji Radarım</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-serif">
            Yakından takip ettiğim ve projelerimde kullandığım teknolojiler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech) => {
            const IconComponent = tech.icon
            return (
              <Card key={tech.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${tech.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary">{tech.category}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{tech.name}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{tech.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-2">Öne Çıkan Özellikler:</h4>
                      <div className="flex flex-wrap gap-1">
                        {tech.highlights.map((highlight, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant={tech.status.includes("Aktif") ? "default" : "secondary"}>{tech.status}</Badge>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={tech.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
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
