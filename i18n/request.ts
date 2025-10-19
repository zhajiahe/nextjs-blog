import { getRequestConfig } from 'next-intl/server'
import { locales, defaultLocale, type Locale } from './config'

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming locale parameter is valid
  const validLocale =
    locale && locales.some((l) => l === locale) ? (locale as Locale) : defaultLocale

  return {
    locale: validLocale,
    messages: (await import(`./messages/${validLocale}.json`)).default,
  }
})
