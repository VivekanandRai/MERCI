export const CHALLENGES = [
  {
    id: "c01",
    title: "Winter Air Quality Drive",
    description: "AQI in South Delhi has crossed 178. We need 500 citizens to take an environment action before Sunday to push our Environment score past 40.",
    sdg_pillar: "environment",
    sdg_number: 13,
    required: 500,
    current: 312,
    deadline: "2026-03-30",
    status: "urgent",
    qualifying_actions: ["plant_tree", "refuse_plastic", "cleanliness_drive", "segregate_waste", "go_car_free", "switch_led"]
  },
  {
    id: "c02",
    title: "Fix Unsanitary Spots — Hauz Khas",
    description: "3 unsanitary dumping spots have been reported near Hauz Khas Village. 200 citizens need to take a water or sanitation action this week.",
    sdg_pillar: "water",
    sdg_number: 6,
    required: 200,
    current: 87,
    deadline: "2026-03-28",
    status: "active",
    qualifying_actions: ["report_civic_issue", "clean_water_body", "segregate_waste", "rainwater_harvesting"]
  },
  {
    id: "c03",
    title: "Pothole Reporting Sprint — Saket",
    description: "Help us map every pothole in Saket ward this week. Report 50 civic infrastructure issues to the Delhi municipal portal.",
    sdg_pillar: "infrastructure",
    sdg_number: 9,
    required: 50,
    current: 6,
    deadline: "2026-04-01",
    status: "new",
    qualifying_actions: ["report_pothole", "report_civic_issue"]
  }
]
