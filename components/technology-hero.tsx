import { Cpu, Sparkles, Rocket } from "lucide-react"

export function TechnologyHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Tech Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <Cpu className="h-4 w-4" />
            Teknoloji & İlham
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Takip Ettiğim <span className="text-primary">Teknolojiler</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-serif leading-relaxed max-w-3xl mx-auto">
              Beni heyecanlandıran projeler, ilham aldığım şirketler ve gelecek vadeden teknolojiler
            </p>
          </div>

          {/* Feature Icons */}
          <div className="flex justify-center items-center gap-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">AI & ML</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Rocket className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Web Tech</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Cpu className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
