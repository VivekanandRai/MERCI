import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { PlusCircle } from 'lucide-react'

export default function RecordKarmaTile() {
  return (
    <Link href="/record">
      <Card className="border-0 shadow-sm h-full hover:shadow-md transition-shadow cursor-pointer">
        <CardContent className="p-3 flex flex-col items-center justify-center h-full gap-1.5">
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E1F5EE' }}>
            <PlusCircle className="w-5 h-5" style={{ color: '#0F6E56' }} />
          </div>
          <p className="text-xs font-semibold text-[#111827]">Record Karma</p>
          <p className="text-[10px] text-[#6B7280] text-center">Log an SDG action</p>
        </CardContent>
      </Card>
    </Link>
  )
}
