'use client'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SDG_META } from '@/lib/sdg-meta'
import { VERIFY_LABELS } from '@/lib/points'
import { Camera, Users, FileCheck, CheckCircle, QrCode, Smartphone, Link as LinkIcon } from 'lucide-react'

const VERIFY_ICONS = {
  photo: Camera,
  photo_geo: Camera,
  photo_series: Camera,
  peer: Users,
  certificate: FileCheck,
  self: CheckCircle,
  qr: QrCode,
  qr_or_photo: QrCode,
  screenshot: Smartphone,
  referral: LinkIcon,
}

export default function SDGActionList({ actions, onLogAction }) {
  if (actions.length === 0) {
    return (
      <p className="text-sm text-[#6B7280] text-center py-8">
        Select an SDG above to see available actions.
      </p>
    )
  }

  return (
    <div className="space-y-2">
      {actions.map(action => {
        const sdgMeta = SDG_META.find(s => s.number === action.sdg)
        const VerifyIcon = VERIFY_ICONS[action.verify] || CheckCircle

        return (
          <div
            key={action.id}
            className="rounded-lg border p-3"
            style={{ borderColor: 'rgba(0,0,0,0.08)' }}
          >
            <div className="flex items-start gap-2 mb-2">
              <Badge
                className="shrink-0 text-[10px] px-1.5 py-0.5 mt-0.5"
                style={{ backgroundColor: sdgMeta?.color || '#6B7280', color: 'white' }}
              >
                SDG {action.sdg}
              </Badge>
              <p className="text-sm text-[#111827] font-medium leading-tight flex-1">
                {action.title}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge className="text-[10px] px-1.5 py-0.5" style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>
                  +{action.points} pts
                </Badge>
                <span className="flex items-center gap-1 text-[10px] text-[#6B7280]">
                  <VerifyIcon className="w-3 h-3" />
                  {VERIFY_LABELS[action.verify] || action.verify}
                </span>
              </div>
              <Button
                size="sm"
                className="text-xs h-8 px-3"
                style={{ backgroundColor: '#0F6E56' }}
                onClick={() => onLogAction(action)}
              >
                Log this
              </Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
