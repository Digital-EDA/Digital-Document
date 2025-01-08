import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
    { text: '首页', link: '/' },
    {
        text: '文档',
        items: [
            { text: '快速开始', link: '/guide/introduction.md' },
            { text: '语言服务', link: '/guide/ls-introduction.md' },
            { text: '项目管理', link: '/guide/pm-introduction.md' }
        ]
    },
    {
        text: '关于',
        link: '/guide/about.md'
    },
])

export const enNavbar = defineNavbarConfig([
    { text: 'Home', link: '/en/' },
    { text: 'Document', link: '/en/blog/' },
    {
        text: 'Notes',
        items: [
            { text: 'Demo', link: '/en/notes/demo/README.md' }
        ]
    },
])

