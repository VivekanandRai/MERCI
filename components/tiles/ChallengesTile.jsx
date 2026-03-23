'use client'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CHALLENGES } from '@/lib/data/challenges'
import { ChevronRight, Clock } from 'lucide-react'

const PILLAR_COLORS = {
  environment: { bg: '#E1F5EE', text: '#0F6E56', bar: '#0F6E56' },
  water: { bg: '#EEEDFE', text: '#534AB7', bar: '#534AB7' },
  infrastructure: { bg: '#FAEEDA', text: '#BA7517', bar: '#BA7517' },
}

const STATUS_STYLES = {
  urgent: { bg: '#FAECE7', text: '#D85A30', label: 'Urgent' },
  active: { bg: '#E1F5EE', text: '#0F6E56', label: 'Active' },
  new: { bg: '#E6F1FB', text: '#378ADD', label: 'New' },
}

function getDaysLeft(deadline) {
  const diff = new Date(deadline) - new Date()
  return Math.max(0, Math.ceil(diff / 86400000))
}

export default function ChallengesTile() {
  return (
    <Card className="mx-3 mt-2 border-0 shadow-sm">
      <CardContent className="p-3">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-[#111827]">Active Challenges</h3>
          <Link href="/challenges" className="text-xs text-[#0F6E56] flex items-center gap-0.5">
            View all <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="space-y-2">
          {CHALLENGES.slice(0, 2).map(c => {
            const pillar = PILLAR_COLORS[c.sdg_pillar] || PILLAR_COLORS.environment
            const status = STATUS_STYLES[c.status] || STATUS_STYLES.active
            const progress = Math.round((c.current / c.required) * 100)
            const daysLeft = getDaysLeft(c.deadline)

            return (
              <div key={c.id} className="rounded-lg p-2.5 border" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h4 className="text-xs font-semibold text-[#111827] leading-tight">{c.title}</h4>
                  <Badge className="text-[10px] shrink-0 px-1.5 py-0.5" style={{ backgroundColor: status.bg, color: status.text }}>
                    {status.label}
                  </Badge>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-1.5">
                  <div className="h-full rounded-full" style={{ width: `${progress}%`, backgroundColor: pillar.bar }} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[#6B7280]">{c.current}/{c.required} contributors</span>
                  <span className="text-[10px] text-[#6B7280] flex items-center gap-0.5">
                    <Clock className="w-2.5 h-2.5" /> {daysLeft}d left
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
