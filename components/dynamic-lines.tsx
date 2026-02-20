"use client"

import { useEffect, useRef } from "react"

export function DynamicLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const lines: {
      x1: number
      y1: number
      angle: number
      speed: number
      length: number
    }[] = []

    for (let i = 0; i < 12; i++) {
      lines.push({
        x1: Math.random() * canvas.width,
        y1: Math.random() * canvas.height,
        angle: Math.random() * Math.PI * 2,
        speed: 0.0005 + Math.random() * 0.001,
        length: 80 + Math.random() * 180,
      })
    }

    let animationFrame: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      lines.forEach((line) => {
        line.angle += line.speed
        const x2 = line.x1 + Math.cos(line.angle) * line.length
        const y2 = line.y1 + Math.sin(line.angle) * line.length

        if (line.x1 < 0) line.x1 = canvas.width
        if (line.x1 > canvas.width) line.x1 = 0
        if (line.y1 < 0) line.y1 = canvas.height
        if (line.y1 > canvas.height) line.y1 = 0

        line.x1 += Math.cos(line.angle) * 0.15
        line.y1 += Math.sin(line.angle) * 0.15

        const gradient = ctx.createLinearGradient(line.x1, line.y1, x2, y2)
        // Neutral slate color instead of green
        gradient.addColorStop(0, "rgba(100, 100, 120, 0)")
        gradient.addColorStop(0.5, "rgba(100, 100, 120, 0.15)")
        gradient.addColorStop(1, "rgba(100, 100, 120, 0)")

        ctx.beginPath()
        ctx.moveTo(line.x1, line.y1)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 0.8
        ctx.stroke()
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.5 }}
    />
  )
}
