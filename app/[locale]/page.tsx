import { LangSwitch } from '@/components/LangSwitch'
import { PixelAvatar } from '@/components/PixelAvatar'
import { ThemeToggle } from '@/components/ThemeToggle'
import { getDictionary, isLocale, type Locale } from '@/content'
import { site } from '@/content/shared'
import { profileJsonLd } from '@/lib/seo'
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
  const [featured, ...party] = t.projects.items

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
                <p className="status">■ {t.hero.available.toUpperCase()}</p>
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
            <Window>
              <p className="label">{t.profile.offCode.label.toUpperCase()}</p>
              <p>{t.profile.offCode.text}</p>
            </Window>
            <Window className="window--yellow">
              <p className="pixel">{t.profile.question.title}</p>
              <a className="button" href={`mailto:${site.email}`}>
                ▶ {t.profile.question.button.toUpperCase()}
              </a>
            </Window>
          </div>
        </section>

        <section id="viaggio">
          <SectionTitle title={t.journey.title} subtitle={t.journey.subtitle} />
          <div className="grid">
            {[t.journey.past, t.journey.present].map((slot) => (
              <Window key={slot.label}>
                <p className="row pixel">
                  <span>{slot.label.toUpperCase()}</span>
                  <span className="muted">{slot.period}</span>
                </p>
                <ul className="plain">
                  {slot.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Window>
            ))}
            <Window className="window--dashed">
              <p className="row pixel">
                <span>{t.journey.future.label.toUpperCase()}</span>
                <span className="muted">{t.journey.future.period}</span>
              </p>
              <p className="muted">{t.journey.future.text}</p>
            </Window>
          </div>
        </section>

        <section id="progetti">
          <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} />
          <div className="party">
            <Window className="party__featured">
              <h3 className="pixel">{featured.name}</h3>
              <p className="muted">{featured.tagline}</p>
              <p>{featured.description}</p>
              <p className="muted">
                <strong>{t.ui.myRole}:</strong> {featured.role}
              </p>
              <div className="actions">
                <a className="button button--primary" href={`#${featured.slug}`}>
                  ▶ {t.ui.caseStudy.toUpperCase()}
                </a>
                {featured.demo && (
                  <a className="button" href={featured.demo}>
                    {t.ui.demo.toUpperCase()}
                  </a>
                )}
                {featured.code && (
                  <a className="button" href={featured.code}>
                    {t.ui.code.toUpperCase()}
                  </a>
                )}
              </div>
            </Window>
            <ul className="plain party__list">
              {party.map((p) => (
                <li key={p.slug}>
                  <a className="window party__slot" href={p.demo ?? p.code}>
                    <span className="pixel">{p.name}</span>
                    <span className="muted">{p.tagline}</span>
                    <span className={p.status === 'online' ? 'status' : 'muted'}>
                      {(p.status === 'online' ? t.ui.online : t.ui.repo).toUpperCase()}
                    </span>
                  </a>
                </li>
              ))}
              <li className="party__empty">— {t.projects.emptySlot} —</li>
            </ul>
          </div>
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
              {t.contact.links.map((l, i) => (
                <li key={l.href}>
                  <a href={l.href}>
                    {i === 0 ? '▶ ' : ''}
                    {l.label.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </Window>
        </section>
      </main>

      <footer className="site-footer">{t.footer}</footer>
    </>
  )
}
