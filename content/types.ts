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
  details?: DetailGroup[]
  // Case study chapters, in the order of caseStudy.sections; a missing one shows the placeholder.
  story?: StoryChapter[]
  // The first one is the cover of the card; all of them form the case study carousel.
  screens?: Screenshot[]
}

export type StoryChapter = { text?: string; items?: string[] }

export type Screenshot = { src: string; caption: string }

export type Certification = {
  name: string
  issuer: string
  date?: string
  verify?: string
}

// Optional title, e.g. the client project the items belong to.
export type DetailGroup = { title?: string; items: string[] }

// A short paragraph about one part of an experience, e.g. one client project.
export type SlotChapter = { title?: string; text: string }

export type SaveSlot = {
  org: string
  role?: string
  place?: string
  period: string
  current?: boolean
  lines: string[]
  tags?: string[]
  details?: SlotChapter[]
}

export type ContactForm = {
  title: string
  name: string
  email: string
  message: string
  placeholders: { name: string; email: string; message: string }
  submit: string
  sending: string
  sent: string
  error: string
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
    avatarAlt: string
    prevProject: string
    nextProject: string
    goToProject: string
    inserting: string
  }
  hero: {
    cardTitle: string
    name: string
    role: string
    base: string
    stats: { label: string; value: string }[]
    subclasses: { label: string; items: string[] }
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
  }
  journey: {
    title: string
    subtitle: string
    slotLabel: string
    detailsLabel: string
    slots: SaveSlot[]
    newGame: { question: string; cta: string }
  }
  projects: { title: string; subtitle: string; items: Project[]; emptySlot: string; moreLabel: string }
  caseStudy: {
    eject: string
    sections: string[]
    placeholder: string
    gallery: string
    prevScreen: string
    nextScreen: string
  }
  skills: { title: string; subtitle: string; groups: SkillGroup[] }
  certifications: { title: string; subtitle: string; items: Certification[] }
  contact: { title: string; subtitle: string; question: string; text: string; links: Link[]; form: ContactForm }
  footer: string
}
