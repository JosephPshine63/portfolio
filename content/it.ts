import type { Dictionary } from './types'
import { projectLinks, site } from './shared'

export const it: Dictionary = {
  meta: {
    title: 'Giuseppe Pio Ruocco — Fullstack Software Engineer',
    description:
      'Fullstack Software Engineer a Napoli: Java e Spring Boot, Angular e React, microservizi in produzione per assicurazioni, energia, PA e sanità.',
  },
  nav: { projects: 'Progetti', experience: 'Esperienza', skills: 'Skill', contact: 'Contatti' },
  ui: {
    switchLanguage: 'Switch to English',
    toDay: 'Passa al giorno',
    toNight: 'Passa alla notte',
    audio: 'Audio',
    caseStudy: 'Caso studio',
    demo: 'Demo',
    code: 'Codice',
    online: 'Online',
    repo: 'Repo',
    myRole: 'Il mio ruolo',
    avatarAlt: 'Avatar pixel di Giuseppe',
  },
  hero: {
    cardTitle: 'Scheda allenatore',
    name: 'Giuseppe Pio Ruocco',
    role: 'Fullstack Software Engineer',
    base: 'Base: Napoli',
    available: 'Disponibile',
    stats: [
      { label: 'LV', value: '3+ anni' },
      { label: 'Classe attuale', value: 'Analyst SE' },
    ],
    dialog:
      'Ciao! Sono Giuseppe.\nCostruisco sistemi in produzione, dall’API Spring Boot all’interfaccia Angular o React.\n3+ anni su assicurazioni, energia, PA e sanità.',
    ctaProjects: 'Vedi i progetti',
    ctaCv: 'Scarica il CV',
  },
  profile: {
    title: 'Profilo',
    subtitle: 'Statistiche',
    mission: {
      label: 'Missione attuale',
      text: 'Analyst Software Engineer in Accenture, sulla piattaforma assicurativa di Generali e sul mercato di bilanciamento elettrico di Terna.',
    },
    languages: {
      label: 'Lingue',
      items: [
        { name: 'Italiano', level: 'C2' },
        { name: 'Inglese', level: 'C1' },
        { name: 'Francese', level: 'A2' },
        { name: 'Spagnolo', level: 'A2' },
      ],
    },
    stack: { label: 'Stack principale', items: ['Java', 'Spring Boot', 'Angular', 'React', 'Kubernetes'] },
    question: { title: 'Hai una domanda?', button: 'Copia la mia email' },
  },
  journey: {
    title: 'Esperienza',
    subtitle: 'Viaggio',
    past: {
      label: 'Passato',
      period: '2018 – 2024',
      items: [
        'Diploma tecnico informatico · I.I.S. Pacinotti, 90/100',
        'HMI Developer · IndSoftware, SCADA con Siemens TIA Portal',
        'Academy Software Engineer · 248 ore, Openjobmetis',
      ],
    },
    present: {
      label: 'Presente',
      period: '2024 – oggi',
      items: [
        'Accenture · Generali (Angular, Java, Kafka, team di 200+) e Terna (React, Java, Node.js, Kubernetes)',
        'Sistemi Informativi (IBM Company) · Forze Armate, Ministero della Difesa, Comune di Roma',
      ],
    },
    // TODO: testo da scrivere con Giuseppe
    future: { label: 'Futuro', period: 'Prossimo livello', text: '[Da scrivere]' },
  },
  projects: {
    title: 'Progetti',
    subtitle: 'Squadra',
    emptySlot: 'Slot libero',
    items: [
      {
        slug: 'wacchat',
        name: 'WacChat',
        tagline: 'Chat in tempo reale a microservizi',
        description:
          'Microservizi Spring Boot 3: gateway, file, notifiche e chiamate WebRTC. Keycloak con login Google, STOMP su RabbitMQ, observability con Prometheus, Grafana, Loki e Tempo.',
        role: 'Progetto personale, dall’architettura al deploy.',
        stack: ['Spring Boot 3', 'Angular 19', 'Keycloak', 'RabbitMQ', 'WebRTC', 'PostgreSQL'],
        status: 'online',
        ...projectLinks.wacchat,
      },
      {
        slug: 'gprflow',
        name: 'GprFlow',
        tagline: 'Piattaforma di crypto trading',
        description:
          'Dati di mercato live, portafoglio con profitti e perdite, pagamenti Stripe e chatbot Gemini. JWT in cookie HttpOnly, 2FA via OTP, gateway con rate limiting.',
        role: 'Progetto personale, dall’architettura al deploy.',
        stack: ['React', 'Redux', 'Spring Cloud Gateway', 'PostgreSQL', 'Stripe'],
        status: 'online',
        ...projectLinks.gprflow,
      },
      {
        slug: 'piocart',
        name: 'PioCart',
        tagline: 'REST API e-commerce',
        description: 'Prodotti, categorie, carrello, ordini e utenti, con modello JPA e ambiente dockerizzato.',
        role: 'Progetto personale.',
        stack: ['Java 17', 'Spring Boot 3', 'PostgreSQL', 'Docker Compose'],
        status: 'repo',
        ...projectLinks.piocart,
      },
      {
        slug: 'booktribe',
        name: 'BookTribe',
        tagline: 'Microservizi Spring Cloud',
        description: 'Config server, discovery, gateway e servizi di feedback e notifiche, con frontend Angular e Keycloak.',
        role: 'Progetto personale.',
        stack: ['Spring Cloud', 'Angular', 'Keycloak'],
        status: 'repo',
        ...projectLinks.booktribe,
      },
    ],
  },
  skills: {
    title: 'Skill',
    subtitle: 'Mosse',
    groups: [
      { type: 'Backend', items: ['Java', 'Spring Boot', 'Keycloak', 'Kafka'] },
      { type: 'Frontend', items: ['Angular 14–20', 'React 18', 'TypeScript'] },
      { type: 'Dati', items: ['PostgreSQL', 'Oracle', 'MongoDB', 'Elasticsearch'] },
      { type: 'DevOps', items: ['Docker', 'Kubernetes', 'OpenShift', 'AWS'] },
      { type: 'GenAI', items: ['Claude Code', 'MCP', 'Agent Skills'] },
    ],
  },
  certifications: {
    title: 'Certificazioni',
    subtitle: 'Medaglie',
    items: [
      { name: 'Certified Junior Angular Developer', issuer: 'Certificates.dev', date: '09/2026' },
      { name: 'Anthropic Academy · 6 corsi', issuer: 'Anthropic', date: '04/2026' },
      { name: 'Enterprise OAuth 2.0 and OpenID Connect', issuer: 'Viraj Shetty', date: '11/2025' },
      { name: 'Mastering Java Reactive Programming', issuer: 'Vinoth Selvaraj', date: '11/2025' },
      { name: 'Fundamentals of Database Engineering', issuer: 'Hussein Nasser', date: '11/2025' },
      { name: 'Java Spring Boot Microservices 5-in-1', issuer: 'in28minutes', date: '08/2024' },
    ],
  },
  contact: {
    title: 'Contatti',
    subtitle: 'Salva',
    question: 'Vuoi salvare il contatto prima di uscire?',
    text: 'Aperto a ruoli fullstack o backend in aziende product, SaaS o di consulenza.',
    links: [
      { label: 'Scrivimi', href: `mailto:${site.email}` },
      { label: 'LinkedIn', href: site.linkedin },
      { label: 'GitHub', href: site.github },
    ],
  },
  footer: 'Giuseppe Pio Ruocco · Napoli',
}
