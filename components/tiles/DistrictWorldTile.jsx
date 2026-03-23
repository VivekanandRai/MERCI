'use client'
import { Info, Wind, Leaf } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import DistrictSVG from '@/components/world/DistrictSVG'
import { SOUTH_DELHI } from '@/lib/data/district'

const PILLAR_CONFIG = [
  { key: 'health', label: 'Health', icon: '🏥', color: '#0F6E56' },
  { key: 'education', label: 'Education', icon: '📚', color: '#378ADD' },
  { key: 'environment', label: 'Environment', icon: '🌿', color: '#4C9F38' },
  { key: 'water', label: 'Water & Sanitation', icon: '💧', color: '#534AB7' },
  { key: 'infrastructure', label: 'Infrastructure', icon: '🏗️', color: '#BA7517' },
  { key: 'economic', label: 'Economic Inclusion', icon: '💼', color: '#D85A30' },
]

const SEASON_LABELS = {
  winter: 'Winter',
  spring: 'Spring',
  summer: 'Summer',
  monsoon: 'Monsoon',
}

export default function DistrictWorldTile() {
  const district = SOUTH_DELHI
  const avgScore = Math.round(
    Object.values(district.scores).reduce((a, b) => a + b, 0) / Object.keys(district.scores).length
  )

  return (
    <Card className="mx-3 mt-3 overflow-hidden border-0 shadow-sm">
      <CardContent className="p-0">
        <div className="rounded-t-lg overflow-hidden">
          <DistrictSVG scores={district.scores} season={district.season} aqi={district.aqi} />
        </div>

        <div className="flex items-center gap-2 px-3 pt-2.5">
          <Badge variant="outline" className="text-xs gap-1 border-[#BA7517] text-[#BA7517]">
            <Wind className="w-3 h-3" />
            AQI {district.aqi}
          </Badge>
          <Badge variant="outline" className="text-xs gap-1 border-[#378ADD] text-[#378ADD]">
            <Leaf className="w-3 h-3" />
            {SEASON_LABELS[district.season]}
          </Badge>
          <Badge variant="outline" className="text-xs gap-1 border-[#0F6E56] text-[#0F6E56]">
            {district.activeCitizens} active
          </Badge>
        </div>

        <div className="px-3 pt-3 pb-1">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-[#111827]">District Score</h3>
              <span className="text-lg font-bold" style={{ color: '#0F6E56' }}>{avgScore}</span>
            </div>
            <Dialog>
              <DialogTrigger className="flex items-center gap-1 text-xs text-[#6B7280] hover:text-[#0F6E56] transition-colors min-h-[44px] min-w-[44px] justify-center cursor-pointer">
                  <Info className="w-4 h-4" />
              </DialogTrigger>
              <DialogContent className="max-w-[400px] max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-[#111827]">How District Scores Are Calculated</DialogTitle>
                </DialogHeader>
                <p className="text-sm text-[#374151] mb-3">
                  Each pillar score (0–100) is a weighted composite of real Indian government indicators. For the South Delhi pilot, these are hardcoded baseline values derived from official data sources.
                </p>
                <div className="space-y-3">
                  {PILLAR_CONFIG.map(p => (
                    <div key={p.key} className="rounded-lg p-3" style={{ backgroundColor: p.color + '10' }}>
                      <div className="flex items-center gap-2 mb-1">
                        <span>{p.icon}</span>
                        <span className="font-semibold text-sm" style={{ color: p.color }}>{p.label}</span>
                        <span className="ml-auto font-bold text-sm" style={{ color: p.color }}>{district.scores[p.key]}/100</span>
                      </div>
                      <p className="text-xs text-[#374151] leading-relaxed">
                        {district.scoreMethodology[p.key]}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#6B7280] mt-3">
                  Rank #{district.rank} of {district.totalDistricts} districts nationally.
                </p>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-2 pb-3">
            {PILLAR_CONFIG.map(p => (
              <div key={p.key} className="flex items-center gap-2">
                <span className="text-xs w-5 text-center">{p.icon}</span>
                <span className="text-xs text-[#374151] w-24 truncate">{p.label}</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${district.scores[p.key]}%`,
                      backgroundColor: p.color,
                    }}
                  />
                </div>
                <span className="text-xs font-semibold w-7 text-right" style={{ color: p.color }}>
                  {district.scores[p.key]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
