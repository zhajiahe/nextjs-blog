'use client'

import { useParams, usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { locales, localeLabels, type Locale } from '@/i18n/config'

const LocaleSwitch = () => {
  const params = useParams()
  const pathname = usePathname()
  const router = useRouter()
  const currentLocale = (params?.locale as Locale) || 'zh'

  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale === currentLocale) return

    // Remove the current locale from the pathname
    // pathname is like "/zh/blog" or "/en/projects"
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '')

    // Build the new path with the new locale
    const newPath = `/${newLocale}${pathWithoutLocale || ''}`

    router.push(newPath)
  }

  return (
    <div className="flex items-center space-x-1">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLocaleChange(locale)}
          className={`px-2 py-1 text-sm font-medium transition-colors ${
            currentLocale === locale
              ? 'text-primary-500 dark:text-primary-400'
              : 'hover:text-primary-500 dark:hover:text-primary-400 text-gray-700 dark:text-gray-300'
          }`}
          aria-label={`Switch to ${locale}`}
        >
          {localeLabels[locale]}
        </button>
      ))}
    </div>
  )
}

export default LocaleSwitch
