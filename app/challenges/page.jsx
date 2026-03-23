'use client'
import { useState } from 'react'
import PageShell from '@/components/layout/PageShell'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CHALLENGES } from '@/lib/data/challenges'
import { SDG_ACTIONS } from '@/lib/data/actions'
import ActionLogModal from '@/components/record/ActionLogModal'
import { Clock, Users, Target } from 'lucide-react'

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

export default function ChallengesPage() {
  const [modalAction, setModalAction] = useState(null)

  const handleContribute = (challenge) => {
    const relatedAction = SDG_ACTIONS.find(a => a.sdg === challenge.sdg_number)
    if (relatedAction) setModalAction(relatedAction)
  }

  return (
    <PageShell>
      <div className="px-3 pt-4 pb-2">
        <h1 className="text-xl font-bold text-[#111827] mb-1">Active Challenges</h1>
        <p className="text-sm text-[#374151] mb-4">
          Join district-wide efforts to improve South Delhi's SDG scores
        </p>

        <div className="space-y-3">
          {CHALLENGES.map(c => {
            const pillar = PILLAR_COLORS[c.sdg_pillar] || PILLAR_COLORS.environment
            const status = STATUS_STYLES[c.status] || STATUS_STYLES.active
            const progress = Math.round((c.current / c.required) * 100)
            const daysLeft = getDaysLeft(c.deadline)

            return (
              <Card key={c.id} className="border-0 shadow-sm overflow-hidden">
                <div className="h-1.5" style={{ backgroundColor: pillar.bar }} />
                <CardContent className="p-3.5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-sm font-bold text-[#111827] leading-tight">{c.title}</h3>
                    <Badge className="text-[10px] shrink-0 px-1.5 py-0.5" style={{ backgroundColor: status.bg, color: status.text }}>
                      {status.label}
                    </Badge>
                  </div>

                  <p className="text-xs text-[#374151] mb-3 leading-relaxed">{c.description}</p>

                  <div className="mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] text-[#6B7280] flex items-center gap-1">
                        <Users className="w-3 h-3" /> {c.current}/{c.required} contributors
                      </span>
                      <span className="text-[10px] font-semibold" style={{ color: pillar.text }}>{progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all" style={{ width: `${progress}%`, backgroundColor: pillar.bar }} />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-[#6B7280] flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {daysLeft} days left
                      </span>
                      <span className="text-[10px] text-[#6B7280] flex items-center gap-1">
                        <Target className="w-3 h-3" /> SDG {c.sdg_number}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      className="text-xs h-8 px-3"
                      style={{ backgroundColor: pillar.bar }}
                      onClick={() => handleContribute(c)}
                    >
                      Contribute
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <ActionLogModal
        action={modalAction}
        open={!!modalAction}
        onClose={() => setModalAction(null)}
      />
    </PageShell>
  )
}
