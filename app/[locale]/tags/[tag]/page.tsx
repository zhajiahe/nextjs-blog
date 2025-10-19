import { slug } from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { allBlogs } from 'contentlayer/generated'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'

const POSTS_PER_PAGE = 5

export async function generateMetadata(props: {
  params: Promise<{ tag: string }>
}): Promise<Metadata> {
  const params = await props.params
  // Next.js automatically decodes URL parameters, so params.tag is already decoded
  // But we still use decodeURI for safety in case it's still encoded
  const tag = params.tag.includes('%') ? decodeURI(params.tag) : params.tag
  return genPageMetadata({
    title: tag,
    description: `${siteMetadata.title} ${tag} tagged content`,
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${siteMetadata.siteUrl}/tags/${tag}/feed.xml`,
      },
    },
  })
}

export const generateStaticParams = async () => {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  // Don't encode the tag here - Next.js will handle URL encoding automatically
  return tagKeys.map((tag) => ({
    tag: tag,
  }))
}

export default async function TagPage(props: { params: Promise<{ tag: string }> }) {
  const params = await props.params
  // Next.js automatically decodes URL parameters, so params.tag is already decoded
  // But we still use decodeURI for safety in case it's still encoded
  const tag = params.tag.includes('%') ? decodeURI(params.tag) : params.tag
  // Capitalize first letter, keep the rest as is for better Chinese character support
  const title = tag.charAt(0).toUpperCase() + tag.slice(1)
  // Use slug() on the tag parameter to match how tags are stored and compared
  const slugifiedTag = slug(tag)
  const filteredPosts = allCoreContent(
    sortPosts(
      allBlogs.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(slugifiedTag))
    )
  )
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = filteredPosts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: totalPages,
  }

  return (
    <ListLayout
      posts={filteredPosts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title={title}
    />
  )
}
