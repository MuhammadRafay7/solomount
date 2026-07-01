export interface SiteConfig {
  language: string
  siteTitle: string
  siteDescription: string
}

export interface NavigationLink {
  label: string
  target: string
}

export interface NavigationConfig {
  brandName: string
  links: NavigationLink[]
}

export interface HeroConfig {
  videoPath: string
  eyebrow: string
  titleLine: string
  titleEmphasis: string
  subtitleLine1: string
  subtitleLine2: string
  ctaText: string
  ctaTargetId: string
}

export interface ManifestoConfig {
  sectionLabel: string
  text: string
}

export interface AnatomyPillar {
  label: string
  title: string
  body: string
}

export interface AnatomyConfig {
  sectionLabel: string
  title: string
  pillars: AnatomyPillar[]
}

export interface TierConfig {
  name: string
  price: string
  frequency: string
  journeys: string
  image: string
  description: string
  amenities: string[]
  ctaText: string
  ctaHref: string
}

export interface TiersConfig {
  sectionLabel: string
  title: string
  tiers: TierConfig[]
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterColumn {
  heading: string
  links: FooterLink[]
}

export interface FooterConfig {
  ageGateText: string
  brandName: string
  brandTaglineLines: string[]
  columns: FooterColumn[]
  copyright: string
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "SOLOMOUNT — Alpine Expeditions",
  siteDescription:
    "A private membership for serious climbers. Where risk meets solitude and summits reward the bold.",
}

export const navigationConfig: NavigationConfig = {
  brandName: "SOLOMOUNT",
  links: [
    { label: "Philosophy", target: "#manifesto" },
    { label: "The Ascent", target: "#anatomy" },
    { label: "Membership", target: "#tiers" },
  ],
}

export const heroConfig: HeroConfig = {
  videoPath: "videos/hero.mp4",
  eyebrow: "Members Only",
  titleLine: "Alpine",
  titleEmphasis: "Ascents",
  subtitleLine1:
    "A private membership for those who climb not to conquer,",
  subtitleLine2: "but to discover what the mountain reveals.",
  ctaText: "Apply for Membership",
  ctaTargetId: "#tiers",
}

export const manifestoConfig: ManifestoConfig = {
  sectionLabel: "Our Philosophy",
  text:
    "There is a moment on every serious climb when the chatter stops, the wind drops, and you are alone with the rock and ice. That is the moment SOLOMOUNT was built for. We are not a guiding service. We are a collective of climbers who understand that the greatest rewards live where comfort ends. Every expedition we design strips away the unnecessary, leaving only what matters: the route, the weather window, and the resolve to move upward when everything in your body begs you to turn back. The mountain does not care about your summit photo. It cares about your preparation, your patience, and your willingness to listen. We climb to find that silence, to test the edge between control and surrender, and to return changed.",
}

export const anatomyConfig: AnatomyConfig = {
  sectionLabel: "The Ascent",
  title: "Three Pillars of the SOLOMOUNT Experience",
  pillars: [
    {
      label: "01 — Solitude",
      title: "The Mountain Teaches in Silence",
      body:
        "Our expeditions are designed for small teams of four to six climbers maximum. We do not lead crowded routes or chase Instagram-worthy vistas. Instead, we seek the remote faces, the unclimbed ridges, and the high camps where the only sound is your own breath at altitude. Solitude is not loneliness; it is the space where self-reliance is forged. Every SOLOMOUNT journey includes mandatory solo bivouac nights, where climbers spend 24 hours alone on the mountain, carrying only essential gear. These solitary passages are where the alpine transformation happens.",
    },
    {
      label: "02 — Risk & Reward",
      title: "Calculated Courage at the Edge",
      body:
        "We do not eliminate risk; we refine it. Each expedition begins months in advance with physical conditioning protocols, technical skills assessments, and mental preparation workshops led by high-altitude psychologists. Our route selection balances objective hazard with genuine challenge, placing you in terrain that demands focus without crossing into recklessness. The reward is not the summit selfie. It is the quiet confidence that comes from moving through technical ice fields at dawn, from making the right decision when the weather turns, and from knowing your limits because you have genuinely found them.",
    },
    {
      label: "03 — Summit Mastery",
      title: "Beyond the Top, the Real Journey",
      body:
        "The summit is not the finish line; it is the halfway point. Our curriculum emphasizes descent strategy, fatigue management, and the discipline to turn back when conditions deteriorate, even when the top is within reach. Members graduate through a structured progression from alpine rock and glacier travel to mixed terrain and expedition-style mountaineering. Summit Mastery means respecting the mountain enough to return to it. Our alumni network spans five continents, connected by shared experience rather than shared convenience.",
    },
  ],
}

export const tiersConfig: TiersConfig = {
  sectionLabel: "Membership",
  title: "Choose Your Ascent",
  tiers: [
    {
      name: "Alpine Entry",
      price: "$1,200",
      frequency: "per expedition",
      journeys: "Introductory alpine routes",
      image: "images/tier-01.jpg",
      description:
        "The gateway to serious alpine climbing. Designed for mountaineers transitioning from guided peaks to independent terrain, Alpine Entry includes 5-day expeditions on classic routes with direct mentorship from IFMGA-certified guides. Build foundational skills in glacier travel, crevasse rescue, and high-altitude camping while experiencing the SOLOMOUNT philosophy firsthand.",
      amenities: [
        "5-day guided alpine expeditions",
        "Pre-trip fitness & gear consultation",
        "All technical equipment provided",
        "Mountain hut & high-camp accommodation",
        "Post-expedition skills debrief",
        "Access to member community forum",
      ],
      ctaText: "Begin the Ascent",
      ctaHref: "#apply",
    },
    {
      name: "Expedition Core",
      price: "$3,800",
      frequency: "per annum",
      journeys: "Unlimited core expeditions",
      image: "images/tier-02.jpg",
      description:
        "Our most popular tier for committed climbers. Expedition Core grants unlimited access to all core-route expeditions across three continents, plus priority booking for limited-capacity objectives. Members lead pitches, plan camps, and make route decisions under supervision, building the judgment required for independent ascents. Includes winter skills training and avalanche certification.",
      amenities: [
        "Unlimited core expeditions (North America & Europe)",
        "Priority booking for exclusive routes",
        "AIARE Level 1 avalanche certification",
        "Advanced technical workshops quarterly",
        "1:1 mentorship pairing system",
        "Expedition planning & weather analysis training",
        "Group emergency insurance coverage",
        "Year-round base lodge access",
      ],
      ctaText: "Join the Core",
      ctaHref: "#apply",
    },
    {
      name: "Summit Elite",
      price: "$8,500",
      frequency: "per annum",
      journeys: "Global expedition access",
      image: "images/tier-03.jpg",
      description:
        "The pinnacle of the SOLOMOUNT experience. Summit Elite is an invitation-only tier for climbers who have demonstrated technical excellence, sound judgment, and alignment with our community values. Access exclusive first ascents, private Himalayan expeditions, and remote Antarctic objectives. This is alpine climbing at its most profound, shared with a tight-knit brotherhood of the world's most dedicated mountaineers.",
      amenities: [
        "All Expedition Core benefits included",
        "Access to exclusive first ascents & remote objectives",
        "Private Himalayan & Antarctic expeditions",
        "Custom expedition design & private guiding",
        "Helicopter access to remote base camps",
        "Annual members-only summit gathering",
        "Expedition photography & documentary package",
        "Lifetime alumni network & advisory board eligibility",
      ],
      ctaText: "Request Invitation",
      ctaHref: "#apply",
    },
  ],
}

export const footerConfig: FooterConfig = {
  ageGateText: "Climbing is dangerous. We take that seriously.",
  brandName: "SOLOMOUNT",
  brandTaglineLines: [
    "Where risk meets solitude.",
    "Summits reward the bold.",
  ],
  columns: [
    {
      heading: "Expeditions",
      links: [
        { label: "Alpine Entry", href: "#tiers" },
        { label: "Expedition Core", href: "#tiers" },
        { label: "Summit Elite", href: "#tiers" },
        { label: "Route Calendar", href: "#" },
        { label: "Safety Protocols", href: "#" },
      ],
    },
    {
      heading: "Community",
      links: [
        { label: "Member Stories", href: "#" },
        { label: "Guide Profiles", href: "#" },
        { label: "Training Resources", href: "#" },
        { label: "Alumni Network", href: "#" },
        { label: "Events & Gatherings", href: "#" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About SOLOMOUNT", href: "#manifesto" },
        { label: "Our Philosophy", href: "#manifesto" },
        { label: "Partners & Affiliates", href: "#" },
        { label: "Press & Media", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Membership Terms", href: "#" },
        { label: "Waiver & Release", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Cancellation Policy", href: "#" },
      ],
    },
  ],
  copyright: "\u00A9 2025 SOLOMOUNT Alpine Expeditions. All rights reserved.",
}
