'use client'
import { useState } from 'react'
import PageShell from '@/components/layout/PageShell'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { COMMUNITY_RESOURCES } from '@/lib/data/community'
import { MapPin, Calendar, Phone, Mail } from 'lucide-react'

const TYPE_CONFIG = {
  rwa: { label: 'RWA', bg: '#E1F5EE', text: '#0F6E56' },
  ngo: { label: 'NGO', bg: '#EEEDFE', text: '#534AB7' },
  health_camp: { label: 'Health Camp', bg: '#E6F1FB', text: '#378ADD' },
  event: { label: 'Event', bg: '#FAEEDA', text: '#BA7517' },
}

function ResourceCard({ resource }) {
  const type = TYPE_CONFIG[resource.type] || TYPE_CONFIG.ngo

  return (
    <Card className="border-0 shadow-sm">
      <CardContent className="p-3.5">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="text-sm font-semibold text-[#111827] leading-tight">{resource.name}</h3>
          <Badge className="text-[10px] shrink-0 px-1.5 py-0.5" style={{ backgroundColor: type.bg, color: type.text }}>
            {type.label}
          </Badge>
        </div>

        <div className="flex items-center gap-1 mb-2">
          <MapPin className="w-3 h-3 text-[#6B7280]" />
          <span className="text-[11px] text-[#6B7280]">{resource.ward}</span>
          {resource.event_date && (
            <>
              <span className="text-[#6B7280]">·</span>
              <Calendar className="w-3 h-3 text-[#6B7280]" />
              <span className="text-[11px] text-[#6B7280]">
                {new Date(resource.event_date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
              </span>
            </>
          )}
        </div>

        <p className="text-xs text-[#374151] mb-3 leading-relaxed">{resource.description}</p>

        {resource.contact && (
          <Button
            variant="outline"
            size="sm"
            className="text-xs h-8 gap-1.5"
            style={{ borderColor: type.text, color: type.text }}
          >
            {resource.contact.includes('@') ? (
              <><Mail className="w-3 h-3" /> Email</>
            ) : (
              <><Phone className="w-3 h-3" /> Contact</>
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

export default function CommunityPage() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all'
    ? COMMUNITY_RESOURCES
    : COMMUNITY_RESOURCES.filter(r => r.type === filter)

  return (
    <PageShell>
      <div className="px-3 pt-4 pb-2">
        <h1 className="text-xl font-bold text-[#111827] mb-1">Community</h1>
        <p className="text-sm text-[#374151] mb-3">
          Local organisations, events, and resources in South Delhi
        </p>

        <Tabs defaultValue="all" onValueChange={setFilter}>
          <TabsList className="w-full mb-3">
            <TabsTrigger value="all" className="flex-1 text-[11px]">All</TabsTrigger>
            <TabsTrigger value="rwa" className="flex-1 text-[11px]">RWA</TabsTrigger>
            <TabsTrigger value="ngo" className="flex-1 text-[11px]">NGO</TabsTrigger>
            <TabsTrigger value="health_camp" className="flex-1 text-[11px]">Health</TabsTrigger>
            <TabsTrigger value="event" className="flex-1 text-[11px]">Event</TabsTrigger>
          </TabsList>

          <div className="space-y-2">
            {filtered.map(r => (
              <ResourceCard key={r.id} resource={r} />
            ))}
          </div>
        </Tabs>
      </div>
    </PageShell>
  )
}
