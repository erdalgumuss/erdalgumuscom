"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const [language, setLanguage] = useState<"tr" | "en">("tr")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "tr" ? "en" : "tr"))
  }

  return (
    <Button variant="ghost" size="sm" onClick={toggleLanguage} className="flex items-center gap-2">
      <Globe className="h-4 w-4" />
      {language === "tr" ? "EN" : "TR"}
    </Button>
  )
}
