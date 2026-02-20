"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Derin Öğrenme Algoritmalarında Optimizasyon Teknikleri",
    excerpt:
      "Neural network eğitiminde kullanılan modern optimizasyon yöntemleri ve gradient descent varyasyonları üzerine teknik bir inceleme.",
    content: `Derin öğrenme modellerinin başarısı, doğru optimizasyon tekniklerinin seçimine bağlıdır. Adam, RMSprop ve SGD gibi optimizasyon algoritmaları, farklı senaryolarda farklı performans gösterir.

Learning rate scheduling, momentum ve adaptive learning rate gibi teknikler, modelin convergence hızını ve final performansını önemli ölçüde etkiler. NeuroQubit'te yaptığımız araştırmalar, bu tekniklerin pratik uygulamalarını inceliyor.

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

NeuroQubit'te, transformer tabanlı modelleri çeşitli domain-specific problemlere adapte ediyoruz. Transfer learning ve fine-tuning stratejileri, pratik uygulamalar için kritik.`,
    date: "2024-01-10",
    readTime: "10 dk",
    category: "Araştırma",
    author: "Erdal Gümüş",
    tags: ["Transformers", "NLP", "Attention", "Deep Learning"],
  },
  {
    id: 3,
    title: "Production'da Derin Öğrenme: Deployment Stratejileri",
    excerpt:
      "Araştırma ortamından production ortamına geçişte karşılaşılan zorluklar ve çözüm stratejileri. Model serving, monitoring ve optimization.",
    content: `Bir derin öğrenme modelini production'a taşımak, araştırma yapmaktan çok farklı zorluklar içerir. Latency, throughput, resource utilization ve model monitoring kritik faktörler.

Model quantization, pruning ve knowledge distillation gibi teknikler, production modellerinin performansını optimize eder. TensorRT, ONNX ve TorchServe gibi araçlar, deployment sürecini kolaylaştırır.

NeuroQubit'te, end-to-end ML pipeline'ları kuruyoruz. CI/CD, A/B testing ve model versioning, production sistemlerinin vazgeçilmez parçaları.`,
    date: "2024-01-05",
    readTime: "12 dk",
    category: "Mühendislik",
    author: "Erdal Gümüş",
    tags: ["MLOps", "Production", "Deployment", "Model Serving"],
  },
  {
    id: 4,
    title: "Computer Vision: CNN'den Vision Transformers'a",
    excerpt:
      "Görüntü işleme alanındaki evrim: Convolutional Neural Networks'ten modern Vision Transformer mimarilerine geçiş.",
    content: `Computer vision, derin öğrenmenin en başarılı olduğu alanlardan biri. AlexNet'ten başlayan CNN devrimi, ResNet, EfficientNet gibi mimarilerle devam etti.

Son yıllarda Vision Transformers (ViT), CNN'lere alternatif olarak ortaya çıktı. Patch-based processing ve self-attention, görüntü sınıflandırmada yeni standartlar belirledi.

NeuroQubit'te, hem CNN hem de transformer tabanlı modelleri kullanıyoruz. Her mimarinin güçlü yönlerini, problem domain'ine göre değerlendiriyoruz.`,
    date: "2024-01-01",
    readTime: "9 dk",
    category: "Araştırma",
    author: "Erdal Gümüş",
    tags: ["Computer Vision", "CNN", "Vision Transformers", "Image Processing"],
  },
  {
    id: 5,
    title: "Reinforcement Learning: Teori ve Pratik",
    excerpt:
      "Pekiştirmeli öğrenme algoritmalarının teorik temelleri ve gerçek dünya uygulamaları. Q-learning'den PPO'ya.",
    content: `Reinforcement Learning, agent'ların environment ile etkileşim kurarak öğrendiği bir paradigma. Markov Decision Processes, bu alanın matematiksel temelini oluşturur.

Q-learning, DQN, Policy Gradient ve Actor-Critic yöntemleri, farklı problem türleri için farklı avantajlar sunar. OpenAI'ın PPO algoritması, pratik uygulamalarda yaygın kullanılıyor.

NeuroQubit'te, RL algoritmalarını optimization ve decision-making problemlerine uyguluyoruz. Simulation ortamları ve reward shaping, başarılı RL uygulamalarının anahtarı.`,
    date: "2023-12-28",
    readTime: "11 dk",
    category: "Araştırma",
    author: "Erdal Gümüş",
    tags: ["Reinforcement Learning", "RL", "Q-Learning", "PPO"],
  },
  {
    id: 6,
    title: "Bilgisayar Bilimlerinde Algoritma Analizi",
    excerpt:
      "Temel algoritma paradigmaları ve complexity analysis. Efficient algorithm design prensipleri ve trade-off'lar.",
    content: `Algoritma analizi, bilgisayar bilimlerinin temelidir. Time complexity, space complexity ve Big-O notation, algoritma performansını değerlendirmek için kritik araçlar.

Dynamic programming, greedy algorithms, divide-and-conquer gibi paradigmalar, farklı problem türleri için optimal çözümler sunar. Data structure seçimi, algoritma performansını doğrudan etkiler.

NeuroQubit'te, AI algoritmalarını optimize ederken, temel bilgisayar bilimleri prensiplerini uyguluyoruz. Efficient implementation, scalable sistemler için gerekli.`,
    date: "2023-12-25",
    readTime: "7 dk",
    category: "Mühendislik",
    author: "Erdal Gümüş",
    tags: ["Algorithms", "Complexity", "Computer Science", "Optimization"],
  },
]

export function BlogList() {
  const categories = ["Tümü", "Araştırma", "Mühendislik"]
  const [activeCategory, setActiveCategory] = useState("Tümü")

  const filteredPosts =
    activeCategory === "Tümü" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === activeCategory ? "default" : "outline"}
              size="lg"
              className="rounded-full px-8 py-3 font-semibold transition-all duration-200 hover:scale-105"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <Badge
                    variant={post.category === "Araştırma" ? "default" : "secondary"}
                    className="px-3 py-1 font-semibold"
                  >
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground font-medium">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString("tr-TR")}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed line-clamp-3 text-muted-foreground">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
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
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="lg"
                  asChild
                  className="w-full justify-between font-semibold hover:bg-primary/10"
                >
                  <Link href={`/blog/${post.id}`}>
                    Devamını Oku
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
