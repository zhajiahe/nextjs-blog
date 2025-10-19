'use client'

import { useParams } from 'next/navigation'
import { usePathname, useRouter } from '@/i18n/navigation'
import { locales, localeLabels, type Locale } from '@/i18n/config'

const LocaleSwitch = () => {
  const params = useParams()
  const pathname = usePathname()
  const router = useRouter()
  const currentLocale = (params?.locale as Locale) || 'zh'

  const handleLocaleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale })
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
