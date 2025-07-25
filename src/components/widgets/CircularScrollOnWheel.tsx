'use client'
import { useRef, useState } from 'react'

const CircularScrollOnWheel = () => {
  const [angle, setAngle] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleWheel = (e: React.WheelEvent) => {
    // Adjust scroll speed
    const scrollSpeed = 5
    const delta = e.deltaY > 0 ? scrollSpeed : -scrollSpeed
    setAngle((prev) => prev + delta)
  }

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      className="relative w-64 h-64 flex items-center justify-center overflow-hidden"
    >
      {/* Central Dot */}
      <div className="absolute w-2 h-2 bg-black rounded-full z-10"></div>

      {/* Orbiting Dot */}
      <div
        className="absolute w-10 h-10 bg-blue-500 rounded-full"
        style={{
          transform: `rotate(${angle}deg) translateX(100px) rotate(-${angle}deg)`,
          transition: 'transform 0.1s linear',
        }}
      />
    </div>
  )
}

export default CircularScrollOnWheel
