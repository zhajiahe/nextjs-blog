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
    imgSrc: '/static/images/google.png',
    href: 'https://github.com/zhajiahe/my-baby',
  },
]

export default projectsData
