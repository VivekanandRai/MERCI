'use client'
import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'merci_karma_v1'

const DEFAULT_STATE = {
  loggedActions: [],
  totalPoints: 0,
  actionsCount: 0,
}

export function useKarma() {
  const [karma, setKarma] = useState(DEFAULT_STATE)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) setKarma(JSON.parse(stored))
    } catch (e) {}
  }, [])

  const logAction = useCallback((action) => {
    setKarma(prev => {
      const entry = {
        id: Date.now().toString(),
        actionId: action.id,
        title: action.title,
        points: action.points,
        sdg: action.sdg,
        pillar: action.pillar,
        date: new Date().toISOString(),
        status: 'accepted',
      }
      const next = {
        loggedActions: [entry, ...prev.loggedActions],
        totalPoints: prev.totalPoints + action.points,
        actionsCount: prev.actionsCount + 1,
      }
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)) } catch (e) {}
      return next
    })
  }, [])

  const getHeatmapData = useCallback(() => {
    const cells = new Array(182).fill(0)
    const now = new Date()
    karma.loggedActions.forEach(a => {
      const date = new Date(a.date)
      const diffMs = now - date
      const diffDays = Math.floor(diffMs / 86400000)
      if (diffDays < 182) {
        const idx = 181 - diffDays
        cells[idx] = Math.min(cells[idx] + 1, 4)
      }
    })
    return cells
  }, [karma.loggedActions])

  const getPointsByPillar = useCallback(() => {
    const pillars = { health: 0, education: 0, environment: 0, water: 0, infrastructure: 0, economic: 0, community: 0 }
    karma.loggedActions.forEach(a => {
      if (pillars[a.pillar] !== undefined) pillars[a.pillar] += a.points
    })
    return pillars
  }, [karma.loggedActions])

  return { karma, logAction, getHeatmapData, getPointsByPillar }
}
