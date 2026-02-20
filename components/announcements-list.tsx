import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Star, Zap, Plus, Settings, Sparkles } from "lucide-react"

const announcements = [
  {
    id: 1,
    title: "NeuroQubit AI Chatbot Sistemi Aktif",
    description:
      "Derin öğrenme ve yapay zeka konularında benimle 7/24 sohbet edebilirsiniz. NeuroQubit araştırmaları ve bilgisayar bilimleri hakkında teknik sorularınızı yanıtlıyorum.",
    date: "2024-01-20",
    time: "14:30",
    type: "Yeni Özellik",
    priority: "high",
    icon: Sparkles,
    details: ["Teknik sohbet sistemi", "AI araştırmaları", "7/24 erişilebilir", "Üyelik gerektirmiyor"],
  },
  {
    id: 2,
    title: "Araştırma Blog Bölümü Güncellendi",
    description:
      "Derin öğrenme, transformer mimarileri ve MLOps konularında yeni teknik makaleler eklendi. Kategori filtreleme ve gelişmiş okuma deneyimi ile güncellendi.",
    date: "2024-01-18",
    time: "09:15",
    type: "Güncelleme",
    priority: "medium",
    icon: Settings,
    details: ["Teknik makaleler", "Araştırma kategorileri", "Kod örnekleri", "Mobil optimizasyon"],
  },
  {
    id: 3,
    title: "Teknoloji Radarı Bölümü Eklendi",
    description:
      "Takip ettiğim AI teknolojileri, ilham aldığım araştırma projeleri ve teknoloji trendleri artık ayrı bir bölümde. DeepMind, OpenAI gibi kuruluşların çalışmalarını inceleyebilirsiniz.",
    date: "2024-01-15",
    time: "16:45",
    type: "Yeni Bölüm",
    priority: "medium",
    icon: Plus,
    details: ["AI teknoloji radarı", "Araştırma projeleri", "Trend analizi", "Akademik kaynaklar"],
  },
  {
    id: 4,
    title: "NeuroQubit Araştırma Odakları Paylaşıldı",
    description:
      "NeuroQubit'te yürüttüğümüz derin öğrenme araştırmaları ve odak alanlarımız hakkında detaylı bilgiler eklendi. Optimization, transformer mimarileri ve production ML konularında çalışmalarımız.",
    date: "2024-01-12",
    time: "11:20",
    type: "İçerik Güncellemesi",
    priority: "low",
    icon: Star,
    details: ["Araştırma odakları", "Teknik detaylar", "Proje portföyü", "Akademik katkılar"],
  },
  {
    id: 5,
    title: "Site Performans ve Mimari Optimizasyonu",
    description:
      "Web sitesi mimarisi optimize edildi, sayfa yükleme hızları artırıldı ve modern web teknolojileri entegre edildi. Next.js 15 ve React 19 ile güncellendi.",
    date: "2024-01-08",
    time: "13:00",
    type: "Teknik Güncelleme",
    priority: "medium",
    icon: Zap,
    details: ["Performans optimizasyonu", "Modern stack", "Mobil performans", "SEO iyileştirmeleri"],
  },
  {
    id: 6,
    title: "Erdal Gümüş - NeuroQubit Web Sitesi Yayında",
    description:
      "NeuroQubit kurucusu Erdal Gümüş'ün kişisel web sitesi yayına alındı. Derin öğrenme araştırmaları, teknik makaleler ve AI teknolojileri hakkında içerikler.",
    date: "2024-01-01",
    time: "00:00",
    type: "Lansman",
    priority: "high",
    icon: Star,
    details: ["Profesyonel tasarım", "Teknik içerik", "AI odaklı", "Araştırma paylaşımları"],
  },
]

export function AnnouncementsList() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {announcements.map((announcement) => {
            const IconComponent = announcement.icon
            return (
              <Card
                key={announcement.id}
                className="relative overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                {announcement.priority === "high" && (
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[50px] border-l-transparent border-t-[50px] border-t-primary">
                    <div className="absolute -top-10 -right-2 text-white text-xs font-bold transform rotate-45">
                      ÖNEMLİ
                    </div>
                  </div>
                )}

                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge
                          variant={
                            announcement.priority === "high"
                              ? "default"
                              : announcement.priority === "medium"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {announcement.type}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(announcement.date).toLocaleDateString("tr-TR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {announcement.time}
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors mb-3">
                        {announcement.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {announcement.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="ml-16">
                    <h4 className="font-semibold text-sm text-foreground mb-3">Öne Çıkan Özellikler:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {announcement.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          {detail}
                        </div>
                      ))}
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
