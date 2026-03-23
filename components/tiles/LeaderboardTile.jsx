'use client'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LEADERBOARD } from '@/lib/data/leaderboard'
import { ChevronRight, Crown } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const RANK_COLORS = {
  1: '#FCC30B',
  2: '#9CA3AF',
  3: '#D97706',
}

const ROLE_LABELS = {
  teacher: 'Teacher',
  builder: 'Builder',
  healer: 'Healer',
  green_guardian: 'Green Guardian',
}

export default function LeaderboardTile() {
  const top3 = LEADERBOARD.filter(u => u.rank <= 3)
  const currentUser = LEADERBOARD.find(u => u.isCurrentUser)

  return (
    <Card className="mx-3 mt-2 border-0 shadow-sm">
      <CardContent className="p-3">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-[#111827]">Leaderboard</h3>
          <Link href="/leaderboard" className="text-xs text-[#0F6E56] flex items-center gap-0.5">
            View all <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="space-y-1.5">
          {top3.map(user => (
            <div key={user.rank} className="flex items-center gap-2 py-1">
              <div className="w-5 flex justify-center">
                {user.rank <= 3 ? (
                  <Crown className="w-4 h-4" style={{ color: RANK_COLORS[user.rank] }} />
                ) : (
                  <span className="text-xs text-[#6B7280]">#{user.rank}</span>
                )}
              </div>
              <Avatar className="w-7 h-7">
                <AvatarFallback className="text-[10px] bg-gray-100 text-[#374151]">
                  {user.handle.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-[#111827] truncate">{user.handle}</p>
                <p className="text-[10px] text-[#6B7280]">{ROLE_LABELS[user.role] || user.role}</p>
              </div>
              <span className="text-xs font-bold" style={{ color: '#0F6E56' }}>{user.points}</span>
            </div>
          ))}

          {currentUser && (
            <>
              <div className="border-t my-1" style={{ borderColor: 'rgba(0,0,0,0.06)' }} />
              <div className="flex items-center gap-2 py-1 px-1.5 rounded-lg" style={{ backgroundColor: '#E1F5EE' }}>
                <span className="text-xs text-[#0F6E56] font-medium w-5 text-center">#{currentUser.rank}</span>
                <Avatar className="w-7 h-7">
                  <AvatarFallback className="text-[10px] bg-[#0F6E56] text-white">
                    GG
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <p className="text-xs font-medium text-[#0F6E56] truncate">{currentUser.handle}</p>
                    <Badge className="text-[8px] px-1 py-0" style={{ backgroundColor: '#0F6E56', color: 'white' }}>you</Badge>
                  </div>
                  <p className="text-[10px] text-[#374151]">{ROLE_LABELS[currentUser.role]}</p>
                </div>
                <span className="text-xs font-bold" style={{ color: '#0F6E56' }}>{currentUser.points}</span>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
