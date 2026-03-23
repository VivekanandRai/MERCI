'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Home, PlusCircle, Trophy, Users, User } from 'lucide-react'

const NAV_ITEMS = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/record', label: 'Record', icon: PlusCircle },
  { href: '/challenges', label: 'Challenges', icon: Trophy },
  { href: '/community', label: 'Community', icon: Users },
  { href: '/karma', label: 'My Karma', icon: User },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
      <div className="max-w-[430px] mx-auto flex items-center justify-around h-16 px-1">
        {NAV_ITEMS.map(item => {
          const isActive = pathname === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center gap-0.5 min-w-[56px] min-h-[44px] rounded-lg transition-colors"
              style={{
                color: isActive ? '#0F6E56' : '#6B7280',
              }}
            >
              <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
