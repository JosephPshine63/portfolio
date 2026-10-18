// Shape of every locale dictionary. Adding a field here makes TypeScript flag
// each locale that is missing it, so IT and EN can never drift apart.

export type Link = { label: string; href: string }

export type Project = {
  slug: string
  name: string
  tagline: string
  description: string
  role: string
  stack: string[]
  status: 'online' | 'repo'
  demo?: string
  code?: string
}

export type Certification = {
  name: string
  issuer: string
  date?: string
  verify?: string
}

export type SkillGroup = { type: string; items: string[] }

export type Dictionary = {
  meta: { title: string; description: string }
  nav: { projects: string; experience: string; skills: string; contact: string }
  ui: {
    switchLanguage: string
    toDay: string
    toNight: string
    audio: string
    caseStudy: string
    demo: string
    code: string
    online: string
    repo: string
    myRole: string
  }
  hero: {
    cardTitle: string
    name: string
    role: string
    base: string
    available: string
    stats: { label: string; value: string }[]
    dialog: string
    ctaProjects: string
    ctaCv: string
  }
  profile: {
    title: string
    subtitle: string
    mission: { label: string; text: string }
    languages: { label: string; items: { name: string; level: string }[] }
    stack: { label: string; items: string[] }
    offCode: { label: string; text: string }
    question: { title: string; button: string }
  }
  journey: {
    title: string
    subtitle: string
    past: { label: string; period: string; items: string[] }
    present: { label: string; period: string; items: string[] }
    future: { label: string; period: string; text: string }
  }
  projects: { title: string; subtitle: string; items: Project[]; emptySlot: string }
  skills: { title: string; subtitle: string; groups: SkillGroup[] }
  certifications: { title: string; subtitle: string; items: Certification[] }
  contact: { title: string; subtitle: string; question: string; text: string; links: Link[] }
  footer: string
}
