export const locales = ['zh', 'en'] as const
export const defaultLocale = 'zh' as const

export type Locale = (typeof locales)[number]

export const localeNames: Record<Locale, string> = {
  zh: '中文',
  en: 'English',
}

export const localeLabels: Record<Locale, string> = {
  zh: '中',
  en: 'EN',
}
