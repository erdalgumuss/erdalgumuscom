"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Send, User, Sparkles } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const erdalGumusResponses = {
  greetings: [
    "Merhaba! Ben Erdal Gümüş, NeuroQubit'in kurucusu. Derin öğrenme, yapay zeka ve teknoloji hakkında sohbet etmeye hazırım. Sana nasıl yardımcı olabilirim?",
    "Selam! Erdal Gümüş burada. Yapay zeka, derin öğrenme algoritmaları ya da NeuroQubit hakkında merak ettiğin bir şey var mı?",
    "Hey! Ben Erdal Gümüş. Bilgisayar bilimleri ve yapay zeka dünyasındaki çalışmalarım hakkında konuşabiliriz.",
  ],
  ai: [
    "Derin öğrenme algoritmalarıyla çalışmak benim tutkum. Neural network mimarileri ve optimization teknikleri üzerine yoğunlaşıyorum.",
    "NeuroQubit'te yapay zeka çözümleri geliştiriyoruz. En çok heyecanlandığım şey, AI'ın gerçek dünya problemlerini çözme potansiyeli.",
    "Makine öğrenmesinden derin öğrenmeye geçiş, bilgisayar bilimlerinde devrim yarattı. Ben de bu dönüşümün bir parçası olmaktan gurur duyuyorum.",
  ],
  web: [
    "Modern web teknolojileri AI uygulamalarını kullanıcılara ulaştırmak için kritik. Next.js ve TypeScript ile güçlü sistemler kuruyoruz.",
    "NeuroQubit'te web tabanlı AI çözümleri geliştiriyoruz. Kullanıcı deneyimi ve performans bizim için çok önemli.",
    "Full-stack geliştirme, AI modellerini production'a taşımak için gerekli. Bu yüzden hem backend hem frontend teknolojilerine hakimim.",
  ],
  neuroqubit: [
    "NeuroQubit'i kurarken amacım, derin öğrenme teknolojilerini erişilebilir kılmaktı. Şimdi gerçek dünya problemlerine AI çözümleri sunuyoruz.",
    "NeuroQubit'te odak noktamız, cutting-edge derin öğrenme algoritmaları ile pratik uygulamalar geliştirmek.",
    "Şirketimizde yapay zeka araştırmaları ve ürün geliştirme bir arada ilerliyor. Akademik bilgiyi endüstriyel çözümlere dönüştürüyoruz.",
  ],
  learning: [
    "Bilgisayar mühendisliği eğitimim sırasında AI'a olan tutkum başladı. Şimdi bu tutkuyu NeuroQubit'te gerçeğe dönüştürüyorum.",
    "Sürekli öğrenme, özellikle AI alanında hayati. Her gün yeni paper'lar okuyorum ve yeni teknikleri deniyorum.",
    "En iyi öğrenme yöntemi benim için implementation. Bir algoritmayı gerçekten anlamak için kodlamanız gerekiyor.",
  ],
  default: [
    "Bu konuda daha detaylı düşünmem gerek. NeuroQubit'te benzer problemler üzerinde çalışıyoruz.",
    "İlginç bir soru! Derin öğrenme ve bilgisayar bilimleri konusunda sürekli yeni şeyler öğreniyorum.",
    "Bu konu hakkında daha fazla araştırma yapmam gerekiyor. Belki blog yazılarımda ele alabilirim.",
  ],
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Merhaba! Ben Erdal Gümüş, NeuroQubit'in kurucusu. Derin öğrenme, yapay zeka ve teknoloji hakkında sohbet etmeye hazırım. Sana nasıl yardımcı olabilirim?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    if (message.includes("merhaba") || message.includes("selam") || message.includes("hey")) {
      return erdalGumusResponses.greetings[Math.floor(Math.random() * erdalGumusResponses.greetings.length)]
    }

    if (message.includes("neuroqubit") || message.includes("şirket") || message.includes("kurucu")) {
      return erdalGumusResponses.neuroqubit[Math.floor(Math.random() * erdalGumusResponses.neuroqubit.length)]
    }

    if (
      message.includes("yapay zeka") ||
      message.includes("ai") ||
      message.includes("derin öğrenme") ||
      message.includes("deep learning")
    ) {
      return erdalGumusResponses.ai[Math.floor(Math.random() * erdalGumusResponses.ai.length)]
    }

    if (message.includes("web") || message.includes("react") || message.includes("next") || message.includes("kod")) {
      return erdalGumusResponses.web[Math.floor(Math.random() * erdalGumusResponses.web.length)]
    }

    if (message.includes("öğren") || message.includes("nasıl") || message.includes("süreç")) {
      return erdalGumusResponses.learning[Math.floor(Math.random() * erdalGumusResponses.learning.length)]
    }

    return erdalGumusResponses.default[Math.floor(Math.random() * erdalGumusResponses.default.length)]
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    setTimeout(
      () => {
        const botResponse: Message = {
          id: messages.length + 2,
          text: getResponse(inputValue),
          sender: "bot",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botResponse])
        setIsTyping(false)
      },
      1000 + Math.random() * 2000,
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickQuestions = [
    "NeuroQubit nedir?",
    "Derin öğrenme üzerine nasıl çalışıyorsun?",
    "En sevdiğin AI teknolojisi nedir?",
    "Bilgisayar mühendisliği sürecin nasıldı?",
  ]

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Bot className="h-4 w-4" />
            AI Sohbet Botu
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">Erdal Gümüş</span> ile Sohbet Et
          </h1>
          <p className="text-lg text-muted-foreground font-serif">
            NeuroQubit Kurucusu - Derin öğrenme, yapay zeka ve bilgisayar bilimleri hakkında benimle konuş
          </p>
        </div>

        {/* Chat Container */}
        <Card className="h-[600px] flex flex-col">
          <CardHeader className="border-b">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">Erdal Gümüş</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Çevrimiçi</span>
                </div>
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {message.sender === "bot" && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    {message.sender === "user" && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    <div>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString("tr-TR", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted text-muted-foreground rounded-2xl px-4 py-3 max-w-[80%]">
                  <div className="flex items-center gap-2">
                    <Bot className="h-4 w-4" />
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-4">
              <p className="text-sm text-muted-foreground mb-3">Hızlı sorular:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => setInputValue(question)}
                  >
                    {question}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Mesajını yaz..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button onClick={handleSendMessage} disabled={!inputValue.trim() || isTyping}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              <Sparkles className="h-3 w-3 inline mr-1" />
              Erdal Gümüş'ün deneyimleri ve NeuroQubit çalışmaları ile eğitilmiş AI
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
