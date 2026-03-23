export const SOUTH_DELHI = {
  id: "south-delhi",
  name: "South Delhi",
  state: "Delhi NCT",
  scores: {
    health: 54,
    education: 71,
    environment: 38,
    water: 62,
    infrastructure: 49,
    economic: 57,
  },
  aqi: 178,
  season: "winter",
  activeCitizens: 312,
  rank: 47,
  totalDistricts: 718,
  scoreMethodology: {
    health: "Composite of hospital beds per 1,000 (HMIS), maternal mortality rate (NFHS-5), and full immunisation coverage. South Delhi has good immunisation rates but strained hospital infrastructure.",
    education: "Composite of gross enrolment ratio, dropout rate (inverted), and qualified teacher ratio (UDISE+). Strong enrolment but a 12% secondary dropout gap.",
    environment: "AQI inverted score (CPCB live) weighted at 60%, plus FSI green cover % at 40%. Severe winter AQI (average 178) pulls this score low.",
    water: "ODF+ status (SBM) and Jal Jeevan Mission household pipe coverage. Good open-defecation-free status, but only 68% have direct pipe connections.",
    infrastructure: "Road quality index (MoRTH), street lighting coverage %, and bus stop density. Uneven across wards — Saket and Hauz Khas score well, Sangam Vihar does not.",
    economic: "Jan Dhan account coverage, MGNREGA utilisation rate, and registered street vendor density. High formal banking penetration but low scheme utilisation.",
  }
}
