"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export default function MicrobladingSlider() {
  const [sliderPosition, setSliderPosition] = useState(10) // 0-100 percentage
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    updateSliderPosition(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      updateSliderPosition(e.clientX)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    updateSliderPosition(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      updateSliderPosition(e.touches[0].clientX)
    }
  }

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        updateSliderPosition(e.clientX)
      }
    }

    const handleGlobalMouseUp = () => setIsDragging(false)
    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        updateSliderPosition(e.touches[0].clientX)
      }
    }
    const handleGlobalTouchEnd = () => setIsDragging(false)

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove)
      document.addEventListener("mouseup", handleGlobalMouseUp)
      document.addEventListener("touchmove", handleGlobalTouchMove)
      document.addEventListener("touchend", handleGlobalTouchEnd)
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove)
      document.removeEventListener("mouseup", handleGlobalMouseUp)
      document.removeEventListener("touchmove", handleGlobalTouchMove)
      document.removeEventListener("touchend", handleGlobalTouchEnd)
    }
  }, [isDragging])

  return (
    <div>
      <div className="w-full">
        <div className="text-center mb-4">
          <p className="text-black text-lg font-medium flex items-center justify-center gap-2">
            Faites glisser vers la droite pour voir la transformation
            <span className="inline-block animate-pulse">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="animate-bounce">
                <path
                  d="M5 12h14m-7-7l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </p>
        </div>

        {/* Slider container with lash extension images */}
        <div
          ref={containerRef}
          className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl cursor-ew-resize select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {/* After Image (Left side) */}
          <div className="absolute inset-0">
            <Image
              src="/images/lash-after.png"
              alt="Après - Extensions volume"
              fill
              className="object-contain"
              priority
            />
            {/* Overlay text for after image */}
            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-medium">
              Après - Extensions volume
            </div>
          </div>

          {/* Before Image (Right side) */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)`,
            }}
          >
            <Image src="/images/lash-before.png" alt="Avant - Cils naturels" fill className="object-contain" priority />
            {/* Overlay text for before image */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-medium">
              Avant - Cils naturels
            </div>
          </div>

          {/* Slider handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 18l6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
