import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Users } from 'lucide-react'

export default function MyCommunityTile() {
  return (
    <Link href="/community">
      <Card className="border-0 shadow-sm h-full hover:shadow-md transition-shadow cursor-pointer">
        <CardContent className="p-3 flex flex-col items-center justify-center h-full gap-1.5">
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EEEDFE' }}>
            <Users className="w-5 h-5" style={{ color: '#534AB7' }} />
          </div>
          <p className="text-xs font-semibold text-[#111827]">Community</p>
          <p className="text-[10px] text-[#6B7280] text-center">RWAs, NGOs & events near you</p>
        </CardContent>
      </Card>
    </Link>
  )
}
