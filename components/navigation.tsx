"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/#projeler", label: "Projeler" },
    { href: "/blog", label: "Blog" },
    { href: "/#iletisim", label: "İletişim" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "glass border-b border-border/60 shadow-[0_1px_0_oklch(0_0_0/0.04)]"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2"
          >
            <div className="w-7 h-7 rounded-lg bg-foreground flex items-center justify-center transition-transform duration-200 group-hover:scale-95">
              <span className="text-background font-bold text-xs select-none">EG</span>
            </div>
            <span className="font-semibold text-sm text-foreground tracking-tight">
              Erdal Gümüş
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${pathname === item.href
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  }`}
              >
                {item.label}
              </Link>
            ))}

            {/* CTA pill */}
            <Link
              href="/#iletisim"
              className="ml-3 px-4 py-1.5 text-sm font-medium bg-foreground text-background rounded-full hover:bg-foreground/85 transition-all duration-200 active:scale-95"
            >
              İletişim
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-secondary transition-colors"
            aria-label="Menü"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-scale-in">
            <div className="glass rounded-2xl p-3 space-y-1 mt-1 border border-border/60">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
