"use client"

import { useEffect, useRef } from "react"

interface FloatingShape {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  rotation: number
  rotationSpeed: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const shapesRef = useRef<FloatingShape[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Initialize canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Create floating shapes
    const createShapes = () => {
      const shapes: FloatingShape[] = []
      const shapeCount = Math.floor((window.innerWidth * window.innerHeight) / 15000) // Responsive shape count

      for (let i = 0; i < shapeCount; i++) {
        shapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 2,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.3 + 0.1,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
        })
      }
      shapesRef.current = shapes
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw floating shapes
      shapesRef.current.forEach((shape) => {
        // Update position
        shape.x += shape.speedX
        shape.y += shape.speedY
        shape.rotation += shape.rotationSpeed

        // Wrap around edges
        if (shape.x > canvas.width + 10) shape.x = -10
        if (shape.x < -10) shape.x = canvas.width + 10
        if (shape.y > canvas.height + 10) shape.y = -10
        if (shape.y < -10) shape.y = canvas.height + 10

        // Draw shape
        ctx.save()
        ctx.translate(shape.x, shape.y)
        ctx.rotate(shape.rotation)
        ctx.globalAlpha = shape.opacity

        // Draw geometric shape (square or circle)
        if (Math.random() > 0.5) {
          // Square
          ctx.fillStyle = "hsl(142, 15%, 45%)" // Primary color
          ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size)
        } else {
          // Circle
          ctx.fillStyle = "hsl(85, 20%, 75%)" // Secondary color
          ctx.beginPath()
          ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.restore()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Initialize
    resizeCanvas()
    createShapes()
    animate()

    // Handle resize
    const handleResize = () => {
      resizeCanvas()
      createShapes()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.6 }} />
}
