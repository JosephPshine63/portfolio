import type { Dictionary } from './types'
import { projectLinks, screen, site } from './shared'

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
      { label: 'LV', value: '3+ years', icon: 'star' },
      { label: 'Current class', value: 'Software Engineer', icon: 'shield' },
    ],
    subclasses: { label: 'Subclasses', items: ['Fullstack Developer', 'DevOps', 'Product Engineer'] },
    dialog:
      'Hi! I’m Giuseppe.\nI build production systems, from Spring Boot APIs to Angular or React interfaces, all the way to Kubernetes deploys with CI/CD.\n3+ years across insurance, energy, public sector and healthcare.\nIn my spare time I take my own projects live, from code to Linux server: you’ll find them below!',
    ctaProjects: 'See the projects',
    ctaCv: 'Download CV',
  },
  profile: {
    title: 'Profile',
    subtitle: 'Stats',
    mission: {
      label: 'Current quest',
      state: 'In progress',
      text: 'Analyst Software Engineer at Accenture, currently on the platform for Terna’s electricity balancing market.',
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
    stack: {
      label: 'Main stack',
      items: [
        { name: 'Java', group: 0 },
        { name: 'Spring Boot', group: 0 },
        { name: 'Angular', group: 1 },
        { name: 'React', group: 1 },
        { name: 'Kubernetes', group: 3 },
      ],
    },
  },
  journey: {
    title: 'Experience',
    subtitle: 'Journey',
    slotLabel: 'Slot',
    detailsLabel: 'Details',
    slots: [
      {
        org: 'Accenture',
        icon: 'briefcase',
        role: 'Analyst Software Engineer',
        place: 'Naples',
        period: '11/2025 – now',
        current: true,
        lines: [
          'Generali · IIAB international insurance platform',
          'Terna · management of Italy’s national electricity balancing market',
        ],
        tags: ['Angular', 'React', 'Java', 'Node.js', 'Kafka', 'Kubernetes'],
        details: [
          {
            title: 'Generali · IIAB',
            text: 'On Generali’s international insurance platform I took part in the analysis and development of frontend user stories for insurance and banking workflows. I built components of the PASS suite in AngularJS and Angular 14. On the Java 17 backend, built on a REST API architecture, I developed features and fixed bugs. I managed data versioning on Oracle and PostgreSQL, and the code and its pipelines on GitLab.',
          },
          {
            title: 'Terna · MSD',
            text: 'Most of my work is refactoring and migrating existing features, because the energy sector needs fast and accurate APIs. The main backend is Spring Boot, within a microservices architecture with REST APIs and services also in Node.js and Python. I write SQL procedures on Oracle, integrate MongoDB and work on asynchronous batch processing and real-time WebSocket notifications. On the frontend I build and improve React interfaces (TypeScript and JavaScript), focusing on UI and UX. I also manage deployments across environments with Kubernetes on OpenShift and AWS, with pipelines and pull requests on GitLab.',
          },
        ],
      },
      {
        org: 'Sistemi Informativi (IBM Company)',
        icon: 'server',
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
            text: 'In a cross-functional team I built Spring Boot REST services for managing infirmary medical records, adding a new Keycloak role and updating the Spring Security configuration. On the frontend I optimised Angular 14 components and integrated Elasticsearch for indexing and advanced search.',
          },
          {
            title: 'Whistleblowing · Ministry of Defence',
            text: 'I worked on an anonymous reporting platform based on the open-source GlobaLeaks software, with REST APIs in Python (Twisted, SQLAlchemy), an Angular 18 frontend and deployment on AWS.',
          },
          {
            title: 'Municipality of Rome · Lucilla and Casa Digitale del Cittadino',
            text: 'I restructured the Angular frontend of Lucilla, the application for city council resolutions, making it more maintainable and readable, and wrote the technical and functional documentation for the team. On Casa Digitale del Cittadino, a REST API architecture, I handled application logs and monitoring on the WSO2 orchestrator, with Kafka integration.',
          },
          {
            title: 'Across projects',
            text: 'In a multi-team setup I managed Oracle schema migrations with Liquibase and Spring Batch, keeping environments consistent.',
          },
        ],
      },
      {
        org: 'IndSoftware',
        icon: 'gear',
        role: 'PLC/HMI Developer',
        place: 'Angri (SA)',
        period: '11/2023 – 12/2023',
        lines: ['Internship · client: Stellantis · temperature control in the drying departments'],
        tags: ['Siemens TIA Portal', 'C', 'VBScript', 'MS Access', 'MariaDB'],
        details: [
          {
            title: 'Stellantis · car door drying',
            text: 'During the internship I built and programmed PLCs and HMIs with the Siemens TIA Portal suite to control the temperature in Stellantis’ car door drying departments. I worked on the automatic flame control that keeps the drying temperature on target. I connected the plant logs to an MS Access database and the settings to MariaDB, with logic in VBScript and SQL.',
          },
        ],
      },
      {
        org: 'Openjobmetis',
        icon: 'book',
        role: 'Software Engineer Academy',
        place: 'Rome',
        period: '02/2024 – 03/2024',
        lines: ['Intensive 248-hour academy, with a Software Engineer qualification certificate'],
        details: [
          {
            text: 'During the academy I studied the backend with Java SE/EE and Spring (Core, MVC, Boot, Data JPA, Cloud), using Maven and Gradle, and the frontend with HTML5, CSS, Bootstrap, JavaScript, React and Angular. I worked with MySQL and MongoDB databases and with both monolithic and microservices REST architectures (API Gateway, health checks). I went deeper into design patterns (Facade, Factory, Strategy, Singleton, Builder) and architectural patterns (DTO, DAO, MVC, IoC), along with Docker and Git.',
          },
        ],
      },
      {
        org: 'I.I.S. Pacinotti',
        icon: 'cap',
        role: 'Computer science technical diploma',
        place: 'Scafati (SA)',
        period: '2018 – 2023',
        lines: ['Final grade 90/100'],
        details: [
          {
            text: 'I studied front-end and back-end programming, networking, cryptography, database design and object-oriented programming, using Java, C, PHP, SQL, HTML, CSS and JavaScript.',
          },
        ],
      },
    ],
    newGame: { question: 'Want to start a new game?', cta: 'Write to me' },
  },
  projects: {
    title: 'Projects',
    subtitle: 'Party',
    emptySlot: 'Free slot',
    moreLabel: 'Show more',
    items: [
      {
        slug: 'wacchat',
        name: 'WacChat',
        tagline: 'Real-time chat on microservices',
        description:
          'Spring Boot 3 microservices: gateway, files, notifications and WebRTC calls. Keycloak with a custom theme, STOMP over RabbitMQ, observability with Prometheus, Grafana, Loki and Tempo.',
        role: 'Personal project, from architecture to deploy.',
        stack: ['Spring Boot 3', 'Angular 19', 'Keycloak', 'RabbitMQ', 'WebRTC', 'PostgreSQL'],
        status: 'online',
        ...projectLinks.wacchat,
        screens: [
          { src: screen('wacchat', 'chat'), caption: 'Chat' },
          { src: screen('wacchat', 'settings'), caption: 'Settings' },
          { src: screen('wacchat', 'incoming-call'), caption: 'Incoming call' },
          { src: screen('wacchat', 'video-call'), caption: 'Video call' },
          { src: screen('wacchat', 'sign-up'), caption: 'Sign-up' },
          { src: screen('wacchat', 'username'), caption: 'Choosing a username' },
        ],
        details: [
          {
            title: 'What I built',
            items: [
              '5 Spring Boot microservices (gateway, backend, files, notifications, WebRTC calls) with a shared security library, and an Angular 19 frontend with an OpenAPI-generated client',
            ],
          },
          {
            title: 'Technical challenge',
            items: [
              'Real-time messaging and call signalling with STOMP over RabbitMQ, moving notifications out of the backend into a dedicated service',
            ],
          },
          {
            title: "A choice I'm proud of",
            items: [
              'Automated deployment to my own server: CI runs the tests, joins the network via Tailscale, redeploys only the services the commit touched and rolls back if a health check fails. Tested by friends and family',
            ],
          },
        ],
        story: [
          {
            text: 'I wanted to build a complete real-time chat from scratch, with a real enterprise architecture instead of a monolithic app. It is my only project actually used by other people: friends and family tested it.',
            items: [
              '1:1 and group chats, with replies, forwarding, reactions and voice notes',
              'WebRTC audio and video calls, including group calls',
              'Desktop and Web Push notifications, with the app installable as a PWA',
            ],
          },
          {
            text: 'A reactive Spring Cloud Gateway (WebFlux) is the single entry point for the Angular 19 frontend.',
            items: [
              'Services: backend (chats, messages, users), file-service with media on Cloudflare R2, notification-service for real time and call-service for call signaling',
              'Arno, a Gemini chatbot that welcomes every new user in a welcome chat',
              'Authentication delegated to Keycloak, with a custom theme and a security library shared across services',
              'RabbitMQ as the STOMP broker instead of an in-memory one, so subscription state is shared, and as an event bus',
              'Full observability: traces in Tempo, metrics in Prometheus, logs in Loki and Grafana dashboards',
            ],
          },
          {
            items: [
              'Gradual extraction from the backend: files first, then real-time notifications, then calls, each with a single responsibility',
              '1:1 and group WebRTC calls in a mesh of up to 8 people, signaled over the STOMP connection that is already open',
              'Angular client generated from the OpenAPI spec, so frontend and backend cannot drift apart',
              'Security reviewed after an audit: uploads checked by magic bytes, separate RabbitMQ credentials per consumer, Keycloak brute-force protection, admin and database ports bound to localhost, at most 3 active sessions per user',
              'CI/CD: tests on every push and a production deploy only when they pass, redeploying just the service the commit touched',
            ],
          },
          {
            items: [
              'Splitting a backend into services moves the problems to the boundaries: when I extracted notifications, real-time message delivery broke until I rewired the RabbitMQ broker',
              'WebRTC is easy on a local network and hard on the Internet: signaling, ICE candidates and audio streams to handle by hand, and without a TURN server some networks cannot connect',
              'With an external identity provider you need a stable identifier: syncing users by email instead of the Keycloak sub caused duplicates and conflicts',
              'Centralized traces, metrics and logs let me find in minutes errors that, spread across six containers, would have taken hours',
            ],
          },
        ],
      },
      {
        slug: 'gprflow',
        name: 'GprFlow',
        tagline: 'Crypto trading platform',
        description:
          'Live market data, a portfolio with profit and loss, statistics with charts, Stripe payments and a Gemini chatbot. JWT in an HttpOnly cookie and a gateway with rate limiting.',
        role: 'Personal project, from architecture to deploy.',
        stack: ['React', 'Redux', 'Spring Cloud Gateway', 'PostgreSQL', 'Stripe'],
        status: 'online',
        ...projectLinks.gprflow,
        screens: [
          { src: screen('gprflow', 'home'), caption: 'Home' },
          { src: screen('gprflow', 'statistics'), caption: 'Statistics' },
          { src: screen('gprflow', 'portfolio'), caption: 'Portfolio' },
          { src: screen('gprflow', 'activity'), caption: 'Activity' },
        ],
        details: [
          {
            title: 'What I built',
            items: [
              'Crypto trading platform with React and Redux: live CoinGecko market data, portfolio and orders, a statistics page with portfolio, order and wallet charts, Stripe deposits and a Gemini chatbot',
            ],
          },
          {
            title: 'Technical challenge',
            items: [
              'Incremental migration from a Spring Boot monolith to microservices (auth, users, ledger, market data, chatbot), one domain at a time, each with its own PostgreSQL schema',
            ],
          },
          {
            title: "A choice I'm proud of",
            items: [
              'Security at the gateway: the JWT is validated once and services receive the verified identity, with per-IP rate limiting and Cloudflare Turnstile on login',
            ],
          },
        ],
        story: [
          {
            text: 'I wanted a personal project that dealt with what a real app has to handle: money, authentication, live external data and a real deployment. Stripe payments in the demo run in test mode, so no real money moves.',
          },
          {
            text: 'It started as a Spring Boot monolith and is now split into services behind a Spring Cloud Gateway, with a React and Redux frontend.',
            items: [
              'Services: coin, chatbot, ledger, auth and user, plus what is left of the monolith',
              'A single PostgreSQL instance, with a separate schema per service',
              'Hosted on my own Ubuntu server and exposed through a Cloudflare Tunnel, with no ports open on the router',
              'Automatic deploys with GitHub Actions: frontend and backend checks first, then release over Tailscale and SSH',
            ],
          },
          {
            items: [
              'Phased migration: integration tests with Testcontainers first as a safety net, then one domain at a time (Coin and Chatbot, then Ledger, finally Auth and User)',
              'Security at the gateway: JWT in an HttpOnly cookie validated once, identity passed to services in headers, per-IP rate limiting, a 1 MB request cap and Cloudflare Turnstile on sign-in, sign-up and password reset',
              'Getting money right: closed access to other users’ data (IDOR), negative or zero amounts, OTP code reuse and wallet precision errors; the buy price is a weighted average when you buy the same asset again',
            ],
          },
          {
            items: [
              'How CI/CD pipelines work and how to use them, from automated checks to the production release',
              'How to deploy to a Linux server, including exposing the app with cloudflared',
              'How the containers of a Docker Compose stack talk to each other',
            ],
          },
        ],
      },
      {
        slug: 'piocart',
        name: 'PioCart',
        tagline: 'Full-stack e-commerce',
        description:
          'A Spring Boot backend and a Next.js storefront: catalog with search and filters, cart, Stripe checkout, order history and an admin area, with role-based JWT login.',
        role: 'Personal project.',
        stack: ['Spring Boot 3', 'Next.js', 'PostgreSQL', 'Stripe', 'Docker'],
        status: 'online',
        ...projectLinks.piocart,
        screens: [
          { src: screen('piocart', 'home'), caption: 'Home' },
          { src: screen('piocart', 'catalog'), caption: 'Catalog' },
          { src: screen('piocart', 'product'), caption: 'Product' },
          { src: screen('piocart', 'cart-drawer'), caption: 'Cart drawer' },
          { src: screen('piocart', 'cart'), caption: 'Cart' },
          { src: screen('piocart', 'order'), caption: 'Order details' },
        ],
        details: [
          {
            title: 'What I built',
            items: [
              'A complete shop: a Spring Boot backend with PostgreSQL and a Next.js storefront with Server Actions, a catalog of 45 products in 6 categories, Stripe Checkout payments and an admin area for catalog and orders',
            ],
          },
          {
            title: 'Technical challenge',
            items: [
              'A payment you can trust: an order is confirmed only after checking with Stripe the amount paid, and cancelling it before shipping refunds the payment and puts the items back in stock',
            ],
          },
          {
            title: "A choice I'm proud of",
            items: [
              'Only tested code goes live: Vercel’s automatic deploys are disabled and the pipeline releases the backend first, then the frontend, then checks the SEO of the production site',
            ],
          },
        ],
        story: [
          {
            text: 'It started as a REST API for an e-commerce site, and I wanted to take it all the way to a complete shop: catalog, cart, payment, order history and an admin area, with a real deployment. The demo has a sample catalog of 45 products and Stripe payments run in test mode, so no real money moves.',
          },
          {
            text: 'A Spring Boot backend with PostgreSQL and a Next.js storefront with React 19, Tailwind and shadcn/ui.',
            items: [
              'The browser never calls the backend: every request goes through the Next.js server (Server Components, Server Actions and route handlers)',
              'Stateless JWT authentication with USER and ADMIN roles, the token kept in an httpOnly cookie',
              'Backend in Docker on my Ubuntu server, published over HTTPS with Tailscale Funnel and no open ports; storefront on Vercel, with its functions in Frankfurt close to the backend',
              'CI/CD with GitHub Actions: Testcontainers tests, lint and typecheck, then a backend deploy over Tailscale and SSH that rolls back to the previous commit if it does not start, only then the frontend deploy, and finally an SEO check on the production site',
            ],
          },
          {
            items: [
              'Payment with Stripe Checkout: the order starts as pending and is confirmed only after checking with Stripe that the right amount was paid; only then is stock decremented and the cart emptied',
              'Cancelling an order that has not shipped refunds the payment and puts the items back in stock',
              'A cart with optimistic updates that roll back when the backend refuses a change, for example because of low stock',
              'Carts and orders resolved from the token: other users’ orders answer 404',
              'Domain rules in the backend: a product that was ordered or a category with products cannot be deleted, and uploaded images are checked for type and size',
              'A catalog with filters, search, sorting and pagination in the URL',
              'Careful SEO: a description and canonical for every page, structured data for products and categories, generated preview images, a sitemap submitted to Google Search Console and a script that checks title, description, canonical and JSON-LD in CI',
            ],
          },
          {
            items: [
              'JPA defaults need checking: a cascade on a ManyToOne relation deleted parent entities, the user table had to be renamed because it is a reserved word in PostgreSQL, and images stored as large objects can only be read inside a transaction',
              'An order created is not an order paid: the history shows only orders whose payment Stripe has verified, so abandoned checkouts do not show up',
              'Routing every call through the Next.js server keeps the backend and the token out of the browser, but moves session, error and cache handling there',
              'Platform limits shape the design: Vercel accepts requests up to 4.5 MB, so product images are uploaded one at a time',
            ],
          },
        ],
      },
      {
        slug: 'booktribe',
        name: 'BookTribe',
        tagline: 'Spring Cloud microservices',
        description: 'Config server, discovery, gateway, feedback and notification services, with an Angular frontend and Keycloak.',
        role: 'Personal project.',
        stack: ['Spring Cloud', 'Angular', 'Keycloak', 'OpenFeign', 'Resilience4j', 'PostgreSQL'],
        status: 'repo',
        ...projectLinks.booktribe,
        details: [
          {
            title: 'What I built',
            items: [
              'Book-lending social network: borrowing, owner-approved returns and reviews, with Keycloak authentication and an OpenAPI-generated Angular client',
            ],
          },
          {
            title: 'Technical challenge',
            items: [
              'Splitting a monolith into Spring Cloud microservices in three phases: the infrastructure first (Config Server, Eureka, Gateway), then notifications, finally feedback with its own database',
            ],
          },
          {
            title: "A choice I'm proud of",
            items: [
              'Services call each other with OpenFeign behind Resilience4j circuit breakers: if feedback is down, the catalog stays usable instead of breaking',
            ],
          },
        ],
        story: [
          {
            text: 'A book-lending social network that started as a monolithic Spring Boot and Angular application. I used it to learn how to split a system into microservices with Spring Cloud, one domain at a time, without rewriting it from scratch.',
            items: [
              'A paginated catalog of the books shared by the community',
              'Publishing your own books with a cover, shareable or archived',
              'Borrowing and returning, with the return approved by the owner',
              'Ratings and reviews on the books you borrowed',
            ],
          },
          {
            text: 'Spring Boot 3 microservices on Spring Cloud: every service reads its configuration from the Config Server and registers with Eureka, and the Angular frontend talks only to the gateway.',
            items: [
              'Spring Cloud Gateway as the single entry point, with CORS configured there instead of in each service',
              'Services: books and loans, feedback with its own database, email notifications with Thymeleaf templates',
              'Authentication delegated to Keycloak: services validate the JWT as resource servers, the frontend uses keycloak-js with PKCE',
              'An Angular client generated with ng-openapi-gen from the merged specs of the two services',
              'Deployment prepared: multi-stage Dockerfiles, a production Docker Compose with Postgres and Keycloak, the frontend meant for Vercel and the backend for my server via Tailscale Funnel',
            ],
          },
          {
            items: [
              'A three-phase migration, each step checked against a real stack: throwaway Postgres, Keycloak and MailDev, and real JWTs',
              'Feedback stores only the book id instead of a JPA foreign key, so the two domains have separate databases',
              'Service-to-service calls with OpenFeign and Resilience4j circuit breakers with fallbacks: if feedback is down the book list shows a rating of 0, if books are down feedback answers 503 with a clear message',
              'Configuration from environment variables with local defaults, plus an optional seeder with sample books, loans and reviews',
            ],
          },
          {
            items: [
              'Extracting a service surfaces bugs the monolith was hiding: an email template looked up by the wrong name in code that was never reached, and an ownership check that compared a string with an integer',
              'Identity does not travel between microservices on its own: the JWT was not forwarded on Feign calls until I added an interceptor',
              'Resilience has to be tested in the failure case: with a misnamed property the fallbacks never fired, and I only noticed by shutting a service down',
              'Microservices have a concrete cost: turning a join into a network call forces you to decide what to show when the other service does not answer, and five JVMs with Keycloak and Postgres take about 3 GB of RAM',
            ],
          },
        ],
      },
    ],
  },
  caseStudy: {
    eject: 'Eject cartridge',
    sections: ['The problem', 'Architecture', 'Technical choices', 'What I learned'],
    placeholder: '[To be written]',
    gallery: 'Screenshots',
    prevScreen: 'Previous screenshot',
    nextScreen: 'Next screenshot',
  },
  skills: {
    title: 'Skills',
    subtitle: 'Moves',
    countLabel: 'moves',
    pocket: 'pocket',
    hint: 'switch pocket',
    prev: 'Previous pocket',
    next: 'Next pocket',
    groups: [
      { type: 'Backend', items: ['Java 17+', 'Spring Boot 3', 'Spring Security', 'Spring Data JPA', 'Spring Batch', 'REST API', 'JWT', 'OAuth2', 'Keycloak', 'WebSocket', 'Node.js', 'Python', 'Django', 'Twisted', 'SQLAlchemy'] },
      { type: 'Frontend', items: ['Angular 14–20', 'RxJS', 'TypeScript', 'Angular Material', 'React 18', 'Redux', 'Tailwind CSS', 'Bootstrap', 'SCSS'] },
      { type: 'Database', items: ['PostgreSQL', 'MySQL', 'Oracle DB', 'MongoDB', 'H2', 'Elasticsearch', 'Liquibase', 'Supabase'] },
      { type: 'DevOps & Tools', items: ['Docker', 'Docker Compose', 'Git', 'GitFlow', 'GitHub', 'GitLab', 'CI/CD', 'Maven', 'Gradle', 'NPM', 'Kafka', 'AWS', 'Kubernetes', 'OpenShift'] },
      { type: 'Architecture', items: ['Monolithic REST', 'Microservices', 'Layered Architecture', 'DTO/DAO/MVC', 'Design Pattern (Singleton, Factory, Strategy, Builder)'] },
      { type: 'Integrations', items: ['Stripe', 'Razorpay', 'CoinGecko API', 'Gemini AI', 'Gmail SMTP', 'WSO2', 'Siemens TIA Portal'] },
      { type: 'GenAI & AI Tools', items: ['Claude', 'Claude Code', 'Model Context Protocol (MCP)', 'Agent Skills', 'Subagents', 'LLM integration via API (Gemini AI, Claude AI)', 'Copilot', 'Copilot CLI'] },
      { type: 'Testing', items: ['JUnit', 'Spring Boot Test', 'Mockito', 'Playwright'] },
      { type: 'IDEs & More', items: ['IntelliJ IDEA', 'VS Code', 'Eclipse STS', 'Postman'] },
      { type: 'Systems & Self-Hosting', items: ['Ubuntu Server', 'UFW Firewall', 'Nginx', 'Nginx Proxy Manager', 'Cockpit', 'Portainer', 'Nextcloud', 'Pi-hole'] },
    ],
  },
  contact: {
    title: 'Contact',
    subtitle: 'Save',
    question: 'Save the contact before you quit?',
    text: 'Open to fullstack or backend roles at product, SaaS or consulting companies.',
    links: [
      { label: 'Email', icon: 'mail', href: `mailto:${site.email}` },
      { label: 'WhatsApp', icon: 'phone', href: site.whatsapp },
      { label: 'LinkedIn', icon: 'card', href: site.linkedin },
      { label: 'GitHub', icon: 'branch', href: site.github },
    ],
    form: {
      title: 'Leave a message',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      placeholders: { name: 'Jane Smith', email: 'jane@example.com', message: 'Hi Giuseppe, I am reaching out about…' },
      submit: 'Send',
      sending: 'Sending…',
      saving: 'Saving… do not turn off',
      saved: 'Game saved!',
      sent: 'Message sent! I will reply as soon as I can.',
      error: 'The message did not go through. Try again or write to me directly at',
    },
  },
  footer: 'Giuseppe Pio Ruocco · Naples, Italy',
}
