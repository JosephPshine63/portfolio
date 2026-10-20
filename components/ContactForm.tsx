'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { PixelIcon } from './PixelIcons'
import type { ContactForm as Texts } from '@/content/types'
import { site } from '@/content/shared'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const NOTCHES = 10

// The site has no server, so the form posts to Web3Forms, which forwards the
// message to site.email.
export function ContactForm({ t }: { t: Texts }) {
  const [status, setStatus] = useState<Status>('idle')
  const [filled, setFilled] = useState(0)

  // Save bar: fills while the request is out, never past the last notch until
  // it succeeds, so it does not claim more than it knows.
  useEffect(() => {
    if (status === 'sent') setFilled(NOTCHES)
    if (status !== 'sending') return
    setFilled(0)
    const id = window.setInterval(() => setFilled((n) => Math.min(n + 1, NOTCHES - 1)), 140)
    return () => window.clearInterval(id)
  }, [status])

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    data.append('access_key', site.web3formsKey)
    data.append('subject', `gprdev.com: ${data.get('name')}`)
    data.append('from_name', 'gprdev.com')
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json()
      if (!json.success) throw new Error(json.message)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="cf-name">{t.name}</label>
        <input id="cf-name" name="name" autoComplete="name" placeholder={t.placeholders.name} required maxLength={100} />
      </div>
      <div className="field">
        <label htmlFor="cf-email">{t.email}</label>
        <input id="cf-email" name="email" type="email" autoComplete="email" placeholder={t.placeholders.email} required maxLength={200} />
      </div>
      <div className="field">
        <label htmlFor="cf-message">{t.message}</label>
        <textarea id="cf-message" name="message" placeholder={t.placeholders.message} required maxLength={5000} />
      </div>
      <input className="contact-form__trap" type="checkbox" name="botcheck" tabIndex={-1} aria-hidden="true" />
      <button type="submit" className="button button--primary" disabled={status === 'sending'}>
        {status === 'sending' ? t.sending : `▶ ${t.submit.toUpperCase()}`}
      </button>
      <div role="status" aria-live="polite">
        {(status === 'sending' || status === 'sent') && (
          <div className={`save-bar${status === 'sent' ? ' save-bar--done' : ''}`}>
            <p className="save-bar__title">
              <PixelIcon name="floppy" color="var(--blue)" />
              {(status === 'sent' ? t.saved : t.saving).toUpperCase()}
            </p>
            <div className="save-bar__notches" aria-hidden="true">
              {Array.from({ length: NOTCHES }, (_, i) => (
                <i key={i} className={i < filled ? 'on' : undefined} />
              ))}
            </div>
            {status === 'sent' && <p>{t.sent}</p>}
          </div>
        )}
        {status === 'error' && (
          <p className="contact-form__status">
            {t.error} <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        )}
      </div>
    </form>
  )
}
