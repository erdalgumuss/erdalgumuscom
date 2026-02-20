import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Megaphone } from "lucide-react"

const announcements = [
  {
    id: 1,
    title: "Robot Erdal Chatbot Yayında!",
    description: "Artık benimle 7/24 sohbet edebilirsiniz. Sorularınızı sorun, fikirlerimi öğrenin.",
    date: "2024-01-20",
    type: "Yeni Özellik",
    priority: "high",
  },
  {
    id: 2,
    title: "Blog Bölümü Güncellendi",
    description: "Yeni tasarım ve gelişmiş okuma deneyimi ile blog yazılarım artık daha keyifli.",
    date: "2024-01-18",
    type: "Güncelleme",
    priority: "medium",
  },
  {
    id: 3,
    title: "Teknoloji Bölümü Eklendi",
    description: "Takip ettiğim teknolojiler ve ilham aldığım projeler artık ayrı bir bölümde.",
    date: "2024-01-15",
    type: "Yeni Bölüm",
    priority: "medium",
  },
]

export function Announcements() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Megaphone className="h-4 w-4" />
            Güncel Duyurular
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Son Gelişmeler</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-serif">
            Site güncellemeleri ve yeni özellikler hakkında bilgiler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((announcement) => (
            <Card key={announcement.id} className="relative overflow-hidden">
              {announcement.priority === "high" && (
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] border-t-primary">
                  <div className="absolute -top-8 -right-1 text-white text-xs font-bold transform rotate-45">YENİ</div>
                </div>
              )}
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={announcement.priority === "high" ? "default" : "secondary"}>
                    {announcement.type}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(announcement.date).toLocaleDateString("tr-TR")}
                  </div>
                </div>
                <CardTitle className="text-lg">{announcement.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{announcement.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
