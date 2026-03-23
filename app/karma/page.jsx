'use client'
import PageShell from '@/components/layout/PageShell'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { useKarma } from '@/lib/hooks/useKarma'
import { SDG_META } from '@/lib/sdg-meta'
import { PILLAR_LABELS, PILLAR_COLORS } from '@/lib/points'
import { Star, Clock, CheckCircle, Inbox } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

function PillarMiniChart({ pillarPoints }) {
  const maxVal = Math.max(...Object.values(pillarPoints), 1)

  return (
    <div className="flex items-end gap-1 h-12">
      {Object.entries(pillarPoints).map(([key, val]) => {
        const colors = PILLAR_COLORS[key]
        const height = maxVal > 0 ? (val / maxVal) * 100 : 0
        return (
          <div key={key} className="flex flex-col items-center gap-0.5 flex-1">
            <div
              className="w-full rounded-t"
              style={{
                height: `${Math.max(height, 4)}%`,
                backgroundColor: val > 0 ? colors.bar : '#E5E7EB',
                minHeight: 2,
              }}
            />
            <span className="text-[8px] text-[#6B7280] truncate w-full text-center">
              {PILLAR_LABELS[key]?.slice(0, 3)}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default function KarmaPage() {
  const { karma, getPointsByPillar } = useKarma()
  const pillarPoints = getPointsByPillar()

  return (
    <PageShell>
      <div className="px-3 pt-4 pb-2">
        <h1 className="text-xl font-bold text-[#111827] mb-1">My Karma</h1>
        <p className="text-sm text-[#374151] mb-3">Your civic action timeline</p>

        <Card className="border-0 shadow-sm mb-3">
          <CardContent className="p-3">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4" style={{ color: '#0F6E56' }} />
                <span className="text-lg font-bold" style={{ color: '#0F6E56' }}>{karma.totalPoints}</span>
                <span className="text-xs text-[#6B7280]">points</span>
              </div>
              <Separator orientation="vertical" className="h-5" />
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold text-[#111827]">{karma.actionsCount}</span>
                <span className="text-xs text-[#6B7280]">actions</span>
              </div>
            </div>
            <PillarMiniChart pillarPoints={pillarPoints} />
          </CardContent>
        </Card>

        {karma.loggedActions.length === 0 ? (
          <div className="flex flex-col items-center py-12 gap-3">
            <Inbox className="w-12 h-12 text-[#D1D5DB]" />
            <p className="text-sm text-[#6B7280] text-center">
              You haven't logged any actions yet.
            </p>
            <Link href="/record">
              <Button size="sm" style={{ backgroundColor: '#0F6E56' }} className="text-xs">
                Start with Record Karma
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-2">
            {karma.loggedActions.map(entry => {
              const sdgMeta = SDG_META.find(s => s.number === entry.sdg)
              const date = new Date(entry.date)
              const formattedDate = date.toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })
              const formattedTime = date.toLocaleTimeString('en-IN', {
                hour: '2-digit',
                minute: '2-digit',
              })

              return (
                <Card key={entry.id} className="border-0 shadow-sm">
                  <CardContent className="p-3">
                    <div className="flex items-start gap-2">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: sdgMeta?.color || '#6B7280' }}
                      >
                        <span className="text-white text-xs font-bold">{entry.sdg}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-[#111827] leading-tight mb-1">
                          {entry.title}
                        </p>
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge className="text-[10px] px-1.5 py-0.5" style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>
                            +{entry.points} pts
                          </Badge>
                          <Badge className="text-[10px] px-1.5 py-0.5" style={{ backgroundColor: sdgMeta?.color + '20' || '#F3F4F6', color: sdgMeta?.color || '#6B7280' }}>
                            SDG {entry.sdg}
                          </Badge>
                          <span className="flex items-center gap-0.5 text-[10px] text-[#0F6E56]">
                            <CheckCircle className="w-3 h-3" />
                            {entry.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 mt-1.5">
                          <Clock className="w-3 h-3 text-[#9CA3AF]" />
                          <span className="text-[10px] text-[#9CA3AF]">{formattedDate}, {formattedTime}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}
      </div>
    </PageShell>
  )
}
