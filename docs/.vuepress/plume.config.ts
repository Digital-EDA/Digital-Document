import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar'
import { enNotes, zhNotes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
    logo: '/icon.png',

    appearance: true,  // 配置 深色模式

    social: [
        { icon: 'github', link: 'https://github.com/Digital-EDA/Digital-IDE' },
    ],
    // navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
    // aside: true, // 页内侧边栏， 默认显示在右侧
    // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

    /**
     * 文章版权信息
     * @see https://theme-plume.vuejs.press/guide/features/copyright/
     */
    // copyright: true,

    prevPage: true,   // 是否启用上一页链接
    nextPage: true,   // 是否启用下一页链接
    createTime: true, // 是否显示文章创建时间

    /* 站点页脚 */
    // footer: {
    //   message: 'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
    //   copyright: '',
    // },

    /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
    transition: {
      page: true,        // 启用 页面间跳转过渡动画
      postList: true,    // 启用 博客文章列表过渡动画
      appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
    },

    locales: {
        '/': {
            /**
             * @see https://theme-plume.vuejs.press/config/basic/#profile
             */
            profile: {
                avatar: '/icon.png',
                name: 'Digital-IDE',
                description: 'Digital-IDE 官方文档',
                // circle: true,
                // location: '',
                // organization: '',
            },

            navbar: zhNavbar,
            notes: zhNotes,

            sidebar: {
                '/': [
                    {
                        text: '指南',
                        icon: 'carbon:book',
                        collapsed: false,
                        prefix: '/guide/quick-start',
                        items: [
                            'introduction',
                            'installation',
                            'quick-start',
                            'todo',
                        ]
                    },
                    {
                        text: '语言服务',
                        icon: 'carbon:code',
                        collapsed: false,
                        prefix: '/guide/lsp',
                        items: [
                            "introduction",
                            "highlight",
                            "syntax-diagnosis",
                            "outline",
                            "hover-tips",
                            "completion",
                            "definition-jumps",
                            "code-formatter",
                            "translation"
                        ]
                    },
                    {
                        text: '项目管理',
                        icon: 'carbon:task',
                        collapsed: false,
                        prefix: '/guide/pm',
                        items: [
                            'introduction',
                            'project',
                            'simulate',
                            'code-doc',
                            'vcd',
                            'netlist'
                        ]
                    },
                    {
                        text: '关于',
                        icon: 'carbon:information',
                        link: '/guide/about.md'
                    }
                ]
            },

            /**
             * 公告板
             * @see https://theme-plume.vuejs.press/guide/features/bulletin/
             */
            // bulletin: {
            //   layout: 'top-right',
            //   contentType: 'markdown',
            //   title: '',
            //   content: '',
            // },
        },
        '/en/': {
            /**
             * @see https://theme-plume.vuejs.press/config/basic/#profile
             */
            profile: {
                avatar: '/icon.png',
                name: 'Digital-IDE',
                description: 'Digital-IDE Document',
                // circle: true,
                // location: '',
                // organization: '',
            },

            navbar: enNavbar,
            notes: enNotes,
            sidebar: {
                '/': [
                    {
                        text: 'Guide',
                        icon: 'carbon:book',
                        collapsed: false,
                        prefix: '/en/guide/quick-start',
                        items: [
                            'introduction',
                            'installation',
                            'quick-start',
                            'todo',
                        ]
                    },
                    {
                        text: 'Language Server',
                        icon: 'carbon:code',
                        collapsed: false,
                        prefix: '/en/guide/lsp',
                        items: [
                            "introduction",
                            "highlight",
                            "syntax-diagnosis",
                            "outline",
                            "hover-tips",
                            "completion",
                            "definition-jumps",
                            "code-formatter",
                            "translation"
                        ]
                    },
                    {
                        text: 'Project Management',
                        icon: 'carbon:task',
                        collapsed: false,
                        prefix: '/en/guide/pm',
                        items: [
                            'introduction',
                            'project',
                            'simulate',
                            'code-doc',
                            'netlist'
                        ]
                    },
                    {
                        text: 'About',
                        icon: 'carbon:information',
                        link: '/en/guide/about.md'
                    }
                ]
            },

            /**
             * 公告板
             * @see https://theme-plume.vuejs.press/guide/features/bulletin/
             */
            // bulletin: {
            //   layout: 'top-right',
            //   contentType: 'markdown',
            //   title: '',
            //   content: '',
            // },
        },
    },
})
