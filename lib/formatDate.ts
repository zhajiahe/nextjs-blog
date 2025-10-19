export function formatDate(dateString: string, locale: string = 'zh'): string {
  const date = new Date(dateString)

  if (locale === 'zh' || locale.startsWith('zh')) {
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
