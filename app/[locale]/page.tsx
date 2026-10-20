import { CartridgeLink } from '@/components/CartridgeLink'
import { ContactForm } from '@/components/ContactForm'
import { LangSwitch } from '@/components/LangSwitch'
import { PixelAvatar } from '@/components/PixelAvatar'
import { PixelIcon, SkillIcon } from '@/components/PixelIcons'
import { ProjectCarousel } from '@/components/ProjectCarousel'
import { ProjectScreen } from '@/components/ProjectScreen'
import { ProjectStatus } from '@/components/ProjectStatus'
import { SkillBag } from '@/components/SkillBag'
import { ThemeToggle } from '@/components/ThemeToggle'
import { TypedDialog } from '@/components/TypedDialog'
import { getDictionary, isLocale, type Locale } from '@/content'
import { site } from '@/content/shared'
import type { IconName } from '@/content/types'
import { profileJsonLd, projectPath } from '@/lib/seo'
import { notFound } from 'next/navigation'
import type { CSSProperties, ReactNode } from 'react'

// CEFR scale for the language notches.
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

const SLOT_COLORS: Partial<Record<IconName, string>> = {
  briefcase: 'var(--t-4)',
  server: 'var(--t-2)',
  gear: 'var(--t-1)',
  book: 'var(--t-7)',
  cap: 'var(--t-5)',
}

const LINK_COLORS: Partial<Record<IconName, string>> = { mail: 'red', phone: 'green', card: 'blue', branch: 't-4' }

const skillColor = (group: number) => ({ '--c': `var(--t-${(group % 10) + 1})` }) as CSSProperties

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
            GPRDEV
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
                <p className="trainer-card__role icon-line">
                  <PixelIcon name="star" color="var(--blue)" />
                  {t.hero.role}
                </p>
                <p className="muted icon-line">
                  <PixelIcon name="pin" color="var(--red)" />
                  {t.hero.base}
                </p>
              </div>
            </div>
            <dl className="stats">
              {t.hero.stats.map((s) => (
                <div key={s.label}>
                  <dt className="icon-line">
                    <PixelIcon name={s.icon} color={s.icon === 'star' ? 'var(--yellow)' : 'var(--blue)'} />
                    {s.label}
                  </dt>
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
            <TypedDialog text={t.hero.dialog} />
            <div className="actions">
              <a className="button button--primary" href="#progetti">
                ▶ {t.hero.ctaProjects.toUpperCase()}
              </a>
              <a className="button" href={site.cv} target="_blank" rel="noopener">
                {t.hero.ctaCv.toUpperCase()}
              </a>
            </div>
          </div>
        </section>

        <section id="profilo">
          <SectionTitle title={t.profile.title} subtitle={t.profile.subtitle} />
          <div className="grid profile-grid">
            <Window className="mission">
              <PixelIcon name="flag" color="var(--red)" />
              <div>
                <p className="label">{t.profile.mission.label.toUpperCase()}</p>
                <p className="mission__state pixel">{t.profile.mission.state.toUpperCase()}</p>
                <p>{t.profile.mission.text}</p>
              </div>
            </Window>
            <Window>
              <p className="label">{t.profile.languages.label.toUpperCase()}</p>
              <ul className="plain">
                {t.profile.languages.items.map((l) => (
                  <li key={l.name} className="lang">
                    <span>{l.name}</span>
                    <span className="cefr" aria-hidden="true">
                      {LEVELS.map((lv, i) => (
                        <i key={lv} className={i <= LEVELS.indexOf(l.level) ? 'on' : undefined} />
                      ))}
                    </span>
                    <span className="muted pixel">{l.level}</span>
                  </li>
                ))}
              </ul>
              <p className="lang cefr__scale pixel muted" aria-hidden="true">
                <span />
                <span className="cefr">
                  {LEVELS.map((lv) => (
                    <span key={lv}>{lv}</span>
                  ))}
                </span>
                <span />
              </p>
            </Window>
            <Window>
              <p className="label">{t.profile.stack.label.toUpperCase()}</p>
              <ul className="chips stack">
                {t.profile.stack.items.map((s) => (
                  <li key={s.name} style={skillColor(s.group)}>
                    <SkillIcon index={s.group} />
                    {s.name}
                  </li>
                ))}
              </ul>
            </Window>
          </div>
        </section>

        <section id="viaggio">
          <SectionTitle title={t.journey.title} subtitle={t.journey.subtitle} />
          <ol className="save-slots" reversed>
            {t.journey.slots.map((slot, i) => (
              <li key={slot.org}>
                <article className={`window save-slot${slot.current ? ' save-slot--current' : ''}`}>
                  <p className="save-slot__head">
                    <span>
                      {t.journey.slotLabel.toUpperCase()} {t.journey.slots.length - i}
                    </span>
                    {slot.current && <span aria-hidden="true">▶</span>}
                  </p>
                  <div className="save-slot__body">
                    <div className="save-slot__who">
                      <span className="save-slot__icon">
                        <PixelIcon name={slot.icon} color={SLOT_COLORS[slot.icon]} />
                      </span>
                      <div>
                        <h3 className="save-slot__org">{slot.org}</h3>
                        {slot.role && <p className="trainer-card__role">{slot.role}</p>}
                        <p className="muted">
                          {slot.period}
                          {slot.place ? ` · ${slot.place}` : ''}
                        </p>
                      </div>
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
                        <div key={g.title ?? g.text} className="save-slot__group">
                          {g.title && <p className="label">{g.title.toUpperCase()}</p>}
                          <p>{g.text}</p>
                        </div>
                      ))}
                    </details>
                  )}
                </article>
              </li>
            ))}
            <li className="save-slot save-slot--empty">
              <p className="pixel">{t.journey.newGame.question}</p>
              <a className="button button--primary" href="#salva">
                ▶ {t.journey.newGame.cta.toUpperCase()}
              </a>
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
                  <ProjectScreen project={p} />
                  <div className="project-card__head">
                    <h3 className="pixel">{p.name}</h3>
                    <ProjectStatus status={p.status} online={t.ui.online} repo={t.ui.repo} />
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

        <section id="mosse">
          <SectionTitle title={t.skills.title} subtitle={t.skills.subtitle} />
          <SkillBag
            groups={t.skills.groups}
            labels={{
              list: t.skills.title,
              count: t.skills.countLabel,
              pocket: t.skills.pocket,
              hint: t.skills.hint,
              prev: t.skills.prev,
              next: t.skills.next,
            }}
          />
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
                  <a href={l.href}>
                    {l.icon && <PixelIcon name={l.icon} color={`var(--${LINK_COLORS[l.icon] ?? 'blue'})`} />}
                    {l.label.toUpperCase()}
                    {l.href.startsWith('mailto:') && <span className="menu__detail">{site.email}</span>}
                    {l.href === site.whatsapp && <span className="menu__detail">{site.phone}</span>}
                  </a>
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
