import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
    { text: '首页', link: '/' },
    {
        text: '文档',
        items: [
            { text: '快速开始', icon: 'carbon:book', link: '/guide/quick-start/introduction.md' },
            { text: '语言服务', icon: 'carbon:code', link: '/guide/lsp/introduction.md' },
            { text: '项目管理', icon: 'carbon:task', link: '/guide/pm/introduction.md' }
        ]
    },
    {
        text: '关于',
        link: '/guide/about.md'
    },
])

export const enNavbar = defineNavbarConfig([
    { text: '首页', link: '/en/' },
    {
        text: '文档',
        items: [
            { text: 'Quick Start', icon: 'carbon:book', link: '/en/guide/introduction.md' },
            { text: 'Language Server', icon: 'carbon:code', link: '/en/guide/ls-introduction.md' },
            { text: 'Project Management', icon: 'carbon:task', link: '/en/guide/pm-introduction.md' }
        ]
    },
    {
        text: '关于',
        link: '/en/guide/about.md'
    },
])

