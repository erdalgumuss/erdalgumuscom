import { Megaphone, Bell, Calendar } from "lucide-react"

export function AnnouncementsHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Announcements Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <Megaphone className="h-4 w-4" />
            Site Duyuruları
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Son <span className="text-primary">Duyurular</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-serif leading-relaxed max-w-3xl mx-auto">
              Site güncellemeleri, yeni özellikler ve önemli gelişmeler hakkında bilgiler
            </p>
          </div>

          {/* Feature Icons */}
          <div className="flex justify-center items-center gap-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Bell className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Güncellemeler</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Tarihli</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
