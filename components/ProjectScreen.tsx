import type { Project } from '@/content/types'

// Cover of a project: its first screenshot, or the name on a blank screen until one exists.
// Decorative, since the project name is always shown next to it.
export function ProjectScreen({ project, className }: { project: Project; className?: string }) {
  const cover = project.screens?.[0]
  const classes = ['project-card__screen', className].filter(Boolean).join(' ')
  return cover ? (
    <img className={`${classes} project-card__screen--image`} src={cover.src} alt="" loading="lazy" />
  ) : (
    <div className={classes} aria-hidden="true">
      {project.name}
    </div>
  )
}
