'use client'

const SEASON_SKY = {
  winter: '#8090a0',
  spring: '#a8d8ea',
  summer: '#87ceeb',
  monsoon: '#607080',
}

const SEASON_SUN = {
  winter: { type: 'cloud', color: '#b0b8c0' },
  spring: { type: 'sun', color: '#FCC30B' },
  summer: { type: 'sun', color: '#FFA500' },
  monsoon: { type: 'cloud', color: '#707880' },
}

export default function DistrictSVG({ scores = {}, season = 'winter', aqi = 178 }) {
  const buildingCount = 6 + Math.floor((scores.infrastructure || 49) / 20)
  const treeCount = Math.floor((scores.environment || 38) / 15)
  const hazeOpacity = Math.min(aqi / 500, 0.6)
  const skyColor = SEASON_SKY[season] || SEASON_SKY.winter
  const sunConfig = SEASON_SUN[season] || SEASON_SUN.winter

  const buildings = []
  const buildingColors = ['#374151', '#4B5563', '#6B7280', '#3B4F63', '#455A6E', '#52677A', '#3D5467', '#4A6175']
  for (let i = 0; i < buildingCount; i++) {
    const x = 20 + i * (360 / buildingCount)
    const w = 28 + (i % 3) * 6
    const h = 30 + ((scores.infrastructure || 49) / 100) * 40 + (i % 4) * 12
    const color = buildingColors[i % buildingColors.length]
    buildings.push(
      <g key={`b-${i}`}>
        <rect x={x} y={120 - h} width={w} height={h} fill={color} rx={2} />
        {/* Windows */}
        {Array.from({ length: Math.floor(h / 14) }).map((_, wi) => (
          <g key={`w-${i}-${wi}`}>
            <rect x={x + 4} y={120 - h + 5 + wi * 14} width={5} height={6} fill="#FCC30B" opacity={0.7} rx={0.5} />
            <rect x={x + w - 9} y={120 - h + 5 + wi * 14} width={5} height={6} fill="#FCC30B" opacity={0.6} rx={0.5} />
          </g>
        ))}
      </g>
    )
  }

  const trees = []
  for (let i = 0; i < treeCount; i++) {
    const x = 35 + i * (350 / Math.max(treeCount, 1))
    trees.push(
      <g key={`t-${i}`}>
        <rect x={x - 1.5} y={100} width={3} height={20} fill="#8B6914" />
        <circle cx={x} cy={95} r={10} fill="#4C9F38" opacity={0.85} />
        <circle cx={x - 5} cy={98} r={7} fill="#56C02B" opacity={0.7} />
        <circle cx={x + 5} cy={99} r={6} fill="#3F7E44" opacity={0.75} />
      </g>
    )
  }

  // Hospital
  const hospitalHealth = Math.max(0.4, (scores.health || 54) / 100)

  return (
    <svg viewBox="0 0 400 130" className="w-full h-auto" style={{ maxHeight: 130 }}>
      {/* Sky */}
      <rect width="400" height="130" fill={skyColor} />

      {/* Sun/Cloud */}
      {sunConfig.type === 'sun' ? (
        <circle cx="350" cy="25" r="16" fill={sunConfig.color} opacity={0.9} />
      ) : (
        <g>
          <ellipse cx="340" cy="22" rx="22" ry="10" fill={sunConfig.color} opacity={0.8} />
          <ellipse cx="355" cy="20" rx="16" ry="8" fill={sunConfig.color} opacity={0.7} />
          <ellipse cx="330" cy="18" rx="14" ry="7" fill={sunConfig.color} opacity={0.6} />
        </g>
      )}

      {/* Ground */}
      <rect x="0" y="110" width="400" height="20" fill="#4C9F38" opacity={0.7} />
      <rect x="0" y="118" width="400" height="12" fill="#3F7E44" opacity={0.5} />

      {/* Buildings */}
      {buildings}

      {/* Hospital */}
      <g>
        <rect x="170" y={120 - 45 * hospitalHealth} width={35} height={45 * hospitalHealth} fill="#E5E7EB" rx={2} />
        <rect x={170 + 12} y={120 - 45 * hospitalHealth + 4} width={11} height={3} fill="#E5243B" />
        <rect x={170 + 15} y={120 - 45 * hospitalHealth + 2} width={5} height={7} fill="#E5243B" />
        <text x={170 + 17.5} y={120 - 45 * hospitalHealth + 16} textAnchor="middle" fontSize="5" fill="#6B7280">H</text>
      </g>

      {/* Trees */}
      {trees}

      {/* Road */}
      <rect x="0" y="116" width="400" height="4" fill="#9CA3AF" opacity={0.4} />

      {/* AQI Haze overlay */}
      <rect width="400" height="130" fill="#9CA3AF" opacity={hazeOpacity} />
    </svg>
  )
}
