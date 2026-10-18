import type { Dictionary } from './types'
import { projectLinks, site } from './shared'

export const en: Dictionary = {
  meta: {
    title: 'Giuseppe Pio Ruocco — Fullstack Software Engineer',
    description:
      'Fullstack Software Engineer in Naples, Italy: Java and Spring Boot, Angular and React, production microservices for insurance, energy, public sector and healthcare.',
  },
  nav: { projects: 'Projects', experience: 'Experience', skills: 'Skills', contact: 'Contact' },
  ui: {
    switchLanguage: 'Passa all’italiano',
    toDay: 'Switch to day',
    toNight: 'Switch to night',
    audio: 'Audio',
    caseStudy: 'Case study',
    demo: 'Demo',
    code: 'Code',
    online: 'Online',
    repo: 'Repo',
    myRole: 'My role',
    avatarAlt: 'Pixel avatar of Giuseppe',
  },
  hero: {
    cardTitle: 'Trainer card',
    name: 'Giuseppe Pio Ruocco',
    role: 'Fullstack Software Engineer',
    base: 'Base: Naples',
    available: 'Available',
    stats: [
      { label: 'LV', value: '3+ years' },
      { label: 'Current class', value: 'Analyst SE' },
    ],
    dialog:
      'Hi! I’m Giuseppe.\nI build production systems, from Spring Boot APIs to Angular or React interfaces.\n3+ years across insurance, energy, public sector and healthcare.',
    ctaProjects: 'See the projects',
    ctaCv: 'Download CV',
  },
  profile: {
    title: 'Profile',
    subtitle: 'Stats',
    mission: {
      label: 'Current quest',
      text: 'Analyst Software Engineer at Accenture, on Generali’s insurance platform and Terna’s electricity balancing market.',
    },
    languages: {
      label: 'Languages',
      items: [
        { name: 'Italian', level: 'C2' },
        { name: 'English', level: 'C1' },
        { name: 'French', level: 'A2' },
        { name: 'Spanish', level: 'A2' },
      ],
    },
    stack: { label: 'Main stack', items: ['Java', 'Spring Boot', 'Angular', 'React', 'Kubernetes'] },
    offCode: {
      label: 'Away from code',
      text: 'Homelabbing: an Ubuntu server at home that runs my projects. And a passion for Game Boy Advance games.',
    },
    question: { title: 'Got a question?', button: 'Copy my email' },
  },
  journey: {
    title: 'Experience',
    subtitle: 'Journey',
    past: {
      label: 'Past',
      period: '2018 – 2024',
      items: [
        'Computer science technical diploma · I.I.S. Pacinotti, 90/100',
        'HMI Developer · IndSoftware, SCADA with Siemens TIA Portal',
        'Software Engineer Academy · 248 hours, Openjobmetis',
      ],
    },
    present: {
      label: 'Present',
      period: '2024 – now',
      items: [
        'Accenture · Generali (Angular, Java, Kafka, 200+ person team) and Terna (React, Java, Node.js, Kubernetes)',
        'Sistemi Informativi (IBM Company) · Italian Armed Forces, Ministry of Defence, Municipality of Rome',
      ],
    },
    // TODO: copy to be written with Giuseppe
    future: { label: 'Future', period: 'Next level', text: '[To be written]' },
  },
  projects: {
    title: 'Projects',
    subtitle: 'Party',
    emptySlot: 'Free slot',
    items: [
      {
        slug: 'wacchat',
        name: 'WacChat',
        tagline: 'Real-time chat on microservices',
        description:
          'Spring Boot 3 microservices: gateway, files, notifications and WebRTC calls. Keycloak with Google login, STOMP over RabbitMQ, observability with Prometheus, Grafana, Loki and Tempo.',
        role: 'Personal project, from architecture to deploy.',
        stack: ['Spring Boot 3', 'Angular 19', 'Keycloak', 'RabbitMQ', 'WebRTC', 'PostgreSQL'],
        status: 'online',
        ...projectLinks.wacchat,
      },
      {
        slug: 'gprflow',
        name: 'GprFlow',
        tagline: 'Crypto trading platform',
        description:
          'Live market data, a portfolio with profit and loss, Stripe payments and a Gemini chatbot. JWT in an HttpOnly cookie, OTP 2FA, a gateway with rate limiting.',
        role: 'Personal project, from architecture to deploy.',
        stack: ['React', 'Redux', 'Spring Cloud Gateway', 'PostgreSQL', 'Stripe'],
        status: 'online',
        ...projectLinks.gprflow,
      },
      {
        slug: 'piocart',
        name: 'PioCart',
        tagline: 'E-commerce REST API',
        description: 'Products, categories, cart, orders and users, with a JPA domain model and a dockerized environment.',
        role: 'Personal project.',
        stack: ['Java 17', 'Spring Boot 3', 'PostgreSQL', 'Docker Compose'],
        status: 'repo',
        ...projectLinks.piocart,
      },
      {
        slug: 'booktribe',
        name: 'BookTribe',
        tagline: 'Spring Cloud microservices',
        description: 'Config server, discovery, gateway, feedback and notification services, with an Angular frontend and Keycloak.',
        role: 'Personal project.',
        stack: ['Spring Cloud', 'Angular', 'Keycloak'],
        status: 'repo',
        ...projectLinks.booktribe,
      },
    ],
  },
  skills: {
    title: 'Skills',
    subtitle: 'Moves',
    groups: [
      { type: 'Backend', items: ['Java', 'Spring Boot', 'Keycloak', 'Kafka'] },
      { type: 'Frontend', items: ['Angular 14–20', 'React 18', 'TypeScript'] },
      { type: 'Data', items: ['PostgreSQL', 'Oracle', 'MongoDB', 'Elasticsearch'] },
      { type: 'DevOps', items: ['Docker', 'Kubernetes', 'OpenShift', 'AWS'] },
      { type: 'GenAI', items: ['Claude Code', 'MCP', 'Agent Skills'] },
    ],
  },
  certifications: {
    title: 'Certifications',
    subtitle: 'Badges',
    items: [
      { name: 'Certified Junior Angular Developer', issuer: 'Certificates.dev', date: '09/2026' },
      { name: 'Anthropic Academy · 6 courses', issuer: 'Anthropic', date: '04/2026' },
      { name: 'Enterprise OAuth 2.0 and OpenID Connect', issuer: 'Viraj Shetty', date: '11/2025' },
      { name: 'Mastering Java Reactive Programming', issuer: 'Vinoth Selvaraj', date: '11/2025' },
      { name: 'Fundamentals of Database Engineering', issuer: 'Hussein Nasser', date: '11/2025' },
      { name: 'Java Spring Boot Microservices 5-in-1', issuer: 'in28minutes', date: '08/2024' },
    ],
  },
  contact: {
    title: 'Contact',
    subtitle: 'Save',
    question: 'Save the contact before you quit?',
    text: 'Open to fullstack or backend roles at product, SaaS or consulting companies.',
    links: [
      { label: 'Email me', href: `mailto:${site.email}` },
      { label: 'LinkedIn', href: site.linkedin },
      { label: 'GitHub', href: site.github },
    ],
  },
  footer: 'Giuseppe Pio Ruocco · Naples, Italy',
}
