'use client'

import { useState, type FormEvent } from 'react'
import type { ContactForm as Texts } from '@/content/types'
import { site } from '@/content/shared'

type Status = 'idle' | 'sending' | 'sent' | 'error'

// The site has no server, so the form posts to Web3Forms, which forwards the
// message to site.email.
export function ContactForm({ t }: { t: Texts }) {
  const [status, setStatus] = useState<Status>('idle')

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
        {status === 'sent' && <p className="contact-form__status">{t.sent}</p>}
        {status === 'error' && (
          <p className="contact-form__status">
            {t.error} <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        )}
      </div>
    </form>
  )
}
