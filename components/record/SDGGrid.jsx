'use client'
import { SDG_META, getActionCountForSDG } from '@/lib/sdg-meta'
import { SDG_ACTIONS } from '@/lib/data/actions'

export default function SDGGrid({ selectedSDG, onSelectSDG }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {SDG_META.map(sdg => {
        const count = getActionCountForSDG(SDG_ACTIONS, sdg.number)
        const isSelected = selectedSDG === sdg.number

        return (
          <button
            key={sdg.number}
            onClick={() => onSelectSDG(isSelected ? null : sdg.number)}
            className="rounded-lg p-2.5 text-left transition-all min-h-[44px]"
            style={{
              backgroundColor: isSelected ? sdg.color : sdg.color + '18',
              color: isSelected ? 'white' : sdg.color,
              border: isSelected ? `2px solid ${sdg.color}` : '2px solid transparent',
            }}
          >
            <div className="flex items-center gap-1 mb-0.5">
              <span className="text-sm font-bold">{sdg.number}</span>
              <span className="text-xs">{sdg.emoji}</span>
            </div>
            <p className="text-[10px] font-medium leading-tight">{sdg.short}</p>
            <p className="text-[9px] mt-0.5 opacity-80">{count} actions</p>
          </button>
        )
      })}
    </div>
  )
}
