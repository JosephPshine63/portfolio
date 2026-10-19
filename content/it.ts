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
    prevProject: 'Progetto precedente',
    nextProject: 'Progetto successivo',
    goToProject: 'Vai a',
    inserting: 'Inserimento cartuccia…',
  },
  hero: {
    cardTitle: 'Scheda allenatore',
    name: 'Giuseppe Pio Ruocco',
    role: 'Fullstack Software Engineer',
    base: 'Base: Napoli',
    stats: [
      { label: 'LV', value: '3+ anni' },
      { label: 'Classe attuale', value: 'Software Engineer' },
    ],
    subclasses: { label: 'Sottoclassi', items: ['Fullstack Developer', 'DevOps', 'Product Engineer'] },
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
  },
  journey: {
    title: 'Esperienza',
    subtitle: 'Viaggio',
    slotLabel: 'Slot',
    detailsLabel: 'Dettagli',
    slots: [
      {
        org: 'Accenture',
        role: 'Analyst Software Engineer',
        place: 'Napoli',
        period: '11/2025 – oggi',
        current: true,
        lines: [
          'Generali · piattaforma assicurativa IIAB in produzione nell’UE, team di 200+',
          'Terna · gestione del mercato di bilanciamento elettrico nazionale',
        ],
        tags: ['Angular', 'React', 'Java', 'Node.js', 'Kafka', 'Kubernetes'],
        details: [
          {
            title: 'Generali · IIAB',
            items: [
              'Guidato lo sviluppo di user story sui flussi assicurativi e bancari, aggiornando i componenti Angular 16+ e i dati su Oracle e PostgreSQL',
              'Sviluppato endpoint Java Spring Boot per la logica di business assicurativa, con la gestione degli eventi su Kafka',
              'Rilasciato in ~8 sprint bisettimanali con GitFlow, code review sistematiche, deploy su AWS e demo al cliente',
            ],
          },
          {
            title: 'Terna · MSD',
            items: [
              'Realizzato sia il frontend (React, TypeScript) sia i servizi backend (Java, Node.js) di una piattaforma a microservizi',
              'Integrato Oracle e MongoDB, con elaborazioni batch asincrone e notifiche in tempo reale via WebSocket',
              'Gestito il deploy su Kubernetes (OpenShift e AWS) e le pipeline CI/CD su GitLab',
            ],
          },
        ],
      },
      {
        org: 'Sistemi Informativi (IBM Company)',
        role: 'Software Engineer',
        place: 'Roma',
        period: '05/2024 – 09/2025',
        lines: [
          'Forze Armate · dati sanitari delle infermerie (GDSI)',
          'Ministero della Difesa · piattaforma di whistleblowing',
          'Comune di Roma · gestione delle delibere (Lucilla)',
        ],
        tags: ['Spring Boot', 'Angular', 'Keycloak', 'Elasticsearch', 'Python'],
        details: [
          {
            title: 'GDSI · Forze Armate',
            items: [
              'Sviluppato servizi Spring Boot in un team cross-funzionale, introducendo un nuovo ruolo Keycloak e aggiornando la configurazione Spring Security',
              "Ottimizzato componenti Angular 14 e integrato Elasticsearch per l'indicizzazione e la ricerca avanzata",
            ],
          },
          {
            title: 'Whistleblowing · Ministero della Difesa',
            items: [
              'Sviluppato su una piattaforma di segnalazioni anonime basata su GlobaLeaks (open source), con backend Python (Twisted, SQLAlchemy), frontend Angular 18 e deploy su AWS',
            ],
          },
          {
            title: 'Comune di Roma · Lucilla e Casa Digitale del Cittadino',
            items: [
              'Ristrutturato il frontend Angular di Lucilla (delibere di giunta), rendendolo più manutenibile e leggibile, e scritto la documentazione tecnica e funzionale per il team',
              "Gestito log applicativi e monitoraggio della Casa Digitale del Cittadino sull'orchestratore WSO2, con integrazione di Kafka",
            ],
          },
          {
            title: 'Su più progetti',
            items: [
              'Gestito le migrazioni di schema su Oracle con Liquibase e Spring Batch in un ambiente multi-team, mantenendo coerenti gli ambienti',
            ],
          },
        ],
      },
      {
        org: 'IndSoftware',
        role: 'HMI Developer',
        place: 'Angri (SA)',
        period: '11/2023 – 12/2023',
        lines: ['Contratto a progetto · automazione industriale'],
        tags: ['Siemens TIA Portal', 'VBScript', 'SQL'],
        details: [
          {
            items: [
              'Sviluppato applicazioni SCADA/HMI per il controllo di PLC industriali con Siemens TIA Portal e MS Access',
              "Implementato la logica di business in VBScript e SQL per l'interazione con database Oracle, a supporto dei processi di produzione",
            ],
          },
        ],
      },
      {
        org: 'Openjobmetis',
        role: 'Academy Software Engineer',
        place: 'Roma',
        period: '02/2024 – 03/2024',
        lines: ['Academy intensiva di 248 ore, con attestato di qualifica Software Engineer'],
        details: [
          {
            items: [
              'Backend: Java SE/EE, Spring (Core, MVC, Boot, Data JPA, Cloud), Maven, Gradle',
              'Frontend: HTML5, CSS, Bootstrap, JavaScript, React, Angular',
              'Database MySQL e MongoDB, architetture REST monolitiche e a microservizi (API Gateway, health check)',
              'Design pattern (Facade, Factory, Strategy, Singleton, Builder) e architetturali (DTO, DAO, MVC, IoC), Docker e Git',
            ],
          },
        ],
      },
      {
        org: 'I.I.S. Pacinotti',
        role: 'Diploma tecnico informatico',
        place: 'Scafati (SA)',
        period: '2018 – 2023',
        lines: ['Voto finale 90/100'],
        details: [
          {
            items: [
              'Programmazione front-end e back-end, networking, crittografia, progettazione di database e paradigma OOP',
              'Linguaggi: Java, C, PHP, SQL, HTML, CSS, JavaScript',
            ],
          },
        ],
      },
    ],
    // TODO: testo da scrivere con Giuseppe
    newGame: { label: 'Nuova partita', text: '[Da scrivere]' },
  },
  projects: {
    title: 'Progetti',
    subtitle: 'Squadra',
    emptySlot: 'Slot libero',
    moreLabel: 'Mostra di più',
    items: [
      {
        slug: 'wacchat',
        name: 'WacChat',
        tagline: 'Chat in tempo reale a microservizi',
        description:
          'Microservizi Spring Boot 3: gateway, file, notifiche e chiamate WebRTC. Keycloak con tema personalizzato, STOMP su RabbitMQ, observability con Prometheus, Grafana, Loki e Tempo.',
        role: 'Progetto personale, dall’architettura al deploy.',
        stack: ['Spring Boot 3', 'Angular 19', 'Keycloak', 'RabbitMQ', 'WebRTC', 'PostgreSQL'],
        status: 'online',
        ...projectLinks.wacchat,
        details: [
          {
            title: 'Cosa ho fatto',
            items: [
              '5 microservizi Spring Boot (gateway, backend, file, notifiche, chiamate WebRTC) con una libreria di sicurezza condivisa, e un frontend Angular 19 con client generato da OpenAPI',
            ],
          },
          {
            title: 'Sfida tecnica',
            items: [
              'Messaggi e segnalazione delle chiamate in tempo reale con STOMP su RabbitMQ, separando le notifiche dal backend in un servizio dedicato',
            ],
          },
          {
            title: 'Scelta di cui vado fiero',
            items: [
              'Deploy automatico sul mio server: la CI esegue i test, entra in rete via Tailscale, ridistribuisce solo i servizi toccati dal commit e torna alla versione precedente se un health check fallisce. Testata da amici e parenti',
            ],
          },
        ],
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
        details: [
          {
            title: 'Cosa ho fatto',
            items: [
              'Piattaforma di trading crypto con React e Redux: dati live da CoinGecko, portafoglio e ordini, depositi con Stripe e un chatbot Gemini',
            ],
          },
          {
            title: 'Sfida tecnica',
            items: [
              'Migrazione incrementale da un monolite Spring Boot a microservizi (auth, utenti, ledger, mercato, chatbot), un dominio alla volta, ognuno con il suo schema PostgreSQL',
            ],
          },
          {
            title: 'Scelta di cui vado fiero',
            items: [
              "Sicurezza al gateway: il JWT viene validato una sola volta e i servizi ricevono l'identità già verificata, con rate limiting per IP e Cloudflare Turnstile sui login",
            ],
          },
        ],
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
        details: [
          {
            items: [
              'Modello JPA di un e-commerce (prodotti, categorie, carrello, ordini, utenti, immagini), con DTO tramite ModelMapper e PostgreSQL in Docker',
            ],
          },
        ],
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
        details: [
          {
            items: [
              'Social per il prestito di libri: prestito, restituzione approvata dal proprietario e recensioni, con autenticazione Keycloak e client Angular generato da OpenAPI',
            ],
          },
        ],
      },
    ],
  },
  caseStudy: {
    eject: 'Espelli cartuccia',
    // TODO: testi da scrivere con Giuseppe, un set per progetto
    sections: ['Il problema', 'Architettura', 'Scelte tecniche', 'Cosa ho imparato'],
    placeholder: '[Da scrivere]',
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
      {
        name: 'Certified Junior Angular Developer',
        issuer: 'Certificates.dev',
        date: '09/2026',
        verify: 'https://certificates.dev/c/a2d8323c-26e2-437c-9c89-fd9b605c9520',
      },
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
      { label: 'Email', href: `mailto:${site.email}` },
      { label: 'WhatsApp', href: site.whatsapp },
      { label: 'LinkedIn', href: site.linkedin },
      { label: 'GitHub', href: site.github },
    ],
    form: {
      title: 'Lascia un messaggio',
      name: 'Nome',
      email: 'Email',
      message: 'Messaggio',
      placeholders: { name: 'Mario Rossi', email: 'mario@esempio.it', message: 'Ciao Giuseppe, ti scrivo per…' },
      submit: 'Invia',
      sending: 'Invio in corso…',
      sent: 'Messaggio inviato! Ti rispondo appena posso.',
      error: 'Il messaggio non è partito. Riprova o scrivimi direttamente a',
    },
  },
  footer: 'Giuseppe Pio Ruocco · Napoli',
}
