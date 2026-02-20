"use client"

import { useEffect, useRef } from "react"

export function ThreeNeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Neural network nodes
    const layers = [4, 6, 6, 3]
    const nodes: { x: number; y: number; vx: number; vy: number; layer: number }[] = []
    const connections: { from: number; to: number; strength: number }[] = []

    // Create nodes
    const spacing = canvas.width / (layers.length + 1)
    layers.forEach((count, layerIndex) => {
      const layerSpacing = canvas.height / (count + 1)
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: spacing * (layerIndex + 1),
          y: layerSpacing * (i + 1),
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          layer: layerIndex,
        })
      }
    })

    // Create connections between layers
    let nodeIndex = 0
    for (let i = 0; i < layers.length - 1; i++) {
      const currentLayerSize = layers[i]
      const nextLayerSize = layers[i + 1]
      const currentLayerStart = nodeIndex
      const nextLayerStart = nodeIndex + currentLayerSize

      for (let j = 0; j < currentLayerSize; j++) {
        for (let k = 0; k < nextLayerSize; k++) {
          connections.push({
            from: currentLayerStart + j,
            to: nextLayerStart + k,
            strength: Math.random(),
          })
        }
      }
      nodeIndex += currentLayerSize
    }

    let animationFrame: number
    let time = 0

    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections with animated strength
      connections.forEach((conn) => {
        const from = nodes[conn.from]
        const to = nodes[conn.to]
        const strength = (Math.sin(time + conn.strength * 10) + 1) / 2

        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.strokeStyle = `rgba(34, 197, 94, ${strength * 0.3})`
        ctx.lineWidth = strength * 2
        ctx.stroke()
      })

      // Draw and update nodes
      nodes.forEach((node, index) => {
        // Subtle floating animation
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        const margin = 50
        if (node.x < margin || node.x > canvas.width - margin) node.vx *= -1
        if (node.y < margin || node.y > canvas.height - margin) node.vy *= -1

        // Draw node
        const pulse = (Math.sin(time * 2 + index) + 1) / 2
        const radius = 4 + pulse * 3

        ctx.beginPath()
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34, 197, 94, ${0.6 + pulse * 0.4})`
        ctx.fill()

        // Glow effect
        ctx.beginPath()
        ctx.arc(node.x, node.y, radius + 4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34, 197, 94, ${0.1 + pulse * 0.1})`
        ctx.fill()
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
      className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  )
}
