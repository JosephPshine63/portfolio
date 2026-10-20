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
        story: [
          {
            text: 'Volevo costruire da zero una chat in tempo reale completa, con un’architettura enterprise vera invece di un’app monolitica. È il mio unico progetto usato davvero da altre persone: l’hanno testata amici e parenti.',
            items: [
              'Chat 1:1 e di gruppo, con risposte, inoltro, reazioni e note vocali',
              'Chiamate audio e video WebRTC, anche di gruppo',
              'Notifiche desktop e Web Push, con l’app installabile come PWA',
            ],
          },
          {
            text: 'Uno Spring Cloud Gateway reattivo (WebFlux) è l’unico punto d’ingresso per il frontend Angular 19.',
            items: [
              'Servizi: backend (chat, messaggi, utenti), file-service con i media su Cloudflare R2, notification-service per il tempo reale e call-service per la segnalazione delle chiamate',
              'Arno, un chatbot Gemini che accoglie ogni nuovo utente in una chat di benvenuto',
              'Autenticazione delegata a Keycloak, con tema personalizzato e una libreria di sicurezza condivisa tra i servizi',
              'RabbitMQ come broker STOMP invece di un broker in memoria, così lo stato delle sottoscrizioni è condiviso, e come bus di eventi',
              'Observability completa: tracce su Tempo, metriche su Prometheus, log su Loki e dashboard Grafana',
            ],
          },
          {
            items: [
              'Estrazione progressiva dal backend: prima i file, poi le notifiche in tempo reale, poi le chiamate, ognuno con una responsabilità sola',
              'Chiamate WebRTC 1:1 e di gruppo in topologia mesh fino a 8 persone, con la segnalazione sulla connessione STOMP già aperta',
              'Client Angular generato dalla specifica OpenAPI, così frontend e backend non vanno fuori sincronia',
              'Sicurezza rivista dopo un audit: upload validati con i magic bytes, credenziali RabbitMQ diverse per ogni consumer, protezione brute-force su Keycloak, porte di admin e database solo in locale, al massimo 3 sessioni attive per utente',
              'CI/CD: test a ogni push e deploy in produzione solo se sono verdi, ridistribuendo solo il servizio toccato dal commit',
            ],
          },
          {
            items: [
              'Dividere un backend in servizi sposta i problemi sui confini: quando ho estratto le notifiche, la consegna dei messaggi in tempo reale si è rotta finché non ho ricollegato il broker RabbitMQ',
              'WebRTC è semplice in rete locale e difficile su Internet: segnalazione, candidati ICE e flussi audio da gestire a mano, e senza un server TURN alcune reti non si collegano',
              'Con un identity provider esterno serve un identificativo stabile: sincronizzare gli utenti per email invece che per il sub di Keycloak creava duplicati e conflitti',
              'Tracce, metriche e log centralizzati mi hanno fatto trovare in minuti errori che, sparsi su sei container, avrei cercato per ore',
            ],
          },
        ],
      },
      {
        slug: 'gprflow',
        name: 'GprFlow',
        tagline: 'Piattaforma di crypto trading',
        description:
          'Dati di mercato live, portafoglio con profitti e perdite, statistiche con grafici, pagamenti Stripe e chatbot Gemini. JWT in cookie HttpOnly e gateway con rate limiting.',
        role: 'Progetto personale, dall’architettura al deploy.',
        stack: ['React', 'Redux', 'Spring Cloud Gateway', 'PostgreSQL', 'Stripe'],
        status: 'online',
        ...projectLinks.gprflow,
        details: [
          {
            title: 'Cosa ho fatto',
            items: [
              'Piattaforma di trading crypto con React e Redux: dati live da CoinGecko, portafoglio e ordini, una pagina di statistiche con i grafici di portafoglio, ordini e wallet, depositi con Stripe e un chatbot Gemini',
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
        story: [
          {
            text: 'Volevo un progetto personale che affrontasse quello che un’app reale deve gestire: soldi, autenticazione, dati esterni in tempo reale e un deploy vero. I pagamenti Stripe della demo sono in modalità test, quindi nessun denaro reale si muove.',
          },
          {
            text: 'Nata come monolite Spring Boot, oggi è divisa in servizi dietro uno Spring Cloud Gateway, con un frontend React e Redux.',
            items: [
              'Servizi: coin, chatbot, ledger, auth e user, più il monolite residuo',
              'Un solo PostgreSQL, con uno schema separato per ogni servizio',
              'Ospitata su un mio server Ubuntu ed esposta con un Cloudflare Tunnel, senza porte aperte sul router',
              'Deploy automatico con GitHub Actions: controlli su frontend e backend, poi rilascio via Tailscale e SSH',
            ],
          },
          {
            items: [
              'Migrazione per fasi: prima test di integrazione con Testcontainers come rete di sicurezza, poi un dominio alla volta (Coin e Chatbot, poi Ledger, infine Auth e User)',
              'Sicurezza al gateway: JWT in cookie HttpOnly validato una sola volta, identità passata ai servizi tramite header, rate limiting per IP, limite di 1 MB sulle richieste e Cloudflare Turnstile su login, registrazione e reset password',
              'Correttezza sui soldi: chiusi accessi ai dati di altri utenti (IDOR), importi negativi o nulli, riuso dei codici OTP ed errori di precisione nel wallet; il prezzo di acquisto è una media ponderata quando ricompri lo stesso asset',
            ],
          },
          {
            items: [
              'Come funzionano e come si usano le pipeline di CI/CD, dai controlli automatici al rilascio in produzione',
              'Come si fa il deploy su un server Linux, compresa l’esposizione dell’app con cloudflared',
              'Come comunicano tra loro i container di uno stack Docker Compose',
            ],
          },
        ],
      },
      {
        slug: 'piocart',
        name: 'PioCart',
        tagline: 'E-commerce full-stack',
        description:
          'Backend Spring Boot e storefront Next.js: catalogo con ricerca e filtri, carrello, checkout Stripe, storico ordini e area di amministrazione, con login JWT a ruoli.',
        role: 'Progetto personale.',
        stack: ['Spring Boot 3', 'Next.js', 'PostgreSQL', 'Stripe', 'Docker'],
        status: 'online',
        ...projectLinks.piocart,
        details: [
          {
            title: 'Cosa ho fatto',
            items: [
              'Negozio completo: backend Spring Boot con PostgreSQL e storefront Next.js con Server Actions, catalogo di 45 prodotti in 6 categorie, pagamento con Stripe Checkout e area admin per catalogo e ordini',
            ],
          },
          {
            title: 'Sfida tecnica',
            items: [
              'Un pagamento di cui fidarsi: l’ordine si conferma solo dopo aver verificato con Stripe l’importo pagato, e annullarlo prima della spedizione rimborsa il pagamento e rimette gli articoli in magazzino',
            ],
          },
          {
            title: 'Scelta di cui vado fiero',
            items: [
              'Va online solo codice testato: i deploy automatici di Vercel sono disattivati e la pipeline rilascia prima il backend, poi il frontend, poi controlla la SEO del sito in produzione',
            ],
          },
        ],
        story: [
          {
            text: 'Partito come REST API per un e-commerce, volevo portarlo fino a un negozio completo: catalogo, carrello, pagamento, storico ordini e un’area di amministrazione, con un deploy vero. La demo ha un catalogo di prova di 45 prodotti e i pagamenti Stripe sono in modalità test, quindi nessun denaro reale si muove.',
          },
          {
            text: 'Backend Spring Boot con PostgreSQL e storefront Next.js con React 19, Tailwind e shadcn/ui.',
            items: [
              'Il browser non chiama mai il backend: tutte le richieste passano dal server Next.js (Server Components, Server Actions e route handler)',
              'Autenticazione JWT stateless con ruoli USER e ADMIN, token in un cookie httpOnly',
              'Backend in Docker sul mio server Ubuntu, pubblicato in HTTPS con Tailscale Funnel senza aprire porte; storefront su Vercel, con le funzioni a Francoforte vicino al backend',
              'CI/CD con GitHub Actions: test con Testcontainers, lint e typecheck, poi deploy del backend via Tailscale e SSH con ritorno al commit precedente se non parte, solo dopo deploy del frontend e infine un controllo SEO sul sito in produzione',
            ],
          },
          {
            items: [
              'Pagamento con Stripe Checkout: l’ordine nasce in attesa e viene confermato solo dopo aver verificato con Stripe che l’importo pagato sia quello giusto; solo allora scala le giacenze e svuota il carrello',
              'Annullare un ordine non ancora spedito rimborsa il pagamento e rimette gli articoli in magazzino',
              'Carrello con aggiornamenti ottimistici che tornano indietro se il backend rifiuta la modifica, per esempio per giacenza insufficiente',
              'Carrelli e ordini ricavati dal token: gli ordini di altri utenti rispondono 404',
              'Regole di dominio nel backend: non si elimina un prodotto già ordinato né una categoria con prodotti, e le immagini caricate sono controllate per tipo e dimensione',
              'Catalogo con filtri, ricerca, ordinamento e paginazione nell’URL',
              'SEO curata: description e canonical per ogni pagina, dati strutturati per prodotti e categorie, immagini di anteprima generate, sitemap inviata a Google Search Console e uno script che in CI controlla title, description, canonical e JSON-LD',
            ],
          },
          {
            items: [
              'Le impostazioni predefinite di JPA vanno controllate: un cascade su una relazione ManyToOne cancellava le entità padre, la tabella user andava rinominata perché è una parola riservata di PostgreSQL e le immagini salvate come large object si leggono solo dentro una transazione',
              'Un ordine creato non è un ordine pagato: lo storico mostra solo quelli con il pagamento verificato da Stripe, così i checkout abbandonati non compaiono',
              'Far passare tutte le chiamate dal server Next.js tiene il backend e il token fuori dal browser, ma sposta lì la gestione di sessione, errori e cache',
              'I limiti della piattaforma entrano nel design: Vercel accetta richieste fino a 4,5 MB, quindi le immagini dei prodotti si caricano una alla volta',
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
        stack: ['Spring Cloud', 'Angular', 'Keycloak', 'OpenFeign', 'Resilience4j', 'PostgreSQL'],
        status: 'repo',
        ...projectLinks.booktribe,
        details: [
          {
            title: 'Cosa ho fatto',
            items: [
              'Social per il prestito di libri: prestito, restituzione approvata dal proprietario e recensioni, con autenticazione Keycloak e client Angular generato da OpenAPI',
            ],
          },
          {
            title: 'Sfida tecnica',
            items: [
              'Scomporre un monolite in microservizi Spring Cloud in tre fasi: prima l’infrastruttura (Config Server, Eureka, Gateway), poi le notifiche, infine i feedback con un database proprio',
            ],
          },
          {
            title: 'Scelta di cui vado fiero',
            items: [
              'I servizi si chiamano con OpenFeign dietro circuit breaker Resilience4j: se i feedback non rispondono, il catalogo resta usabile invece di rompersi',
            ],
          },
        ],
        story: [
          {
            text: 'Un social network per il prestito di libri, nato come applicazione monolitica Spring Boot e Angular. L’ho usato per imparare a scomporre un sistema in microservizi con Spring Cloud, un dominio alla volta, senza riscriverlo da capo.',
            items: [
              'Catalogo paginato dei libri condivisi dalla community',
              'Pubblicazione dei propri libri con copertina, da rendere condivisibili o archiviare',
              'Prestito e restituzione, con la restituzione approvata dal proprietario',
              'Voto e recensione sui libri presi in prestito',
            ],
          },
          {
            text: 'Microservizi Spring Boot 3 su Spring Cloud: ogni servizio legge la configurazione dal Config Server e si registra su Eureka, e il frontend Angular parla solo con il gateway.',
            items: [
              'Spring Cloud Gateway come unico punto d’ingresso, con la configurazione CORS centralizzata lì invece che nei singoli servizi',
              'Servizi: libri e prestiti, feedback con un database proprio, notifiche email con template Thymeleaf',
              'Autenticazione delegata a Keycloak: i servizi validano il JWT come resource server, il frontend usa keycloak-js con PKCE',
              'Client Angular generato con ng-openapi-gen dalle specifiche dei due servizi unite',
              'Deploy preparato: Dockerfile multi-stage, un Docker Compose di produzione con Postgres e Keycloak, frontend pensato per Vercel e backend per il mio server via Tailscale Funnel',
            ],
          },
          {
            items: [
              'Migrazione in tre fasi, verificando ogni passo con uno stack reale: Postgres, Keycloak e MailDev usa-e-getta e JWT veri',
              'Il feedback conserva solo l’id del libro invece di una chiave esterna JPA, così i due domini hanno database separati',
              'Chiamate tra servizi con OpenFeign e circuit breaker Resilience4j con fallback: se i feedback sono giù la lista dei libri mostra voto 0, se i libri sono giù il feedback risponde 503 con un messaggio chiaro',
              'Configurazione da variabili d’ambiente con default locali, e un seeder opzionale con libri, prestiti e recensioni di esempio',
            ],
          },
          {
            items: [
              'Estrarre un servizio fa emergere bug che il monolite nascondeva: un template email cercato con il nome sbagliato in codice mai raggiunto e un controllo sul proprietario che confrontava una stringa con un intero',
              'Tra microservizi l’identità non passa da sola: il JWT non veniva inoltrato nelle chiamate Feign finché non ho aggiunto un interceptor',
              'La resilienza va provata nel caso di guasto: con il nome sbagliato di una property i fallback non scattavano mai, e me ne sono accorto solo spegnendo un servizio',
              'I microservizi hanno un costo concreto: trasformare una join in una chiamata di rete obbliga a decidere cosa mostrare quando l’altro servizio non risponde, e cinque JVM con Keycloak e Postgres occupano circa 3 GB di RAM',
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
