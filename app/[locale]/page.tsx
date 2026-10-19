import { CartridgeLink } from '@/components/CartridgeLink'
import { ContactForm } from '@/components/ContactForm'
import { LangSwitch } from '@/components/LangSwitch'
import { PixelAvatar } from '@/components/PixelAvatar'
import { ProjectCarousel } from '@/components/ProjectCarousel'
import { ThemeToggle } from '@/components/ThemeToggle'
import { getDictionary, isLocale, type Locale } from '@/content'
import { site } from '@/content/shared'
import { profileJsonLd, projectPath } from '@/lib/seo'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <h2 className="section-title">
      {title} <span className="section-title__game">▸ {subtitle.toUpperCase()}</span>
    </h2>
  )
}

function Window({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`window ${className}`}>{children}</div>
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getDictionary(locale)
  const other: Locale = locale === 'it' ? 'en' : 'it'

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd(locale)) }} />

      <header className="site-header">
        <nav className="window site-nav" aria-label="Main">
          <a href={`/${locale}/`} className="logo">
            GPR<span className="accent">.</span>DEV
          </a>
          <div className="site-nav__links">
            <a href="#progetti">▶ {t.nav.projects.toUpperCase()}</a>
            <a href="#viaggio">{t.nav.experience.toUpperCase()}</a>
            <a href="#mosse">{t.nav.skills.toUpperCase()}</a>
            <a href="#salva">{t.nav.contact.toUpperCase()}</a>
            <LangSwitch target={other} label={t.ui.switchLanguage} />
            <ThemeToggle toDay={t.ui.toDay} toNight={t.ui.toNight} />
          </div>
        </nav>
      </header>

      <main className="page">
        <section id="top" className="hero">
          <Window className="trainer-card">
            <p className="label">{t.hero.cardTitle.toUpperCase()}</p>
            <div className="trainer-card__id">
              <div className="trainer-card__portrait">
                <PixelAvatar label={t.ui.avatarAlt} />
              </div>
              <div>
                <h1 className="trainer-card__name">{t.hero.name}</h1>
                <p className="trainer-card__role">{t.hero.role}</p>
                <p className="muted">{t.hero.base}</p>
              </div>
            </div>
            <dl className="stats">
              {t.hero.stats.map((s) => (
                <div key={s.label}>
                  <dt>{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
            <div className="subclasses">
              <p className="label">{t.hero.subclasses.label.toUpperCase()}</p>
              <ul className="chips">
                {t.hero.subclasses.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </Window>
          <div className="hero__side">
            <Window className="dialog">
              <p>{t.hero.dialog}</p>
            </Window>
            <div className="actions">
              <a className="button button--primary" href="#progetti">
                ▶ {t.hero.ctaProjects.toUpperCase()}
              </a>
              <a className="button" href={site.cv}>
                {t.hero.ctaCv.toUpperCase()}
              </a>
            </div>
          </div>
        </section>

        <section id="profilo">
          <SectionTitle title={t.profile.title} subtitle={t.profile.subtitle} />
          <div className="grid">
            <Window className="span-2">
              <p className="label">{t.profile.mission.label.toUpperCase()}</p>
              <p>{t.profile.mission.text}</p>
            </Window>
            <Window>
              <p className="label">{t.profile.languages.label.toUpperCase()}</p>
              <ul className="plain">
                {t.profile.languages.items.map((l) => (
                  <li key={l.name} className="row">
                    <span>{l.name}</span>
                    <span className="muted">{l.level}</span>
                  </li>
                ))}
              </ul>
            </Window>
            <Window>
              <p className="label">{t.profile.stack.label.toUpperCase()}</p>
              <ul className="chips">
                {t.profile.stack.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Window>
          </div>
        </section>

        <section id="viaggio">
          <SectionTitle title={t.journey.title} subtitle={t.journey.subtitle} />
          <ol className="save-slots">
            {t.journey.slots.map((slot, i) => (
              <li key={slot.org}>
                <article className={`window save-slot${slot.current ? ' save-slot--current' : ''}`}>
                  <p className="save-slot__head">
                    <span>
                      {t.journey.slotLabel.toUpperCase()} {i + 1}
                    </span>
                    {slot.current && <span aria-hidden="true">▶</span>}
                  </p>
                  <div className="save-slot__body">
                    <div>
                      <h3 className="save-slot__org">{slot.org}</h3>
                      {slot.role && <p className="trainer-card__role">{slot.role}</p>}
                      <p className="muted">
                        {slot.period}
                        {slot.place ? ` · ${slot.place}` : ''}
                      </p>
                    </div>
                    <div className="save-slot__details">
                      <ul className="plain">
                        {slot.lines.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                      {slot.tags && (
                        <ul className="chips">
                          {slot.tags.map((tag) => (
                            <li key={tag}>{tag}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  {slot.details && (
                    <details className="save-slot__more" open={slot.current}>
                      <summary>{t.journey.detailsLabel.toUpperCase()}</summary>
                      {slot.details.map((g) => (
                        <div key={g.title ?? g.items[0]} className="save-slot__group">
                          {g.title && <p className="label">{g.title.toUpperCase()}</p>}
                          <ul className="plain">
                            {g.items.map((d) => (
                              <li key={d}>{d}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </details>
                  )}
                </article>
              </li>
            ))}
            <li className="save-slot save-slot--empty">
              <p className="pixel">{t.journey.newGame.label.toUpperCase()}</p>
              <p className="muted">{t.journey.newGame.text}</p>
            </li>
          </ol>
        </section>

        <section id="progetti">
          <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} />
          <ProjectCarousel
            names={t.projects.items.map((p) => p.name)}
            labels={{
              list: t.projects.title,
              prev: t.ui.prevProject,
              next: t.ui.nextProject,
              goTo: t.ui.goToProject,
            }}
          >
            {t.projects.items.map((p) => (
              <li key={p.slug}>
                <article className="window project-card">
                  {/* TODO: real screenshot per project */}
                  <div className="project-card__screen" aria-hidden="true">
                    {p.name}
                  </div>
                  <div className="project-card__head">
                    <h3 className="pixel">{p.name}</h3>
                    <span className={p.status === 'online' ? 'status pixel' : 'muted pixel'}>
                      {(p.status === 'online' ? t.ui.online : t.ui.repo).toUpperCase()}
                    </span>
                  </div>
                  <p className="muted">{p.tagline}</p>
                  <p>{p.description}</p>
                  <ul className="chips">
                    {p.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  {p.details && (
                    <details className="save-slot__more">
                      <summary>{t.projects.moreLabel.toUpperCase()}</summary>
                      {p.details.map((g) => (
                        <div key={g.title ?? g.items[0]} className="save-slot__group">
                          {g.title && <p className="label">{g.title.toUpperCase()}</p>}
                          <ul className="plain">
                            {g.items.map((d) => (
                              <li key={d}>{d}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </details>
                  )}
                  <div className="actions project-card__actions">
                    <CartridgeLink
                      className="button button--primary"
                      href={projectPath(locale, p.slug)}
                      name={p.name}
                      status={t.ui.inserting}
                    >
                      ▶ {t.ui.caseStudy.toUpperCase()}
                    </CartridgeLink>
                    {p.demo && (
                      <a className="button" href={p.demo}>
                        {t.ui.demo.toUpperCase()}
                      </a>
                    )}
                    {p.code && (
                      <a className="button" href={p.code}>
                        {t.ui.code.toUpperCase()}
                      </a>
                    )}
                  </div>
                </article>
              </li>
            ))}
            <li className="carousel__empty">— {t.projects.emptySlot} —</li>
          </ProjectCarousel>
        </section>

        <section id="mosse" className="grid">
          <div>
            <SectionTitle title={t.skills.title} subtitle={t.skills.subtitle} />
            <Window>
              <ul className="plain moves">
                {t.skills.groups.map((g) => (
                  <li key={g.type} className="row">
                    <span>{g.items.join(' · ')}</span>
                    <span className="type">{g.type.toUpperCase()}</span>
                  </li>
                ))}
              </ul>
            </Window>
          </div>
          <div id="medaglie">
            <SectionTitle title={t.certifications.title} subtitle={t.certifications.subtitle} />
            <Window>
              <ul className="plain">
                {t.certifications.items.map((c) => (
                  <li key={c.name} className="row">
                    <span>{c.name}</span>
                    <span className="muted">
                      {c.issuer}
                      {c.date ? ` · ${c.date}` : ''}
                    </span>
                  </li>
                ))}
              </ul>
            </Window>
          </div>
        </section>

        <section id="salva">
          <Window className="contact">
            <div>
              <SectionTitle title={t.contact.title} subtitle={t.contact.subtitle} />
              <p className="pixel">{t.contact.question}</p>
              <p className="muted">{t.contact.text}</p>
            </div>
            <ul className="plain menu">
              {t.contact.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label.toUpperCase()}</a>
                </li>
              ))}
            </ul>
          </Window>
          <Window className="contact-form">
            <h3 className="contact-form__title">{t.contact.form.title}</h3>
            <ContactForm t={t.contact.form} />
          </Window>
        </section>
      </main>

      <footer className="site-footer">{t.footer}</footer>
    </>
  )
}
