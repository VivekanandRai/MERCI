'use client'
import { useState } from 'react'
import PageShell from '@/components/layout/PageShell'
import SDGGrid from '@/components/record/SDGGrid'
import SDGActionList from '@/components/record/SDGActionList'
import ActionLogModal from '@/components/record/ActionLogModal'
import { SDG_ACTIONS } from '@/lib/data/actions'
import { Badge } from '@/components/ui/badge'
import { Globe } from 'lucide-react'

export default function RecordPage() {
  const [selectedSDG, setSelectedSDG] = useState(null)
  const [modalAction, setModalAction] = useState(null)

  const filteredActions = selectedSDG
    ? SDG_ACTIONS.filter(a => a.sdg === selectedSDG)
    : SDG_ACTIONS

  return (
    <PageShell>
      <div className="px-3 pt-4 pb-2">
        <h1 className="text-xl font-bold text-[#111827] mb-1">Record karma</h1>
        <p className="text-sm text-[#374151] mb-3">
          Your actions are mapped to the UN's 17 Sustainable Development Goals
        </p>
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="outline" className="text-[10px] gap-1 border-[#378ADD] text-[#378ADD]">
            <Globe className="w-3 h-3" />
            Powered by ActNow framework
          </Badge>
        </div>

        <SDGGrid selectedSDG={selectedSDG} onSelectSDG={setSelectedSDG} />
      </div>

      <div className="px-3 pt-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-semibold text-[#111827]">
            {selectedSDG ? `SDG ${selectedSDG} Actions` : 'All Actions'}
          </h2>
          <span className="text-xs text-[#6B7280]">{filteredActions.length} actions</span>
        </div>

        <SDGActionList
          actions={filteredActions}
          onLogAction={setModalAction}
        />
      </div>

      <ActionLogModal
        action={modalAction}
        open={!!modalAction}
        onClose={() => setModalAction(null)}
      />
    </PageShell>
  )
}
