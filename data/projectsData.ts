interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '宝宝成长记录网站',
    description: `一个记录宝宝成长过程的网站，包括宝宝的照片、成长记录、日记里程碑等。
    使用Cursor Vibe Coding完成，支持本地部署和Vercel部署（需要有域名）`,
    imgSrc: 'https://image.20250530.space/2025/10/1760840104864-pasted-1760840100405.png',
    href: 'https://github.com/zhajiahe/my-baby',
  },
  {
    title: '个人web图床',
    description: `基于cloudflare免费资源实现的个人免费图床。
    同样使用Cursor Vibe Coding完成，支持Cloudflare Worker部署，
    主要用于个人博客内的图片展示`,
    imgSrc: 'https://image.20250530.space/2025/10/1760596214950-pasted-1760596217728.png',
    href: 'https://github.com/zhajiahe/r2-image-host'
  }
]

export default projectsData
