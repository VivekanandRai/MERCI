'use client'
import { MapPin } from 'lucide-react'

export default function TopBar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
      <div className="max-w-[430px] mx-auto flex items-center justify-between px-4 h-14">
        <span className="text-xl font-bold" style={{ color: '#0F6E56' }}>merci.</span>
        <div className="flex items-center gap-1.5 text-sm text-[#374151]">
          <MapPin className="w-3.5 h-3.5" />
          <span>South Delhi</span>
        </div>
      </div>
    </header>
  )
}
