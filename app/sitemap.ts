import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import { locales } from '@/i18n/config'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  // Generate blog routes for all locales
  const blogRoutes = locales.flatMap((locale) =>
    allBlogs
      .filter((post) => !post.draft)
      .map((post) => ({
        url: `${siteUrl}/${locale}/${post.path}`,
        lastModified: post.lastmod || post.date,
      }))
  )

  // Generate static routes for all locales
  const routes = locales.flatMap((locale) =>
    ['', 'blog', 'projects', 'tags', 'about'].map((route) => ({
      url: `${siteUrl}/${locale}/${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    }))
  )

  return [...routes, ...blogRoutes]
}
