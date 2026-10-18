import { en } from './en'
import { it } from './it'
import type { Dictionary } from './types'

export const locales = ['it', 'en'] as const
export type Locale = (typeof locales)[number]

// Visitors with no language match land on English (see app/(root)/page.tsx).
export const defaultLocale: Locale = 'en'

const dictionaries: Record<Locale, Dictionary> = { it, en }

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}
