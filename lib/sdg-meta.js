export const SDG_META = [
  { number: 1,  name: "No Poverty",                  short: "No Poverty",       color: "#E5243B", emoji: "\u{1F91D}" },
  { number: 2,  name: "Zero Hunger",                  short: "Zero Hunger",      color: "#DDA63A", emoji: "\u{1F33E}" },
  { number: 3,  name: "Good Health & Well-being",     short: "Good Health",      color: "#4C9F38", emoji: "\u{1F49A}" },
  { number: 4,  name: "Quality Education",             short: "Education",        color: "#C5192D", emoji: "\u{1F4DA}" },
  { number: 5,  name: "Gender Equality",               short: "Gender Equality",  color: "#FF3A21", emoji: "\u{2696}\u{FE0F}" },
  { number: 6,  name: "Clean Water & Sanitation",      short: "Clean Water",      color: "#26BDE2", emoji: "\u{1F4A7}" },
  { number: 7,  name: "Affordable & Clean Energy",     short: "Clean Energy",     color: "#FCC30B", emoji: "\u{26A1}" },
  { number: 8,  name: "Decent Work & Economic Growth", short: "Economic Growth",  color: "#A21942", emoji: "\u{1F4BC}" },
  { number: 9,  name: "Industry & Innovation",         short: "Innovation",       color: "#FD6925", emoji: "\u{1F3D7}\u{FE0F}" },
  { number: 10, name: "Reduced Inequalities",          short: "Inequalities",     color: "#DD1367", emoji: "\u{1F932}" },
  { number: 11, name: "Sustainable Cities",            short: "Sustainable Cities",color: "#FD9D24", emoji: "\u{1F3D9}\u{FE0F}" },
  { number: 12, name: "Responsible Consumption",       short: "Consumption",      color: "#BF8B2E", emoji: "\u{267B}\u{FE0F}" },
  { number: 13, name: "Climate Action",                short: "Climate Action",   color: "#3F7E44", emoji: "\u{1F30D}" },
  { number: 14, name: "Life Below Water",              short: "Life Below Water", color: "#0A97D9", emoji: "\u{1F30A}" },
  { number: 15, name: "Life on Land",                  short: "Life on Land",     color: "#56C02B", emoji: "\u{1F33F}" },
  { number: 16, name: "Peace & Justice",               short: "Peace & Justice",  color: "#00689D", emoji: "\u{1F54A}\u{FE0F}" },
  { number: 17, name: "Partnerships for the Goals",    short: "Partnerships",     color: "#19486A", emoji: "\u{1F310}" },
]

export function getSDGMeta(number) {
  return SDG_META.find(s => s.number === number)
}

export function getActionCountForSDG(actions, sdgNumber) {
  return actions.filter(a => a.sdg === sdgNumber).length
}
