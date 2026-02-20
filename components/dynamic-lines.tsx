"use client"

import { useEffect, useRef } from "react"

export function DynamicLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Very subtle, slow particles — Apple-like refined feel
    const particles: { x: number; y: number; angle: number; speed: number; length: number; opacity: number }[] = []

    for (let i = 0; i < 8; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        angle: Math.random() * Math.PI * 2,
        speed: 0.0003 + Math.random() * 0.0006,
        length: 60 + Math.random() * 140,
        opacity: 0.04 + Math.random() * 0.06,
      })
    }

    let animationFrame: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.angle += p.speed
        const x2 = p.x + Math.cos(p.angle) * p.length
        const y2 = p.y + Math.sin(p.angle) * p.length

        // Drift slowly
        p.x += Math.cos(p.angle) * 0.1
        p.y += Math.sin(p.angle) * 0.1

        // Wrap
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        const g = ctx.createLinearGradient(p.x, p.y, x2, y2)
        const a = p.opacity
        g.addColorStop(0, `rgba(0,0,0,0)`)
        g.addColorStop(0.5, `rgba(0,0,0,${a})`)
        g.addColorStop(1, `rgba(0,0,0,0)`)

        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = g
        ctx.lineWidth = 0.5
        ctx.stroke()
      })

      animationFrame = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  )
}
