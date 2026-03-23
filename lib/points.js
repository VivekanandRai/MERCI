export const VERIFY_LABELS = {
  photo: "Photo evidence",
  photo_geo: "Geotagged photo",
  photo_series: "Photo series",
  peer: "Peer verification",
  certificate: "Certificate upload",
  self: "Self-declaration",
  qr: "QR scan at event",
  qr_or_photo: "QR scan or photo",
  screenshot: "Screenshot proof",
  referral: "Referral link",
}

export const PILLAR_COLORS = {
  health: { bg: "#E1F5EE", text: "#0F6E56", bar: "#0F6E56" },
  education: { bg: "#E6F1FB", text: "#378ADD", bar: "#378ADD" },
  environment: { bg: "#E1F5EE", text: "#0F6E56", bar: "#4C9F38" },
  water: { bg: "#EEEDFE", text: "#534AB7", bar: "#534AB7" },
  infrastructure: { bg: "#FAEEDA", text: "#BA7517", bar: "#BA7517" },
  economic: { bg: "#FAECE7", text: "#D85A30", bar: "#D85A30" },
  community: { bg: "#EEEDFE", text: "#534AB7", bar: "#534AB7" },
}

export const PILLAR_LABELS = {
  health: "Health",
  education: "Education",
  environment: "Environment",
  water: "Water & Sanitation",
  infrastructure: "Infrastructure",
  economic: "Economic Inclusion",
  community: "Community",
}

export function getMultiplier(actionCount) {
  if (actionCount >= 100) return 2.0
  if (actionCount >= 50) return 1.5
  if (actionCount >= 20) return 1.2
  return 1.0
}
