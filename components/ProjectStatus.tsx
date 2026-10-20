import type { Project } from '@/content/types'
import { PixelIcon } from './PixelIcons'

// ONLINE with a blinking led, or REPO with a folder icon.
export function ProjectStatus({ status, online, repo }: { status: Project['status']; online: string; repo: string }) {
  return status === 'online' ? (
    <span className="status pixel icon-line">
      <i className="led" aria-hidden="true" />
      {online.toUpperCase()}
    </span>
  ) : (
    <span className="muted pixel icon-line">
      <PixelIcon name="folder" color="var(--yellow)" />
      {repo.toUpperCase()}
    </span>
  )
}
