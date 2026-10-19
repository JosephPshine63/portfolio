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
    prevProject: 'Previous project',
    nextProject: 'Next project',
    goToProject: 'Go to',
    inserting: 'Inserting cartridge…',
  },
  hero: {
    cardTitle: 'Trainer card',
    name: 'Giuseppe Pio Ruocco',
    role: 'Fullstack Software Engineer',
    base: 'Base: Naples',
    stats: [
      { label: 'LV', value: '3+ years' },
      { label: 'Current class', value: 'Software Engineer' },
    ],
    subclasses: { label: 'Subclasses', items: ['Fullstack Developer', 'DevOps', 'Product Engineer'] },
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
  },
  journey: {
    title: 'Experience',
    subtitle: 'Journey',
    slotLabel: 'Slot',
    detailsLabel: 'Details',
    slots: [
      {
        org: 'Accenture',
        role: 'Analyst Software Engineer',
        place: 'Naples',
        period: '11/2025 – now',
        current: true,
        lines: [
          'Generali · IIAB insurance platform in production across the EU, 200+ person team',
          'Terna · management of Italy’s national electricity balancing market',
        ],
        tags: ['Angular', 'React', 'Java', 'Node.js', 'Kafka', 'Kubernetes'],
        details: [
          {
            title: 'Generali · IIAB',
            items: [
              'Led the development of user stories for insurance and banking workflows, updating Angular 16+ components and data on Oracle and PostgreSQL',
              'Built Java Spring Boot endpoints for the core insurance business logic, with event handling on Kafka',
              'Shipped across ~8 two-week sprints with GitFlow, systematic code reviews, AWS deployments and client demos',
            ],
          },
          {
            title: 'Terna · MSD',
            items: [
              'Built both the frontend (React, TypeScript) and the backend services (Java, Node.js) of a microservices platform',
              'Integrated Oracle and MongoDB, with asynchronous batch processing and real-time WebSocket notifications',
              'Managed Kubernetes deployments (OpenShift and AWS) and CI/CD pipelines on GitLab',
            ],
          },
        ],
      },
      {
        org: 'Sistemi Informativi (IBM Company)',
        role: 'Software Engineer',
        place: 'Rome',
        period: '05/2024 – 09/2025',
        lines: [
          'Italian Armed Forces · infirmary medical records (GDSI)',
          'Ministry of Defence · whistleblowing platform',
          'Municipality of Rome · city council resolutions (Lucilla)',
        ],
        tags: ['Spring Boot', 'Angular', 'Keycloak', 'Elasticsearch', 'Python'],
        details: [
          {
            title: 'GDSI · Italian Armed Forces',
            items: [
              'Built Spring Boot services in a cross-functional team, adding a new Keycloak role and updating the Spring Security configuration',
              'Optimised Angular 14 components and integrated Elasticsearch for indexing and advanced search',
            ],
          },
          {
            title: 'Whistleblowing · Ministry of Defence',
            items: [
              'Worked on an anonymous reporting platform based on open-source GlobaLeaks, with a Python backend (Twisted, SQLAlchemy), an Angular 18 frontend and deployment on AWS',
            ],
          },
          {
            title: 'Municipality of Rome · Lucilla and Casa Digitale del Cittadino',
            items: [
              "Restructured Lucilla's Angular frontend (city council resolutions) to make it more maintainable and readable, and wrote the technical and functional documentation for the team",
              'Handled application logs and monitoring for Casa Digitale del Cittadino on the WSO2 orchestrator, with Kafka integration',
            ],
          },
          {
            title: 'Across projects',
            items: [
              'Managed Oracle schema migrations with Liquibase and Spring Batch in a multi-team setup, keeping environments consistent',
            ],
          },
        ],
      },
      {
        org: 'IndSoftware',
        role: 'HMI Developer',
        place: 'Angri (SA)',
        period: '11/2023 – 12/2023',
        lines: ['Project contract · industrial automation'],
        tags: ['Siemens TIA Portal', 'VBScript', 'SQL'],
        details: [
          {
            items: [
              'Built SCADA/HMI applications for industrial PLC control with Siemens TIA Portal and MS Access',
              'Implemented the business logic in VBScript and SQL for Oracle database access, supporting production processes',
            ],
          },
        ],
      },
      {
        org: 'Openjobmetis',
        role: 'Software Engineer Academy',
        place: 'Rome',
        period: '02/2024 – 03/2024',
        lines: ['Intensive 248-hour academy, with a Software Engineer qualification certificate'],
        details: [
          {
            items: [
              'Backend: Java SE/EE, Spring (Core, MVC, Boot, Data JPA, Cloud), Maven, Gradle',
              'Frontend: HTML5, CSS, Bootstrap, JavaScript, React, Angular',
              'MySQL and MongoDB databases, monolithic and microservices REST architectures (API Gateway, health checks)',
              'Design patterns (Facade, Factory, Strategy, Singleton, Builder) and architectural patterns (DTO, DAO, MVC, IoC), Docker and Git',
            ],
          },
        ],
      },
      {
        org: 'I.I.S. Pacinotti',
        role: 'Computer science technical diploma',
        place: 'Scafati (SA)',
        period: '2018 – 2023',
        lines: ['Final grade 90/100'],
        details: [
          {
            items: [
              'Front-end and back-end programming, networking, cryptography, database design and OOP',
              'Languages: Java, C, PHP, SQL, HTML, CSS, JavaScript',
            ],
          },
        ],
      },
    ],
    // TODO: copy to be written with Giuseppe
    newGame: { label: 'New game', text: '[To be written]' },
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
  caseStudy: {
    eject: 'Eject cartridge',
    // TODO: copy to be written with Giuseppe, one set per project
    sections: ['The problem', 'Architecture', 'Technical choices', 'What I learned'],
    placeholder: '[To be written]',
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
      { label: 'Email', href: `mailto:${site.email}` },
      { label: 'WhatsApp', href: site.whatsapp },
      { label: 'LinkedIn', href: site.linkedin },
      { label: 'GitHub', href: site.github },
    ],
    form: {
      title: 'Leave a message',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      placeholders: { name: 'Jane Smith', email: 'jane@example.com', message: 'Hi Giuseppe, I am reaching out about…' },
      submit: 'Send',
      sending: 'Sending…',
      sent: 'Message sent! I will reply as soon as I can.',
      error: 'The message did not go through. Try again or write to me directly at',
      privacy: 'I only use your name and email to reply to you.',
    },
  },
  footer: 'Giuseppe Pio Ruocco · Naples, Italy',
}
