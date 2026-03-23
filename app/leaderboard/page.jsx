'use client'
import { useState } from 'react'
import PageShell from '@/components/layout/PageShell'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LEADERBOARD } from '@/lib/data/leaderboard'
import { Crown } from 'lucide-react'

const RANK_COLORS = { 1: '#FCC30B', 2: '#9CA3AF', 3: '#D97706' }

const ROLE_LABELS = {
  teacher: 'Teacher',
  builder: 'Builder',
  healer: 'Healer',
  green_guardian: 'Green Guardian',
}

const PILLAR_BAR_CONFIG = [
  { key: 'health', color: '#0F6E56', label: 'H' },
  { key: 'education', color: '#378ADD', label: 'Ed' },
  { key: 'environment', color: '#4C9F38', label: 'En' },
  { key: 'water', color: '#534AB7', label: 'W' },
  { key: 'infrastructure', color: '#BA7517', label: 'I' },
]

function PillarBars({ breakdown, total }) {
  return (
    <div className="flex gap-0.5 h-3 w-24 rounded overflow-hidden">
      {PILLAR_BAR_CONFIG.map(p => {
        const val = breakdown[p.key] || 0
        const pct = total > 0 ? (val / total) * 100 : 0
        return pct > 0 ? (
          <div
            key={p.key}
            className="h-full"
            style={{ width: `${pct}%`, backgroundColor: p.color }}
            title={`${p.label}: ${val}`}
          />
        ) : null
      })}
    </div>
  )
}

function LeaderboardList({ data }) {
  return (
    <div className="space-y-1">
      {data.map(user => {
        const isTop3 = user.rank <= 3
        const isCurrent = user.isCurrentUser

        return (
          <div
            key={user.rank}
            className="flex items-center gap-2.5 py-2 px-2.5 rounded-lg"
            style={{
              backgroundColor: isCurrent ? '#E1F5EE' : isTop3 ? '#FAFAFA' : 'transparent',
            }}
          >
            <div className="w-6 flex justify-center shrink-0">
              {isTop3 ? (
                <Crown className="w-4 h-4" style={{ color: RANK_COLORS[user.rank] }} />
              ) : (
                <span className="text-xs text-[#6B7280] font-medium">#{user.rank}</span>
              )}
            </div>
            <Avatar className="w-8 h-8 shrink-0">
              <AvatarFallback
                className="text-[10px]"
                style={{
                  backgroundColor: isCurrent ? '#0F6E56' : '#F3F4F6',
                  color: isCurrent ? 'white' : '#374151',
                }}
              >
                {user.handle.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <p className="text-xs font-medium text-[#111827] truncate">{user.handle}</p>
                {isCurrent && (
                  <Badge className="text-[8px] px-1 py-0" style={{ backgroundColor: '#0F6E56', color: 'white' }}>you</Badge>
                )}
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <Badge variant="outline" className="text-[9px] px-1 py-0 h-4">
                  {ROLE_LABELS[user.role] || user.role}
                </Badge>
                <PillarBars breakdown={user.pillar_breakdown} total={user.points} />
              </div>
            </div>
            <span className="text-sm font-bold shrink-0" style={{ color: '#0F6E56' }}>{user.points}</span>
          </div>
        )
      })}
    </div>
  )
}

export default function LeaderboardPage() {
  return (
    <PageShell>
      <div className="px-3 pt-4 pb-2">
        <h1 className="text-xl font-bold text-[#111827] mb-1">Leaderboard</h1>
        <p className="text-sm text-[#374151] mb-3">South Delhi district rankings</p>

        <Tabs defaultValue="all">
          <TabsList className="w-full mb-3">
            <TabsTrigger value="all" className="flex-1 text-xs">All time</TabsTrigger>
            <TabsTrigger value="month" className="flex-1 text-xs">This month</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-2">
                <LeaderboardList data={LEADERBOARD} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="month">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-2">
                <LeaderboardList data={LEADERBOARD.map(u => ({ ...u, points: Math.round(u.points * 0.3) }))} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-3 flex items-center justify-center gap-1.5 flex-wrap">
          {PILLAR_BAR_CONFIG.map(p => (
            <span key={p.key} className="flex items-center gap-1 text-[10px] text-[#6B7280]">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
              {p.label === 'H' ? 'Health' : p.label === 'Ed' ? 'Education' : p.label === 'En' ? 'Environment' : p.label === 'W' ? 'Water' : 'Infrastructure'}
            </span>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
