import NextImage, { ImageProps } from 'next/image'

const basePath = process.env.BASE_PATH

const Image = ({ src, ...rest }: ImageProps) => {
  // Only prepend basePath for relative paths, not external URLs
  const isExternalUrl = src?.startsWith('http://') || src?.startsWith('https://')
  const finalSrc = isExternalUrl ? src : `${basePath || ''}${src}`

  return <NextImage src={finalSrc} {...rest} />
}

export default Image
