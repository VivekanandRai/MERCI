'use client'
import { Card, CardContent } from '@/components/ui/card'
import { useKarma } from '@/lib/hooks/useKarma'
import { Star, Zap, TrendingUp } from 'lucide-react'

const HEATMAP_COLORS = ['#F3F4F6', '#9FE1CB', '#5DCAA5', '#1D9E75', '#0F6E56']

export default function MyKarmaTile() {
  const { karma, getHeatmapData } = useKarma()
  const heatmap = getHeatmapData()

  return (
    <Card className="mx-3 mt-2 border-0 shadow-sm">
      <CardContent className="p-3">
        <h3 className="text-sm font-semibold text-[#111827] mb-2">My Karma</h3>

        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="rounded-lg p-2.5 text-center" style={{ backgroundColor: '#E1F5EE' }}>
            <Star className="w-4 h-4 mx-auto mb-1" style={{ color: '#0F6E56' }} />
            <p className="text-lg font-bold" style={{ color: '#0F6E56' }}>{karma.totalPoints}</p>
            <p className="text-[10px] text-[#374151]">Total Points</p>
          </div>
          <div className="rounded-lg p-2.5 text-center" style={{ backgroundColor: '#E6F1FB' }}>
            <Zap className="w-4 h-4 mx-auto mb-1" style={{ color: '#378ADD' }} />
            <p className="text-lg font-bold" style={{ color: '#378ADD' }}>{karma.actionsCount}</p>
            <p className="text-[10px] text-[#374151]">Actions</p>
          </div>
          <div className="rounded-lg p-2.5 text-center" style={{ backgroundColor: '#EEEDFE' }}>
            <TrendingUp className="w-4 h-4 mx-auto mb-1" style={{ color: '#534AB7' }} />
            <p className="text-lg font-bold" style={{ color: '#534AB7' }}>#14</p>
            <p className="text-[10px] text-[#374151]">Rank</p>
          </div>
        </div>

        <div>
          <p className="text-[10px] text-[#6B7280] mb-1.5">Last 6 months</p>
          <div
            className="grid gap-[2px]"
            style={{
              gridTemplateColumns: 'repeat(26, 1fr)',
              gridTemplateRows: 'repeat(7, 1fr)',
            }}
          >
            {heatmap.map((level, i) => (
              <div
                key={i}
                className="aspect-square rounded-[2px]"
                style={{ backgroundColor: HEATMAP_COLORS[level] }}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
