"use client"

export function GradientOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large gradient orb - top right */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse-slow" />

      {/* Medium gradient orb - bottom left */}
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-secondary/15 to-primary/15 rounded-full blur-2xl animate-float" />

      {/* Small gradient orb - center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-xl animate-float-reverse" />
    </div>
  )
}
