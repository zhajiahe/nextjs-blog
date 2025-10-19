import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { SearchProvider, SearchConfig } from 'pliny/search'
import siteMetadata from '@/data/siteMetadata'
import { locales } from '@/i18n/config'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const ogLocale = locale === 'zh' ? 'zh_CN' : 'en_US'

  return {
    alternates: {
      languages: {
        zh: `${siteMetadata.siteUrl}/zh`,
        en: `${siteMetadata.siteUrl}/en`,
        'x-default': `${siteMetadata.siteUrl}/zh`,
      },
    },
    openGraph: {
      locale: ogLocale,
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  if (!locales.some((l) => l === locale)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale })

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <SectionContainer>
        <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
          <Header />
          <main className="mb-auto">{children}</main>
        </SearchProvider>
        <Footer />
      </SectionContainer>
    </NextIntlClientProvider>
  )
}
