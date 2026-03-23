import PageShell from '@/components/layout/PageShell'
import DistrictWorldTile from '@/components/tiles/DistrictWorldTile'
import MyKarmaTile from '@/components/tiles/MyKarmaTile'
import ChallengesTile from '@/components/tiles/ChallengesTile'
import LeaderboardTile from '@/components/tiles/LeaderboardTile'
import MyCommunityTile from '@/components/tiles/MyCommunityTile'
import RecordKarmaTile from '@/components/tiles/RecordKarmaTile'

export default function HomePage() {
  return (
    <PageShell>
      <DistrictWorldTile />
      <MyKarmaTile />
      <div className="grid grid-cols-2 gap-2 px-3 mt-2">
        <MyCommunityTile />
        <RecordKarmaTile />
      </div>
      <ChallengesTile />
      <LeaderboardTile />
    </PageShell>
  )
}
