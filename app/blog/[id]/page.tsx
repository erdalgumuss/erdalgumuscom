import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { BlogPost } from "@/components/blog-post"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { notFound } from "next/navigation"

const blogPosts = [
  {
    id: 1,
    title: "Derin Öğrenme Algoritmalarında Optimizasyon Teknikleri",
    excerpt:
      "Neural network eğitiminde kullanılan modern optimizasyon yöntemleri ve gradient descent varyasyonları üzerine teknik bir inceleme.",
    content: `Derin öğrenme modellerinin başarısı, doğru optimizasyon tekniklerinin seçimine bağlıdır. Adam, RMSprop ve SGD gibi optimizasyon algoritmaları, farklı senaryolarda farklı performans gösterir.

Learning rate scheduling, momentum ve adaptive learning rate gibi teknikler, modelin convergence hızını ve final performansını önemli ölçüde etkiler.

## Optimizasyon Algoritmaları

### Stochastic Gradient Descent (SGD)
En temel optimizasyon algoritması. Basit ama etkili.

\`\`\`python
optimizer = torch.optim.SGD(model.parameters(), lr=0.01, momentum=0.9)
\`\`\`

### Adam Optimizer
Adaptive learning rate ile daha hızlı convergence sağlar.

\`\`\`python
optimizer = torch.optim.Adam(model.parameters(), lr=0.001, betas=(0.9, 0.999))
\`\`\`

Özellikle büyük ölçekli modellerde, optimizasyon stratejisi seçimi kritik öneme sahip. Batch size, learning rate ve regularization parametrelerinin doğru kombinasyonu, başarılı bir model için gerekli.`,
    date: "2024-01-15",
    readTime: "8 dk",
    category: "Araştırma",
    author: "Erdal Gümüş",
    tags: ["Derin Öğrenme", "Optimizasyon", "Neural Networks", "AI Research"],
  },
  {
    id: 2,
    title: "Transformer Mimarileri ve Attention Mekanizması",
    excerpt:
      "Modern NLP ve vision modellerinin temelini oluşturan transformer mimarileri ve self-attention mekanizmasının matematiksel analizi.",
    content: `Transformer mimarisi, 2017'de tanıtılmasından bu yana AI alanında devrim yarattı. Self-attention mekanizması, sequence-to-sequence görevlerde RNN'lere göre üstün performans sağlıyor.

Multi-head attention, positional encoding ve layer normalization gibi bileşenler, transformerlerin başarısının anahtarı. BERT, GPT ve Vision Transformer gibi modeller, bu mimarinin gücünü gösteriyor.

## Self-Attention Mekanizması

Attention mekanizması, input sequence'deki her elemanın diğer elemanlarla ilişkisini öğrenir:

\`\`\`python
import torch
import torch.nn as nn

class SelfAttention(nn.Module):
    def __init__(self, embed_size, heads):
        super(SelfAttention, self).__init__()
        self.embed_size = embed_size
        self.heads = heads
        self.head_dim = embed_size // heads

        self.values = nn.Linear(self.head_dim, self.head_dim, bias=False)
        self.keys = nn.Linear(self.head_dim, self.head_dim, bias=False)
        self.queries = nn.Linear(self.head_dim, self.head_dim, bias=False)
        self.fc_out = nn.Linear(heads * self.head_dim, embed_size)
\`\`\`

Transformer tabanlı modeller, domain-specific problemlere adapte edilirken transfer learning ve fine-tuning stratejileri kritik rol oynamaktadır.`,
    date: "2024-01-10",
    readTime: "10 dk",
    category: "Araştırma",
    author: "Erdal Gümüş",
    tags: ["Transformers", "NLP", "Attention", "Deep Learning"],
  },
]

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((p) => p.id === Number.parseInt(params.id))
  if (!post) return { title: "Yazı Bulunamadı — Erdal Gümüş" }
  return {
    title: `${post.title} — Erdal Gümüş`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === Number.parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-16">
      <Navigation />
      <BlogPost post={post} />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }))
}
