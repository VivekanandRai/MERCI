'use client'
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SDG_META } from '@/lib/sdg-meta'
import { VERIFY_LABELS } from '@/lib/points'
import { useKarma } from '@/lib/hooks/useKarma'
import { CheckCircle2, Upload } from 'lucide-react'

const VERIFY_INSTRUCTIONS = {
  photo: "Upload a photo as evidence of this action.",
  photo_geo: "Upload a geotagged photo showing the location and action.",
  photo_series: "Upload a series of photos over time showing progress.",
  peer: "Ask a peer to verify this action. Enter their name below.",
  certificate: "Upload a certificate or official document as proof.",
  self: "Declare that you have completed this action honestly.",
  qr: "Scan a QR code at the event venue.",
  qr_or_photo: "Scan a QR code or upload a photo from the event.",
  screenshot: "Upload a screenshot of your submission or report.",
  referral: "Share your referral link. We will verify when they join.",
}

export default function ActionLogModal({ action, open, onClose }) {
  const { logAction } = useKarma()
  const [submitted, setSubmitted] = useState(false)
  const [note, setNote] = useState('')

  if (!action) return null

  const sdgMeta = SDG_META.find(s => s.number === action.sdg)
  const needsFile = ['photo', 'photo_geo', 'photo_series', 'certificate', 'screenshot'].includes(action.verify)

  const handleSubmit = () => {
    logAction(action)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setNote('')
      onClose()
    }, 1500)
  }

  const handleOpenChange = (isOpen) => {
    if (!isOpen) {
      setSubmitted(false)
      setNote('')
      onClose()
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-[#111827] text-base leading-tight pr-6">
            {action.title}
          </DialogTitle>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col items-center py-6 gap-3">
            <CheckCircle2 className="w-12 h-12" style={{ color: '#0F6E56' }} />
            <p className="text-sm font-semibold" style={{ color: '#0F6E56' }}>Action logged!</p>
            <p className="text-xs text-[#6B7280]">+{action.points} karma points earned</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge style={{ backgroundColor: sdgMeta?.color || '#6B7280', color: 'white' }} className="text-xs">
                SDG {action.sdg}
              </Badge>
              <Badge style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }} className="text-xs">
                +{action.points} points
              </Badge>
            </div>

            <div className="rounded-lg p-3" style={{ backgroundColor: '#F9FAFB' }}>
              <p className="text-xs font-medium text-[#374151] mb-1">Verification method</p>
              <p className="text-xs text-[#6B7280]">{VERIFY_LABELS[action.verify]}</p>
              <p className="text-xs text-[#6B7280] mt-1">
                {VERIFY_INSTRUCTIONS[action.verify]}
              </p>
            </div>

            {needsFile && (
              <div className="border-2 border-dashed rounded-lg p-4 text-center" style={{ borderColor: 'rgba(0,0,0,0.12)' }}>
                <Upload className="w-6 h-6 mx-auto mb-1.5 text-[#6B7280]" />
                <p className="text-xs text-[#6B7280]">Tap to upload evidence</p>
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  style={{ position: 'relative', width: '100%', marginTop: 8 }}
                />
              </div>
            )}

            {(action.verify === 'peer' || action.verify === 'self') && (
              <textarea
                value={note}
                onChange={e => setNote(e.target.value)}
                placeholder={action.verify === 'peer' ? "Enter your peer's name and contact..." : "Add any notes about this action..."}
                className="w-full rounded-lg border p-2.5 text-sm text-[#111827] placeholder-[#9CA3AF] min-h-[80px] resize-none"
                style={{ borderColor: 'rgba(0,0,0,0.12)' }}
              />
            )}

            <Button
              className="w-full text-sm h-11"
              style={{ backgroundColor: '#0F6E56' }}
              onClick={handleSubmit}
            >
              Submit for verification
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
