"use client"

import { useState, useEffect } from "react"
import PixelArtEditor from "@/components/pixel-art-editor"

export default function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="min-h-screen bg-[#0f1115] text-white overflow-hidden">
      {mounted ? <PixelArtEditor /> : (
        <div className="flex h-screen w-full items-center justify-center bg-[#0f1115]">
          <div className="h-8 w-8 animate-pulse rounded-full bg-orange-500/30" aria-hidden />
        </div>
      )}
    </main>
  )
}
