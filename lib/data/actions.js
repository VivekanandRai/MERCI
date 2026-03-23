export const SDG_ACTIONS = [
  // SDG 1 — No Poverty
  { id: "a01", sdg: 1, title: "Help someone access a government welfare scheme", points: 25, verify: "peer", pillar: "economic", un_inspired: true },
  { id: "a02", sdg: 1, title: "Donate warm clothing to a shelter", points: 15, verify: "photo", pillar: "community", un_inspired: true },
  { id: "a03", sdg: 1, title: "Teach a skill to someone unemployed", points: 30, verify: "peer", pillar: "economic", un_inspired: false },

  // SDG 2 — Zero Hunger
  { id: "a04", sdg: 2, title: "Donate food to a community kitchen or shelter", points: 15, verify: "photo", pillar: "community", un_inspired: true },
  { id: "a05", sdg: 2, title: "Plant vegetables in a community garden", points: 20, verify: "photo_geo", pillar: "environment", un_inspired: true },
  { id: "a06", sdg: 2, title: "Reduce food waste for a week (compost or donate surplus)", points: 15, verify: "self", pillar: "environment", un_inspired: true },

  // SDG 3 — Good Health & Well-being
  { id: "a07", sdg: 3, title: "Donate blood", points: 30, verify: "certificate", pillar: "health", un_inspired: true },
  { id: "a08", sdg: 3, title: "Attend or organise a free health camp", points: 20, verify: "qr", pillar: "health", un_inspired: false },
  { id: "a09", sdg: 3, title: "Walk or cycle instead of motor transport for a week", points: 15, verify: "self", pillar: "health", un_inspired: true },
  { id: "a10", sdg: 3, title: "Complete a mental health first aid training", points: 25, verify: "certificate", pillar: "health", un_inspired: true },
  { id: "a11", sdg: 3, title: "Quit smoking for 30 days (log and verify)", points: 20, verify: "self", pillar: "health", un_inspired: true },

  // SDG 4 — Quality Education
  { id: "a12", sdg: 4, title: "Donate books to a school or library", points: 20, verify: "photo", pillar: "education", un_inspired: true },
  { id: "a13", sdg: 4, title: "Teach a literacy session to an adult or child", points: 25, verify: "peer", pillar: "education", un_inspired: true },
  { id: "a14", sdg: 4, title: "Mentor a first-generation college student", points: 30, verify: "peer", pillar: "education", un_inspired: false },
  { id: "a15", sdg: 4, title: "Organise a free skill workshop in your community", points: 30, verify: "photo", pillar: "education", un_inspired: true },

  // SDG 5 — Gender Equality
  { id: "a16", sdg: 5, title: "Support a girl child's school enrolment", points: 30, verify: "peer", pillar: "education", un_inspired: true },
  { id: "a17", sdg: 5, title: "Volunteer at a women's safety helpline or shelter", points: 25, verify: "certificate", pillar: "community", un_inspired: true },

  // SDG 6 — Clean Water & Sanitation
  { id: "a18", sdg: 6, title: "Fix a water leak or install a tap aerator", points: 20, verify: "photo", pillar: "water", un_inspired: false },
  { id: "a19", sdg: 6, title: "Report a broken water pipe to municipal portal", points: 15, verify: "screenshot", pillar: "water", un_inspired: false },
  { id: "a20", sdg: 6, title: "Clean a local water body (river, pond, lake)", points: 25, verify: "photo", pillar: "water", un_inspired: true },
  { id: "a21", sdg: 6, title: "Segregate household waste for a week", points: 15, verify: "photo", pillar: "water", un_inspired: true },

  // SDG 7 — Affordable & Clean Energy
  { id: "a22", sdg: 7, title: "Switch a room to LED lighting", points: 10, verify: "photo", pillar: "environment", un_inspired: true },
  { id: "a23", sdg: 7, title: "Install solar panels or advocate for building-level solar", points: 35, verify: "photo", pillar: "environment", un_inspired: true },
  { id: "a24", sdg: 7, title: "Go car-free for a week using public transport", points: 20, verify: "self", pillar: "environment", un_inspired: true },

  // SDG 8 — Decent Work & Economic Growth
  { id: "a25", sdg: 8, title: "Buy intentionally from a street vendor or small business", points: 10, verify: "photo", pillar: "economic", un_inspired: true },
  { id: "a26", sdg: 8, title: "Help someone open a Jan Dhan bank account", points: 20, verify: "peer", pillar: "economic", un_inspired: false },
  { id: "a27", sdg: 8, title: "Hire a local artisan or informal worker for home work", points: 15, verify: "peer", pillar: "economic", un_inspired: true },

  // SDG 9 — Industry, Innovation & Infrastructure
  { id: "a28", sdg: 9, title: "Report a pothole or broken infrastructure to the municipal portal", points: 15, verify: "screenshot", pillar: "infrastructure", un_inspired: false },
  { id: "a29", sdg: 9, title: "Fix a broken street light (report or repair)", points: 20, verify: "photo", pillar: "infrastructure", un_inspired: false },
  { id: "a30", sdg: 9, title: "Build or repair a community notice board or bus shelter", points: 25, verify: "photo", pillar: "infrastructure", un_inspired: false },

  // SDG 10 — Reduced Inequalities
  { id: "a31", sdg: 10, title: "Volunteer with a disability inclusion organisation", points: 25, verify: "certificate", pillar: "community", un_inspired: true },
  { id: "a32", sdg: 10, title: "Help a migrant worker access legal rights or services", points: 30, verify: "peer", pillar: "community", un_inspired: true },

  // SDG 11 — Sustainable Cities & Communities
  { id: "a33", sdg: 11, title: "Participate in a neighbourhood cleanliness drive", points: 20, verify: "qr_or_photo", pillar: "environment", un_inspired: true },
  { id: "a34", sdg: 11, title: "Report an unsanitary spot (garbage dump, blocked drain)", points: 15, verify: "photo", pillar: "water", un_inspired: false },
  { id: "a35", sdg: 11, title: "Attend a community RWA or ward meeting", points: 15, verify: "qr_or_photo", pillar: "community", un_inspired: false },
  { id: "a36", sdg: 11, title: "Plant a tree in your neighbourhood", points: 25, verify: "photo_geo", pillar: "environment", un_inspired: true },

  // SDG 12 — Responsible Consumption
  { id: "a37", sdg: 12, title: "Refuse single-use plastic for a day", points: 10, verify: "photo", pillar: "environment", un_inspired: true },
  { id: "a38", sdg: 12, title: "Repair instead of replacing a broken item", points: 10, verify: "photo", pillar: "environment", un_inspired: true },
  { id: "a39", sdg: 12, title: "Donate or sell unused clothes, electronics, or furniture", points: 15, verify: "photo", pillar: "community", un_inspired: true },

  // SDG 13 — Climate Action
  { id: "a40", sdg: 13, title: "Plant 5 trees in a single day", points: 40, verify: "photo_geo", pillar: "environment", un_inspired: true },
  { id: "a41", sdg: 13, title: "Participate in a local flood or disaster preparedness drill", points: 20, verify: "photo", pillar: "community", un_inspired: true },
  { id: "a42", sdg: 13, title: "Install a rainwater harvesting system", points: 35, verify: "photo", pillar: "water", un_inspired: true },

  // SDG 14 — Life Below Water (adapted for inland India)
  { id: "a43", sdg: 14, title: "Clean a river bank or lake shore", points: 25, verify: "photo", pillar: "water", un_inspired: true },
  { id: "a44", sdg: 14, title: "Stop dumping waste into drains or water bodies (peer witness)", points: 20, verify: "peer", pillar: "water", un_inspired: true },

  // SDG 15 — Life on Land
  { id: "a45", sdg: 15, title: "Adopt and maintain a tree for 6 months", points: 40, verify: "photo_series", pillar: "environment", un_inspired: true },
  { id: "a46", sdg: 15, title: "Build a bird feeder or install a nesting box", points: 15, verify: "photo", pillar: "environment", un_inspired: true },

  // SDG 16 — Peace, Justice & Strong Institutions
  { id: "a47", sdg: 16, title: "Register to vote and cast your vote", points: 25, verify: "photo", pillar: "community", un_inspired: true },
  { id: "a48", sdg: 16, title: "File an RTI application on a civic issue", points: 30, verify: "screenshot", pillar: "community", un_inspired: false },
  { id: "a49", sdg: 16, title: "Volunteer with a legal aid clinic", points: 30, verify: "certificate", pillar: "community", un_inspired: true },

  // SDG 17 — Partnerships for the Goals
  { id: "a50", sdg: 17, title: "Invite a neighbour to join Merci", points: 10, verify: "referral", pillar: "community", un_inspired: false },
  { id: "a51", sdg: 17, title: "Organise a community event for an SDG theme", points: 35, verify: "photo", pillar: "community", un_inspired: true },
]
