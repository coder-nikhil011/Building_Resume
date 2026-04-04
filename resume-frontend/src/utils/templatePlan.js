// FREE templates — basic, clean, ATS safe
export const FREE_TEMPLATES = [
  "classic", "minimal", "simple", "clean", "clear", "atsbasic", "compact"
];

// PREMIUM templates — styled, colored, modern
export const PREMIUM_TEMPLATES = [
  "modern", "professional", "corporate", "bold", "timeline",
  "sidebar", "gradient", "stylish", "managerial", "startup",
  "tech", "fresher", "light", "dark", "specialist", "twocolumn",
  "atspro", "atsmodern"
];

// ELITE templates — most unique, advanced designs
export const ELITE_TEMPLATES = [
  "creative", "executive", "elegant", "designer",
  "portfolio", "academic", "primeats"
];

export const getTemplatePlan = (id) => {
  if (FREE_TEMPLATES.includes(id)) return "free";
  if (PREMIUM_TEMPLATES.includes(id)) return "premium";
  if (ELITE_TEMPLATES.includes(id)) return "elite";
  return "free";
};

export const PLAN_COLORS = {
  free: { bg: "#f0fdf4", text: "#15803d", label: "FREE" },
  premium: { bg: "#eff6ff", text: "#1d4ed8", label: "PRO" },
  elite: { bg: "#fdf4ff", text: "#9333ea", label: "ELITE" },
};