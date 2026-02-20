import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, User, ArrowLeft, Share2, Heart } from "lucide-react"
import Link from "next/link"

interface BlogPostProps {
  post: {
    id: number
    title: string
    content: string
    date: string
    readTime: string
    category: string
    author: string
    tags: string[]
  }
}

export function BlogPost({ post }: BlogPostProps) {
  // Simple markdown-like content processing
  const processContent = (content: string) => {
    return content.split("\n\n").map((paragraph, index) => {
      if (paragraph.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
            {paragraph.replace("## ", "")}
          </h2>
        )
      }
      if (paragraph.startsWith("### ")) {
        return (
          <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">
            {paragraph.replace("### ", "")}
          </h3>
        )
      }
      if (paragraph.includes("```")) {
        const codeContent = paragraph.replace(/```\w*\n?/g, "").replace(/```/g, "")
        return (
          <Card key={index} className="my-6 bg-muted">
            <CardContent className="p-4">
              <pre className="text-sm overflow-x-auto">
                <code>{codeContent}</code>
              </pre>
            </CardContent>
          </Card>
        )
      }
      return (
        <p key={index} className="text-muted-foreground leading-relaxed mb-4 font-serif text-lg">
          {paragraph}
        </p>
      )
    })
  }

  return (
    <article className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Blog'a Dön
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Badge variant={post.category === "Anılar" ? "default" : "secondary"}>{post.category}</Badge>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("tr-TR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6">{post.title}</h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Paylaş
            </Button>
            <Button variant="outline" size="sm">
              <Heart className="mr-2 h-4 w-4" />
              Beğen
            </Button>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">{processContent(post.content)}</div>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{post.author}</p>
                <p className="text-sm text-muted-foreground">Teknoloji tutkunu ve hikaye anlatıcısı</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Paylaş
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </article>
  )
}
