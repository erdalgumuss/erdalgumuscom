import { PenTool, BookOpen, Heart } from "lucide-react"

export function BlogHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Blog Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <PenTool className="h-4 w-4" />
            Anılar & Süreçler
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Blog <span className="text-primary">Yazılarım</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-serif leading-relaxed max-w-3xl mx-auto">
              Teknoloji yolculuğumda yaşadığım deneyimler, öğrendiğim dersler ve paylaşmak istediğim hikayeler
            </p>
          </div>

          {/* Categories */}
          <div className="flex justify-center items-center gap-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Heart className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Anılar</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Süreçler</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
