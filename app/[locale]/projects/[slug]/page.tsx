import { LangSwitch } from '@/components/LangSwitch'
import { ProjectCarousel } from '@/components/ProjectCarousel'
import { ProjectScreen } from '@/components/ProjectScreen'
import { ThemeToggle } from '@/components/ThemeToggle'
import { getDictionary, isLocale, locales, type Locale } from '@/content'
import { projectMetadata, projectPath } from '@/lib/seo'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Params = Promise<{ locale: string; slug: string }>

export const dynamicParams = false

export function generateStaticParams() {
  return locales.flatMap((locale) => getDictionary(locale).projects.items.map(({ slug }) => ({ locale, slug })))
}

function findProject(locale: string, slug: string) {
  if (!isLocale(locale)) return undefined
  const t = getDictionary(locale)
  const project = t.projects.items.find((p) => p.slug === slug)
  return project && { locale, t, project }
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params
  const found = findProject(locale, slug)
  return found ? projectMetadata(found.locale, found.project) : {}
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { locale: rawLocale, slug } = await params
  const found = findProject(rawLocale, slug)
  if (!found) notFound()
  const { locale, t, project } = found
  const other: Locale = locale === 'it' ? 'en' : 'it'

  return (
    <>
      <header className="site-header">
        <nav className="window site-nav" aria-label="Main">
          <a href={`/${locale}/`} className="logo">
            GPR<span className="accent">.</span>DEV
          </a>
          <div className="site-nav__links">
            <a href={`/${locale}/#progetti`}>◀ {t.caseStudy.eject.toUpperCase()}</a>
            <LangSwitch target={other} label={t.ui.switchLanguage} href={projectPath(other, project.slug)} />
            <ThemeToggle toDay={t.ui.toDay} toNight={t.ui.toNight} />
          </div>
        </nav>
      </header>

      <main className="page case-study">
        <section className="window case-study__intro">
          {project.screens ? (
            <ProjectCarousel
              className="carousel--screens"
              names={project.screens.map((s) => s.caption)}
              labels={{
                list: t.caseStudy.gallery,
                prev: t.caseStudy.prevScreen,
                next: t.caseStudy.nextScreen,
                goTo: t.ui.goToProject,
              }}
            >
              {project.screens.map((s) => (
                <li key={s.src}>
                  <figure>
                    <a href={s.src}>
                      <img src={s.src} alt={`${project.name}: ${s.caption}`} />
                    </a>
                    <figcaption className="muted">{s.caption}</figcaption>
                  </figure>
                </li>
              ))}
            </ProjectCarousel>
          ) : (
            <ProjectScreen project={project} className="case-study__screen" />
          )}
          <div className="project-card__head">
            <h1 className="case-study__title">{project.name}</h1>
            <span className={project.status === 'online' ? 'status pixel' : 'muted pixel'}>
              {(project.status === 'online' ? t.ui.online : t.ui.repo).toUpperCase()}
            </span>
          </div>
          <p className="trainer-card__role">{project.tagline}</p>
          <p>{project.description}</p>
          <p className="muted">
            <strong>{t.ui.myRole}:</strong> {project.role}
          </p>
          <ul className="chips">
            {project.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <div className="actions">
            {project.demo && (
              <a className="button button--primary" href={project.demo}>
                ▶ {t.ui.demo.toUpperCase()}
              </a>
            )}
            {project.code && (
              <a className="button" href={project.code}>
                {t.ui.code.toUpperCase()}
              </a>
            )}
          </div>
        </section>

        {t.caseStudy.sections.map((title, i) => {
          const chapter = project.story?.[i]
          return (
            <section key={title} className="window">
              <h2 className="case-study__heading">{title}</h2>
              {chapter ? (
                <>
                  {chapter.text && <p>{chapter.text}</p>}
                  {chapter.items && (
                    <ul className="case-study__list">
                      {chapter.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <p className="muted">{t.caseStudy.placeholder}</p>
              )}
            </section>
          )
        })}
      </main>

      <footer className="site-footer">{t.footer}</footer>
    </>
  )
}
