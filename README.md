# Next.js 博客模板

一个基于 [Next.js](https://nextjs.org/) 和 [Tailwind CSS](https://tailwindcss.com/) 的现代化博客模板，使用 [Contentlayer](https://www.contentlayer.dev/) 管理 Markdown 内容。

## ✨ 主要特性

- ⚡ Next.js 14 + TypeScript + App Router
- 🎨 Tailwind CSS 样式定制
- 📝 MDX 支持，可在 Markdown 中使用 JSX
- 🌙 深色/浅色主题切换
- 📱 响应式设计，支持移动端
- 🔍 全文搜索 (Kbar)
- 📊 多种分析工具集成 (可选)
- 💬 评论系统 (Giscus/Utterances)
- 📰 RSS 订阅和站点地图
- 🚀 优化的 SEO 和性能

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone <你的仓库地址>
cd nextjs-blog
```

### 2. 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 3. 个性化配置

- 编辑 `data/siteMetadata.js` - 站点基本信息
- 修改 `data/authors/default.md` - 作者信息
- 更新 `data/headerNavLinks.js` - 导航链接
- 替换 `data/logo.svg` - 你的logo

### 4. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 5. 添加博客文章

在 `data/blog/` 目录下创建 `.mdx` 或 `.md` 文件，使用 frontmatter 定义元数据：

```yaml
---
title: '博客文章标题'
date: '2024-01-01'
tags: ['标签1', '标签2']
summary: '文章摘要'
---
```

## 📁 项目结构

```
data/
├── siteMetadata.js    # 站点配置
├── authors/           # 作者信息
├── blog/              # 博客文章
└── headerNavLinks.js  # 导航链接

app/                   # Next.js App Router 页面
components/            # React 组件
layouts/               # 页面布局模板
public/                # 静态资源
```

## 🎨 自定义样式

- `tailwind.config.js` - Tailwind 配置
- `app/globals.css` - 全局样式
- `data/siteMetadata.js` - 主题色彩配置

## 🚢 部署

### Vercel (推荐)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/zhajiahe/nextjs-blog)

### 其他平台

```bash
npm run build
npm run export  # 静态导出
```

## 📚 更多配置

查看 [完整文档](https://github.com/timlrx/tailwind-nextjs-starter-blog) 获取详细配置说明。

## 📄 开源许可

MIT License © [Timothy Lin](https://www.timlrx.com)

